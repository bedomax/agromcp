const express = require('express');
const cors = require('cors');

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
app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', message: 'AgroMCP server is running' });
});

// API root endpoint
app.get('/api', (req, res) => {
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
app.get('/', (req, res) => {
  res.send(`
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>AgroMCP - Model Context Protocol for Agriculture</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
            line-height: 1.6;
            color: #333;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            min-height: 100vh;
            padding: 20px;
        }
        .container {
            max-width: 1000px;
            margin: 0 auto;
            background: white;
            border-radius: 20px;
            box-shadow: 0 20px 60px rgba(0,0,0,0.3);
            overflow: hidden;
        }
        .header {
            background: linear-gradient(135deg, #2ecc71 0%, #27ae60 100%);
            color: white;
            padding: 60px 40px;
            text-align: center;
        }
        .header h1 {
            font-size: 3em;
            margin-bottom: 10px;
            text-shadow: 2px 2px 4px rgba(0,0,0,0.2);
        }
        .header p {
            font-size: 1.3em;
            opacity: 0.95;
        }
        .content {
            padding: 40px;
        }
        .section {
            margin-bottom: 40px;
        }
        .section h2 {
            color: #2ecc71;
            font-size: 2em;
            margin-bottom: 20px;
            padding-bottom: 10px;
            border-bottom: 3px solid #2ecc71;
        }
        .endpoints {
            display: grid;
            gap: 20px;
            margin-top: 20px;
        }
        .endpoint {
            background: #f8f9fa;
            padding: 20px;
            border-radius: 10px;
            border-left: 4px solid #2ecc71;
            transition: transform 0.2s, box-shadow 0.2s;
        }
        .endpoint:hover {
            transform: translateX(5px);
            box-shadow: 0 5px 15px rgba(0,0,0,0.1);
        }
        .endpoint h3 {
            color: #27ae60;
            margin-bottom: 10px;
            font-size: 1.3em;
        }
        .endpoint code {
            background: #e8f5e9;
            padding: 8px 12px;
            border-radius: 5px;
            display: inline-block;
            margin: 5px 0;
            color: #1b5e20;
            font-weight: 600;
        }
        .endpoint p {
            color: #666;
            margin-top: 10px;
        }
        .features {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 20px;
            margin-top: 20px;
        }
        .feature {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            padding: 30px;
            border-radius: 10px;
            text-align: center;
        }
        .feature h3 {
            font-size: 1.5em;
            margin-bottom: 10px;
        }
        .cta {
            background: #2ecc71;
            color: white;
            padding: 30px;
            border-radius: 10px;
            text-align: center;
            margin-top: 40px;
        }
        .cta h2 {
            color: white;
            border: none;
            margin-bottom: 15px;
        }
        .btn {
            display: inline-block;
            background: white;
            color: #2ecc71;
            padding: 15px 30px;
            border-radius: 50px;
            text-decoration: none;
            font-weight: bold;
            margin: 10px;
            transition: transform 0.2s;
        }
        .btn:hover {
            transform: scale(1.05);
        }
        .footer {
            background: #2c3e50;
            color: white;
            text-align: center;
            padding: 20px;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>🌾 AgroMCP</h1>
            <p>Model Context Protocol for Agricultural Data</p>
        </div>

        <div class="content">
            <div class="section">
                <h2>Acerca del Proyecto</h2>
                <p><strong>AgroMCP</strong> es una implementación de referencia del <strong>Model Context Protocol (MCP)</strong> diseñada específicamente para conectar datos agrícolas con modelos de IA como Gemini y GPT.</p>
                <p>Este servidor expone endpoints RESTful que proporcionan acceso a información sobre labores agrícolas, costos, trabajadores y cultivos.</p>
            </div>

            <div class="section">
                <h2>API Endpoints</h2>
                <div class="endpoints">
                    <div class="endpoint">
                        <h3>📊 Labores Agrícolas</h3>
                        <code>GET /api/labors</code>
                        <p>Obtiene información sobre las labores y actividades agrícolas realizadas en el campo.</p>
                    </div>
                    <div class="endpoint">
                        <h3>💰 Costos</h3>
                        <code>GET /api/costs</code>
                        <p>Accede a registros de costos operacionales y gastos de producción agrícola.</p>
                    </div>
                    <div class="endpoint">
                        <h3>👷 Trabajadores</h3>
                        <code>GET /api/workers</code>
                        <p>Consulta información sobre el personal y trabajadores del campo.</p>
                    </div>
                    <div class="endpoint">
                        <h3>🌱 Cultivos</h3>
                        <code>GET /api/crops</code>
                        <p>Obtiene datos sobre los cultivos, variedades y ciclos de producción.</p>
                    </div>
                    <div class="endpoint">
                        <h3>🏥 Health Check</h3>
                        <code>GET /api/health</code>
                        <p>Verifica el estado del servidor y disponibilidad del API.</p>
                    </div>
                </div>
            </div>

            <div class="section">
                <h2>Características</h2>
                <div class="features">
                    <div class="feature">
                        <h3>🚀 Rápido</h3>
                        <p>API REST construida con Express.js para alto rendimiento</p>
                    </div>
                    <div class="feature">
                        <h3>🔌 Integrable</h3>
                        <p>Compatible con Model Context Protocol para IA</p>
                    </div>
                    <div class="feature">
                        <h3>📦 Escalable</h3>
                        <p>Arquitectura modular y fácil de extender</p>
                    </div>
                    <div class="feature">
                        <h3>🌐 Open Source</h3>
                        <p>Código abierto y libre para usar</p>
                    </div>
                </div>
            </div>

            <div class="cta">
                <h2>Comienza a Usar AgroMCP</h2>
                <p>Prueba nuestros endpoints y construye aplicaciones inteligentes para la agricultura</p>
                <a href="/api" class="btn">Ver API</a>
                <a href="/api/health" class="btn">Health Check</a>
            </div>
        </div>

        <div class="footer">
            <p>&copy; 2025 AgroMCP - Model Context Protocol for Agriculture</p>
            <p>Conectando datos agrícolas con inteligencia artificial</p>
        </div>
    </div>
</body>
</html>
  `);
});

// Export for Vercel serverless
module.exports = app;
