import React, { useState, useRef, useEffect, useCallback, useImperativeHandle, forwardRef } from 'react';

// --- Font Options ---
const FONT_FACES = ['Arial', 'Verdana', 'Georgia', 'Times New Roman', 'Courier New', 'Impact', 'Comic Sans MS'];

// --- Reusable Slider Component ---
const ControlSlider = ({ label, value, onChange, min = 0, max = 200, unit = '%' }) => (
  <div>
    <label className="text-sm font-medium text-slate-400">{label}</label>
    <div className="flex items-center space-x-2">
      <input
        type="range"
        min={min}
        max={max}
        value={value}
        onChange={onChange}
        className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer"
      />
      <span className="text-sm text-slate-300 w-12 text-center">{value}{unit}</span>
    </div>
  </div>
);

// --- Preview Canvas Component ---
const Preview = forwardRef(({ image, filters, textProps }, ref) => {
  const canvasRef = useRef(null);
  useImperativeHandle(ref, () => canvasRef.current);

  const draw = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const container = canvas.parentElement;
    if (!container) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const { width, height } = container.getBoundingClientRect();
    if (canvas.width !== width || canvas.height !== height) {
      canvas.width = width;
      canvas.height = height;
    }

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    if (image) {
      ctx.filter = `brightness(${filters.brightness}%) contrast(${filters.contrast}%) grayscale(${filters.grayscale}%) sepia(${filters.sepia}%) saturate(${filters.saturate}%) invert(${filters.invert}%)`;

      const canvasAspectRatio = canvas.width / canvas.height;
      const imageAspectRatio = image.naturalWidth / image.naturalHeight;
      let renderWidth = canvas.width;
      let renderHeight = canvas.height;
      let x = 0;
      let y = 0;

      if (imageAspectRatio > canvasAspectRatio) {
        renderHeight = canvas.width / imageAspectRatio;
        y = (canvas.height - renderHeight) / 2;
      } else {
        renderWidth = canvas.height * imageAspectRatio;
        x = (canvas.width - renderWidth) / 2;
      }

      ctx.drawImage(image, x, y, renderWidth, renderHeight);

      // Draw Text
      ctx.filter = 'none';
      const { text, textColor, fontSize, fontFamily, position } = textProps;
      ctx.font = `${fontSize}px ${fontFamily}`;
      ctx.fillStyle = textColor;
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText(text, position.x, position.y);
    } else {
      ctx.fillStyle = '#475569';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.font = '1.2rem sans-serif';
      ctx.fillText('Upload an image to start editing', canvas.width / 2, canvas.height / 2);
    }
  }, [image, filters, textProps]);

  useEffect(() => {
    const container = canvasRef.current?.parentElement;
    if (!container) return;
    const resizeObserver = new ResizeObserver(() => draw());
    resizeObserver.observe(container);
    draw();
    return () => resizeObserver.disconnect();
  }, [draw]);

  return (
    <canvas
      ref={canvasRef}
      className="max-w-full max-h-full"
      style={{ cursor: image ? 'move' : 'default' }}
    />
  );
});
Preview.displayName = 'Preview';

// --- Main Component ---
const ImageEditor = () => {
  const [image, setImage] = useState(null);
  const [filters, setFilters] = useState({
    brightness: 100,
    contrast: 100,
    grayscale: 0,
    sepia: 0,
    saturate: 100,
    invert: 0,
  });

  const [textProps, setTextProps] = useState({
    text: 'Hello World',
    textColor: '#FFFFFF',
    fontSize: 48,
    fontFamily: 'Arial',
    position: { x: 0, y: 0 },
  });

  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });

  const canvasRef = useRef(null);
  const fileInputRef = useRef(null);

  const handleImageUpload = (file) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      const img = new Image();
      img.onload = () => {
        setImage(img);
        handleReset();
        if (canvasRef.current) {
          setTextProps((p) => ({
            ...p,
            position: {
              x: canvasRef.current.width / 2,
              y: canvasRef.current.height / 2,
            },
          }));
        }
      };
      img.src = e.target?.result;
    };
    reader.readAsDataURL(file);
  };

  const handleReset = () => {
    setFilters({
      brightness: 100,
      contrast: 100,
      grayscale: 0,
      sepia: 0,
      saturate: 100,
      invert: 0,
    });
    setTextProps({
      text: 'Hello World',
      textColor: '#FFFFFF',
      fontSize: 48,
      fontFamily: 'Arial',
      position: { x: canvasRef.current?.width / 2 || 0, y: canvasRef.current?.height / 2 || 0 },
    });
  };

  const handleDownload = () => {
    if (!image || !canvasRef.current) return;
    const tempCanvas = document.createElement('canvas');
    const ctx = tempCanvas.getContext('2d');
    if (!ctx) return;

    tempCanvas.width = image.naturalWidth;
    tempCanvas.height = image.naturalHeight;
    ctx.filter = `brightness(${filters.brightness}%) contrast(${filters.contrast}%) grayscale(${filters.grayscale}%) sepia(${filters.sepia}%) saturate(${filters.saturate}%) invert(${filters.invert}%)`;
    ctx.drawImage(image, 0, 0);

    const scale = image.naturalWidth / canvasRef.current.width;
    ctx.filter = 'none';
    ctx.font = `${textProps.fontSize * scale}px ${textProps.fontFamily}`;
    ctx.fillStyle = textProps.textColor;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(textProps.text, textProps.position.x * scale, textProps.position.y * scale);

    const link = document.createElement('a');
    link.download = 'edited-image.png';
    link.href = tempCanvas.toDataURL('image/png');
    link.click();
  };

  const handleFilterChange = (name, value) => {
    setFilters((prev) => ({ ...prev, [name]: value }));
  };

  const getMousePos = (e) => {
    const rect = canvasRef.current.getBoundingClientRect();
    return { x: e.clientX - rect.left, y: e.clientY - rect.top };
  };

  const handleMouseDown = (e) => {
    if (!image) return;
    const pos = getMousePos(e);
    const ctx = canvasRef.current.getContext('2d');
    ctx.font = `${textProps.fontSize}px ${textProps.fontFamily}`;
    const textMetrics = ctx.measureText(textProps.text);
    const textWidth = textMetrics.width;
    const textHeight = textProps.fontSize;

    if (
      pos.x > textProps.position.x - textWidth / 2 &&
      pos.x < textProps.position.x + textWidth / 2 &&
      pos.y > textProps.position.y - textHeight / 2 &&
      pos.y < textProps.position.y + textHeight / 2
    ) {
      setIsDragging(true);
      setDragStart({ x: pos.x - textProps.position.x, y: pos.y - textProps.position.y });
    }
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    const pos = getMousePos(e);
    setTextProps((p) => ({ ...p, position: { x: pos.x - dragStart.x, y: pos.y - dragStart.y } }));
  };

  const handleMouseUp = () => setIsDragging(false);
  const handleMouseLeave = () => setIsDragging(false);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 h-full max-h-[85vh]">
      {/* --- Control Panel --- */}
      <div className="md:col-span-1 bg-slate-800 rounded-lg border border-slate-700 p-4 flex flex-col space-y-4 overflow-y-auto">
        <input
          type="file"
          ref={fileInputRef}
          onChange={(e) => e.target.files && handleImageUpload(e.target.files[0])}
          className="hidden"
          accept="image/*"
        />
        <button
          onClick={() => fileInputRef.current?.click()}
          className="w-full px-4 py-2 bg-sky-600 hover:bg-sky-500 rounded-md transition-colors duration-200 text-white font-semibold"
        >
          Upload Image
        </button>

        {/* Filters */}
        <div className={`space-y-4 ${!image ? 'opacity-50 pointer-events-none' : ''}`}>
          <h3 className="text-md font-semibold text-slate-300 border-b border-slate-700 pb-1">Image Filters</h3>
          {Object.entries(filters).map(([key, value]) => (
            <ControlSlider
              key={key}
              label={key.charAt(0).toUpperCase() + key.slice(1)}
              value={value}
              onChange={(e) => handleFilterChange(key, +e.target.value)}
              max={key === 'grayscale' || key === 'sepia' || key === 'invert' ? 100 : 200}
            />
          ))}
        </div>

        {/* Text Controls */}
        <div className={`space-y-4 ${!image ? 'opacity-50 pointer-events-none' : ''}`}>
          <h3 className="text-md font-semibold text-slate-300 border-b border-slate-700 pb-1">Text Settings</h3>
          <input
            type="text"
            value={textProps.text}
            onChange={(e) => setTextProps((p) => ({ ...p, text: e.target.value }))}
            className="w-full bg-slate-700 border border-slate-600 rounded-md px-2 py-1 text-white"
          />
          <ControlSlider
            label="Font Size"
            value={textProps.fontSize}
            onChange={(e) => setTextProps((p) => ({ ...p, fontSize: +e.target.value }))}
            min={10}
            max={150}
            unit="px"
          />

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="text-sm font-medium text-slate-400">Color</label>
              <input
                type="color"
                value={textProps.textColor}
                onChange={(e) => setTextProps((p) => ({ ...p, textColor: e.target.value }))}
                className="w-full h-10 p-1 bg-slate-700 border border-slate-600 rounded-md cursor-pointer"
              />
            </div>
            <div>
              <label className="text-sm font-medium text-slate-400">Font</label>
              <select
                value={textProps.fontFamily}
                onChange={(e) => setTextProps((p) => ({ ...p, fontFamily: e.target.value }))}
                className="w-full bg-slate-700 border border-slate-600 rounded-md px-2 py-2 text-white h-10"
              >
                {FONT_FACES.map((font) => (
                  <option key={font} value={font}>
                    {font}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        <div className="flex-grow"></div>

        <div className="flex space-x-2 pt-2 border-t border-slate-700">
          <button
            onClick={handleReset}
            disabled={!image}
            className="w-full px-4 py-2 bg-slate-700 hover:bg-slate-600 rounded-md text-slate-300 disabled:opacity-50"
          >
            Reset
          </button>
          <button
            onClick={handleDownload}
            disabled={!image}
            className="w-full px-4 py-2 bg-green-700 hover:bg-green-600 rounded-md text-white font-semibold disabled:opacity-50"
          >
            Download
          </button>
        </div>
      </div>

      {/* --- Preview Area --- */}
      <div
        className="relative md:col-span-2 bg-slate-800 rounded-lg border border-slate-700 w-full h-full min-h-[400px] p-2 flex items-center justify-center"
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseLeave}
      >
        <Preview ref={canvasRef} image={image} filters={filters} textProps={textProps} />
      </div>
    </div>
  );
};

export default ImageEditor;
