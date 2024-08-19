const express = require('express');
const path = require('path');
const dataRouter = require('./routes/api/data'); // Import the router

const app = express();
const PORT = process.env.PORT || 5500;

// Middleware to parse JSON bodies
app.use(express.json());

// Mount the data router on the '/routes/api/data' path
app.use('/routes/api/data', dataRouter);


// Example API route
app.get('/routes/api', (req, res) => {
  res.json({ message: 'Hello from the Express.js server!' });
});

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'dist')));

// Catch-all route to handle routing on the frontend (for Single Page Applications)
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});


// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
