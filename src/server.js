const express = require('express');
const cors = require('cors');
require('dotenv').config();

const laborsRoutes = require('./routes/labors');
const costsRoutes = require('./routes/costs');
const workersRoutes = require('./routes/workers');
const cropsRoutes = require('./routes/crops');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/labors', laborsRoutes);
app.use('/costs', costsRoutes);
app.use('/workers', workersRoutes);
app.use('/crops', cropsRoutes);

// Health check endpoint
app.get('/health', (req, res) => {
  res.json({ status: 'OK', message: 'AgroMCP server is running' });
});

// Root endpoint
app.get('/', (req, res) => {
  res.json({
    message: 'Welcome to AgroMCP - Model Context Protocol for Agricultural Data',
    endpoints: [
      '/labors',
      '/costs', 
      '/workers',
      '/crops',
      '/health'
    ]
  });
});

app.listen(PORT, () => {
  console.log(`🌾 AgroMCP server running on port ${PORT}`);
  console.log(`📊 Available endpoints:`);
  console.log(`   • http://localhost:${PORT}/labors`);
  console.log(`   • http://localhost:${PORT}/costs`);
  console.log(`   • http://localhost:${PORT}/workers`);
  console.log(`   • http://localhost:${PORT}/crops`);
  console.log(`   • http://localhost:${PORT}/health`);
});
