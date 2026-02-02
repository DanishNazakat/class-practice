const express = require('express');
const mongoose = require('mongoose');
const profileRoutes = require('./routes/profileRoutes');
const path = require('path');

const app = express();
require('dotenv').config();
const PORT = process.env.PORT || 3000;

// Connect to MongoDB
mongoose.connect(process.env.DB_CONNECTION)
  .then(() => console.log('Database connected'))
  .catch(err => console.error(err));

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// Serve static files (uploaded images)
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Use profile routes
app.use('/api/profiles', profileRoutes);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
