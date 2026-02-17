const Profile = require('../models/Profile');

// Create (Upload) Profile
exports.createProfile = async (req, res) => {
  try {
    const { name, contact } = req.body;
    const imagePath = req.file ? req.file.path : null; // Get the path from Multer

    const profile = await Profile.create({ name, contact, imagePath });
    res.status(201).json({ success: true, message: 'Profile created successfully', profile });
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
};

// Read All Profiles
exports.getProfiles = async (req, res) => {
  try {
    const profiles = await Profile.find();
    res.status(200).json({ success: true, profiles });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

// ... Implement update and delete functions (e.g., delete the old image file before updating with a new one)
