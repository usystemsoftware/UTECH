const mongoose = require('mongoose');

const clientSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  platforms: {
    Facebook: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Image' }],
    Instagram: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Image' }],
    YouTube: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Image' }],
    'Google Ads': [{ type: mongoose.Schema.Types.ObjectId, ref: 'Image' }],
  },
});

module.exports = mongoose.model('Client', clientSchema);
