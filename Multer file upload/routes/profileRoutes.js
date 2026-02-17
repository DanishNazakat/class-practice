const express = require('express');
const router = express.Router();
const upload = require('../utils/upload'); // Import the Multer middleware
const profileController = require('../controllers/profileController');

// Create Profile route with Multer middleware
router.post('/', upload, profileController.createProfile);

// Read Profiles route
router.get('/', profileController.getProfiles);

// ... Add routes for update (PUT) and delete (DELETE)

module.exports = router;
