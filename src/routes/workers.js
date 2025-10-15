const express = require('express');
const router = express.Router();
const workersData = require('../mock/workers.json');

// GET /workers - Get all workers
router.get('/', (req, res) => {
  try {
    res.json({
      success: true,
      data: workersData,
      count: workersData.length
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: 'Failed to fetch workers'
    });
  }
});

// GET /workers/:id - Get specific worker
router.get('/:id', (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const worker = workersData.find(w => w.id === id);
    
    if (!worker) {
      return res.status(404).json({
        success: false,
        error: 'Worker not found'
      });
    }
    
    res.json({
      success: true,
      data: worker
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: 'Failed to fetch worker'
    });
  }
});

module.exports = router;
