const express = require('express');
const router = express.Router();
const costsData = require('../mock/costs.json');

// GET /costs - Get all cost records
router.get('/', (req, res) => {
  try {
    res.json({
      success: true,
      data: costsData,
      count: costsData.length
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: 'Failed to fetch cost records'
    });
  }
});

// GET /costs/:id - Get specific cost record
router.get('/:id', (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const cost = costsData.find(c => c.id === id);
    
    if (!cost) {
      return res.status(404).json({
        success: false,
        error: 'Cost record not found'
      });
    }
    
    res.json({
      success: true,
      data: cost
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: 'Failed to fetch cost record'
    });
  }
});

module.exports = router;
