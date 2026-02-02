// /models/Profile.js
const mongoose = require('mongoose');

const ProfileSchema = new mongoose.Schema({
  name: { type: String, required: true },       // User ka name
  contact: { type: String },                     // Contact info (optional)
  imagePath: { type: String }                    // Uploaded image ka server path
}, { timestamps: true });                        // createdAt aur updatedAt auto create

module.exports = mongoose.model('Profile', ProfileSchema);
