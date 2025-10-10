const Image = require('../models/Image');
const Client = require('../models/Client');
const multer = require('multer');
const path = require('path');

// Multer setup
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, 'uploads/'),
  filename: (req, file, cb) => cb(null, Date.now() + path.extname(file.originalname))
});
const upload = multer({ storage });

exports.uploadMiddleware = upload.single('image');

exports.uploadImage = async (req, res) => {
  const { client, platform } = req.body;

  // Check if user is allowed
  const allowed = req.user.role === 'admin' || req.user.allowedFolders.some(f => f.client === client && f.platform === platform);
  if (!allowed) return res.status(403).json({ message: 'Access denied to this folder' });

  const image = await Image.create({
    url: req.file.path,
    name: req.file.originalname,
    client,
    platform,
    uploadedBy: req.user._id
  });

  // Add to client folder
  const clientDoc = await Client.findOne({ name: client });
  clientDoc.platforms[platform].push(image._id);
  await clientDoc.save();

  res.json(image);
};

exports.getImages = async (req, res) => {
  const { client, platform } = req.query;

  // Filter images based on access
  const allowedFolders = req.user.role === 'admin' 
    ? null
    : req.user.allowedFolders;

  const filter = {};
  if (client) filter.client = client;
  if (platform) filter.platform = platform;
  if (allowedFolders) {
    filter.$or = allowedFolders.map(f => ({ client: f.client, platform: f.platform }));
  }

  const images = await Image.find(filter);
  res.json(images);
};

exports.deleteImage = async (req, res) => {
  const { id } = req.params;
  const image = await Image.findById(id);
  if (!image) return res.status(404).json({ message: 'Image not found' });

  const allowed = req.user.role === 'admin' || req.user.allowedFolders.some(f => f.client === image.client && f.platform === image.platform);
  if (!allowed) return res.status(403).json({ message: 'Access denied' });

  await image.remove();
  res.json({ message: 'Image deleted' });
};
