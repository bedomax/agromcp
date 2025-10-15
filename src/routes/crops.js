const express = require('express');
const router = express.Router();
const cropsData = require('../mock/crops.json');

// GET /crops - Get all crops
router.get('/', (req, res) => {
  try {
    res.json({
      success: true,
      data: cropsData,
      count: cropsData.length
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: 'Failed to fetch crops'
    });
  }
});

// GET /crops/:id - Get specific crop
router.get('/:id', (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const crop = cropsData.find(c => c.id === id);
    
    if (!crop) {
      return res.status(404).json({
        success: false,
        error: 'Crop not found'
      });
    }
    
    res.json({
      success: true,
      data: crop
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: 'Failed to fetch crop'
    });
  }
});

module.exports = router;
