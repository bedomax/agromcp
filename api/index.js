const express = require('express');
const cors = require('cors');
const path = require('path');
const fs = require('fs');

const laborsRoutes = require('../src/routes/labors');
const costsRoutes = require('../src/routes/costs');
const workersRoutes = require('../src/routes/workers');
const cropsRoutes = require('../src/routes/crops');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/labors', laborsRoutes);
app.use('/api/costs', costsRoutes);
app.use('/api/workers', workersRoutes);
app.use('/api/crops', cropsRoutes);

// Health check endpoint
app.get('/api/health', (_req, res) => {
  res.json({ status: 'OK', message: 'AgroMCP server is running' });
});

// API root endpoint
app.get('/api', (_req, res) => {
  res.json({
    message: 'Welcome to AgroMCP - Model Context Protocol for Agricultural Data',
    endpoints: [
      '/api/labors',
      '/api/costs',
      '/api/workers',
      '/api/crops',
      '/api/health'
    ]
  });
});

// Root endpoint - serve documentation
app.get('/', (_req, res) => {
  const htmlPath = path.join(__dirname, 'index.html');
  const html = fs.readFileSync(htmlPath, 'utf-8');
  res.send(html);
});

// Export for Vercel serverless
module.exports = app;
