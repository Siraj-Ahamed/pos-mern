const express = require('express');
const app = express();
const PORT = process.env.PORT || 8080;

// Route to handle GET requests
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

// Start the server
const server = app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

// Handle shutdown gracefully
process.on('SIGINT', () => {
  console.log('Received SIGINT signal. Closing server...');
  server.close(() => {
    console.log('Server closed. Exiting process...');
    process.exit(0); // Terminate the process after closing server
  });
});
