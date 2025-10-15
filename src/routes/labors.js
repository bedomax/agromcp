const express = require('express');
const router = express.Router();
const laborsData = require('../mock/labors.json');

// GET /labors - Get all labor activities
router.get('/', (req, res) => {
  try {
    res.json({
      success: true,
      data: laborsData,
      count: laborsData.length
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: 'Failed to fetch labor activities'
    });
  }
});

// GET /labors/:id - Get specific labor activity
router.get('/:id', (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const labor = laborsData.find(l => l.id === id);
    
    if (!labor) {
      return res.status(404).json({
        success: false,
        error: 'Labor activity not found'
      });
    }
    
    res.json({
      success: true,
      data: labor
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: 'Failed to fetch labor activity'
    });
  }
});

module.exports = router;
