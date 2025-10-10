import React, { useState, useRef, useMemo, useEffect } from 'react';
import { Folder, Image, Upload, PlusCircle, Trash2, X } from 'lucide-react';
import { fetchImages, uploadImage, deleteImageApi } from '../../../Api/imageApi';

const PLATFORM_FOLDERS = ["Facebook", "Instagram", "YouTube", "Google Ads"];

const ImageUploadPanel = () => {
  const [clientFolders, setClientFolders] = useState({});
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedClient, setSelectedClient] = useState('');
  const [newClientName, setNewClientName] = useState('');
  const [selectedPlatform, setSelectedPlatform] = useState('Facebook');
  const [isDragging, setIsDragging] = useState(false);
  const [message, setMessage] = useState(null);
  const [expandedClients, setExpandedClients] = useState({});
  const fileInputRef = useRef(null);

  // Fetch all folders and images on mount
  useEffect(() => {
    loadImages();
  }, []);

  const loadImages = async () => {
    try {
      const data = await fetchImages(); // call backend API
      setClientFolders(data);
    } catch (err) {
      console.error(err);
      showMessage('Failed to fetch images', 'error');
    }
  };

  const showMessage = (text, type = 'info') => {
    setMessage({ text, type });
    setTimeout(() => setMessage(null), 3000);
  };

  const createImageObject = (url, name) => ({ id: Date.now() + Math.random(), url, name });

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file && file.type.startsWith('image/')) {
      setSelectedImage(file);
    } else showMessage('Please select a valid image file (JPG/PNG).', 'error');
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);
    const file = e.dataTransfer.files[0];
    if (file && file.type.startsWith('image/')) setSelectedImage(file);
    else showMessage('Please drop a valid image file (JPG/PNG).', 'error');
  };

  const handleDragOver = (e) => e.preventDefault();
  const handleDragEnter = (e) => { e.preventDefault(); setIsDragging(true); };
  const handleDragLeave = (e) => { e.preventDefault(); setIsDragging(false); };
  const triggerFileInput = () => fileInputRef.current.click();
  const handleRemoveImage = () => { setSelectedImage(null); if(fileInputRef.current) fileInputRef.current.value = ''; setNewClientName(''); };

  const clientNames = useMemo(() => Object.keys(clientFolders), [clientFolders]);

  const handleClientSelectionChange = (e) => {
    const value = e.target.value;
    if (value === 'NEW_CLIENT') { setSelectedClient(''); setNewClientName(''); }
    else { setSelectedClient(value); setNewClientName(''); }
  };

  const handleSaveImage = async () => {
    if (!selectedImage) return showMessage('No image selected!', 'error');
    const clientToSave = newClientName.trim() || selectedClient;
    if (!clientToSave) return showMessage('Please select or enter a client name.', 'error');

    try {
      await uploadImage(selectedImage, clientToSave, selectedPlatform);
      showMessage(`Image uploaded to ${clientToSave}/${selectedPlatform}!`, 'success');
      handleRemoveImage();
      loadImages(); // reload from server
      setSelectedClient(clientToSave);
      setNewClientName('');
    } catch (err) {
      console.error(err);
      showMessage('Upload failed', 'error');
    }
  };

  const handleRemoveFolderImage = async (clientName, platformName, imageId) => {
    try {
      await deleteImageApi(imageId);
      showMessage('Image deleted!', 'success');
      loadImages();
    } catch (err) {
      console.error(err);
      showMessage('Delete failed', 'error');
    }
  };

  const toggleClientExpand = (clientName) => {
    setExpandedClients(prev => ({ ...prev, [clientName]: !prev[clientName] }));
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white p-4 sm:p-8 font-['Inter']">
      <header className="mb-10 max-w-7xl mx-auto">
        <h1 className="text-4xl font-extrabold mb-2 text-indigo-400">
          <Folder className="inline-block mr-3 w-8 h-8"/>Client Asset Organizer
        </h1>
        <p className="text-gray-400">Organize creatives into Client (Top-Level) and Platform (Nested) folders.</p>
      </header>

      <div className="flex flex-col lg:flex-row gap-8 max-w-7xl mx-auto">
        {/* Upload Panel */}
        <div className="lg:w-1/3 w-full">
          <div className="bg-gray-800 rounded-xl p-6 border border-gray-700 shadow-xl lg:sticky lg:top-8">
            <h2 className="text-2xl font-bold text-green-400 mb-6 border-b border-gray-700 pb-3 flex items-center">
              <Upload className="w-5 h-5 mr-2"/> Upload Creative
            </h2>

            <input type="file" accept="image/*" ref={fileInputRef} onChange={handleFileChange} className="hidden"/>
            {selectedImage ? (
              <div className="relative w-full h-72 border-2 border-indigo-500 rounded-xl flex items-center justify-center overflow-hidden mb-6 bg-gray-700/50">
                <img src={URL.createObjectURL(selectedImage)} alt="Preview" className="max-h-full max-w-full object-contain p-2"/>
                <button onClick={handleRemoveImage} className="absolute top-3 right-3 p-2 bg-red-600 rounded-full hover:bg-red-700"><X className="w-5 h-5"/></button>
              </div>
            ) : (
              <div className={`w-full h-72 flex flex-col items-center justify-center border-2 ${isDragging ? 'border-green-500 bg-gray-700' : 'border-gray-600 bg-gray-800/70'} border-dashed rounded-xl p-4 text-center cursor-pointer mb-6`}
                   onDrop={handleDrop} onDragOver={handleDragOver} onDragEnter={handleDragEnter} onDragLeave={handleDragLeave} onClick={triggerFileInput}>
                <Image className="w-10 h-10 text-gray-500 mb-3"/>
                <p className="text-gray-300 font-semibold">Drag & drop or click to upload</p>
                <p className="text-xs text-gray-500 mt-2">JPG, PNG, WEBP files</p>
              </div>
            )}

            {selectedImage && (
              <div className="flex flex-col gap-4">
                <label className="text-gray-400 font-medium">1. Select or Create Client Folder:</label>
                <select value={newClientName ? 'NEW_CLIENT' : selectedClient} onChange={handleClientSelectionChange} className="px-3 py-2 rounded-lg text-gray-900 bg-gray-100 border border-gray-300">
                  {clientNames.map(client => <option key={client} value={client}>{client}</option>)}
                  <option value="NEW_CLIENT">-- Create New Client Folder --</option>
                </select>
                {(newClientName || selectedClient === '') && (
                  <input type="text" placeholder="Enter New Client Name" value={newClientName} onChange={(e)=>setNewClientName(e.target.value)} className="px-3 py-2 rounded-lg text-gray-900 bg-gray-100 border border-indigo-500"/>
                )}
                <label className="text-gray-400 font-medium">2. Select Platform Folder:</label>
                <select value={selectedPlatform} onChange={(e)=>setSelectedPlatform(e.target.value)} className="px-3 py-2 rounded-lg text-gray-900 bg-gray-100 border border-gray-300">
                  {PLATFORM_FOLDERS.map(platform => <option key={platform} value={platform}>{platform}</option>)}
                </select>

                <button onClick={handleSaveImage} className="px-6 py-3 mt-2 bg-indigo-600 text-white font-bold rounded-xl hover:bg-indigo-700 shadow-md flex items-center justify-center">
                  <PlusCircle className="w-5 h-5 mr-2"/> Save to {newClientName.trim() || selectedClient} / {selectedPlatform}
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Dashboard Panel */}
        <div className="lg:w-2/3 w-full flex flex-col gap-4">
          {clientNames.length === 0 && <div className="text-center text-gray-500 py-12 border border-dashed border-gray-700 rounded-xl">No clients created yet. Upload an image to start!</div>}
          
          {clientNames.map(clientName => (
            <div key={clientName} className="bg-gray-800 rounded-xl border border-yellow-700/50 shadow-xl p-5">
              <div className="flex justify-between items-center mb-2 cursor-pointer" onClick={()=>toggleClientExpand(clientName)}>
                <div className="flex items-center">
                  <Folder className="w-6 h-6 text-yellow-400 mr-2"/>
                  <h3 className="text-2xl font-extrabold text-yellow-300">{clientName}</h3>
                </div>
                <span className="text-gray-400">{expandedClients[clientName] ? '▲' : '▼'}</span>
              </div>

              {expandedClients[clientName] && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-2">
                  {Object.entries(clientFolders[clientName]).map(([platformName, images]) => (
                    <div key={platformName} className="bg-gray-700 rounded-lg p-3 border border-gray-600">
                      <div className="flex items-center mb-2">
                        <Folder className="w-4 h-4 text-indigo-400 mr-2"/>
                        <h4 className="text-lg font-semibold text-gray-200">{platformName} ({images.length})</h4>
                      </div>
                      {images.length > 0 ? (
                        <div className="flex space-x-2 overflow-x-auto py-2">
                          {images.map(img => (
                            <div key={img.id} className="relative group rounded-md overflow-hidden bg-gray-900 w-40 h-40 flex-shrink-0">
                              <img src={`http://localhost:5000${img.url}`} alt={img.name} className="object-cover w-full h-full"/>
                              <button onClick={()=>handleRemoveFolderImage(clientName, platformName, img.id)} className="absolute top-1 right-1 p-1 bg-red-600 text-white rounded-full opacity-0 group-hover:opacity-100 hover:bg-red-700 shadow-md">
                                <Trash2 className="w-3 h-3"/>
                              </button>
                            </div>
                          ))}
                        </div>
                      ) : <div className="text-gray-500 italic text-center text-sm py-4">Empty</div>}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {message && <div className={`fixed bottom-5 right-5 p-4 rounded-lg shadow-2xl text-white font-semibold transition-all duration-300 z-50 ${message.type==='success'?'bg-green-600':message.type==='error'?'bg-red-600':'bg-indigo-600'}`}>{message.text}</div>}
    </div>
  );
};

export default ImageUploadPanel;
