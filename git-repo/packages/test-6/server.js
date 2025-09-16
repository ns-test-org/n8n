const express = require('express');
const path = require('path');

const app = express();

// Parse command line arguments for port
const args = process.argv.slice(2);
const portIndex = args.indexOf('--port');
const PORT = portIndex !== -1 && args[portIndex + 1] ? parseInt(args[portIndex + 1]) : process.env.PORT || 3000;

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));

// Main route
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`🚀 Test-6 app running on port ${PORT}`);
  console.log(`🎉 Visit http://localhost:${PORT} to see the awesome animated "Hello coop" message!`);
});
