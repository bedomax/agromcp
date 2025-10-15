# 🌾 AgroMCP

**AgroMCP** is an open-source reference implementation of the **Model Context Protocol (MCP)** for agricultural data management. It provides a standardized way to expose farm operational data to AI models and applications.

## What is MCP?

**Model Context Protocol (MCP)** is an open standard that enables AI applications to securely access external data sources and tools. Think of it as a universal adapter that lets AI assistants (like Claude, ChatGPT, or Gemini) connect to your data in a structured, secure way.

### Why MCP for Agriculture?

Agricultural operations generate vast amounts of data: labor records, costs, crop information, and worker schedules. MCP allows this data to be:

- **Accessible**: AI models can query real farm data instead of making assumptions
- **Structured**: Data follows a consistent schema that AI can reliably parse
- **Secure**: Access is controlled and data remains on your infrastructure
- **Interoperable**: Works with any MCP-compatible AI application

## Architecture

```
┌─────────────┐         ┌──────────────┐         ┌──────────────┐
│   AI Model  │ ◄─────► │   AgroMCP    │ ◄─────► │  Farm Data   │
│ (Claude/GPT)│   MCP   │    Server    │   API   │  (Database)  │
└─────────────┘         └──────────────┘         └──────────────┘
```

AgroMCP sits between AI models and your farm data, translating AI queries into database requests and formatting responses in a way AI models can understand.

## API Endpoints

This implementation exposes the following REST endpoints:

| Endpoint | Description | Use Case |
|----------|-------------|----------|
| `/api/labors` | Agricultural labor activities | "Show me all irrigation tasks from last month" |
| `/api/costs` | Operational costs and expenses | "What were my fertilizer costs in Q1?" |
| `/api/workers` | Farm personnel information | "Which workers are certified for pesticide application?" |
| `/api/crops` | Crop data and growing cycles | "What's the status of my corn harvest?" |
| `/api/health` | Server health check | System monitoring and uptime |

## 🚀 Quick Start

### Local Development

```bash
git clone https://github.com/bedomax/agromcp.git
cd AgroMCP
npm install
npm start
```

The server will start on `http://localhost:3000`

### Deploy to Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/bedomax/agromcp)

Or manually:

```bash
npm install -g vercel
vercel
```

## MCP Configuration

The [`mcp.json`](./mcp.json) file defines the MCP schema that AI models use to understand available endpoints and data structures. This allows AI to:

1. Discover what data is available
2. Understand the structure of requests and responses
3. Generate appropriate queries automatically

Example MCP usage with Claude Desktop:

```json
{
  "mcpServers": {
    "agromcp": {
      "url": "https://your-deployment.vercel.app/api"
    }
  }
}
```

## Use Cases

### Farm Management AI Assistant
"How much did we spend on labor for tomato harvesting last month?"

### Predictive Analytics
"Based on historical labor patterns, how many workers will we need for next week's harvest?"

### Compliance Reporting
"Generate a report of all workers who handled pesticides this season."

### Cost Optimization
"Compare fertilizer costs across all crops and identify savings opportunities."

## Data Structure

Currently uses mock data for demonstration. In production, connect to your actual database:

```javascript
// Example: Connect to PostgreSQL
const { Pool } = require('pg');
const pool = new Pool({
  connectionString: process.env.DATABASE_URL
});
```

## Contributing

Contributions are welcome! This is a reference implementation meant to be extended for real-world agricultural operations.

## License

MIT License - feel free to use this in your projects
