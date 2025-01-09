const express = require('express');
const path = require('path');
const app = express();
const port = 100;

// Serve static files from the 'public' folder
app.use(express.static(path.join(__dirname, 'public')));

// Default route to serve 'getstarted.html' as the home page
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'getstarted.html'));  // Serve the default HTML file
});

// API route (just an example route)
app.get('/api', (req, res) => {
  res.json('HTTP GET request received');
});

// Catch-all route to redirect any undefined routes to the default page
app.all('*', (req, res) => {
  res.redirect('/');  // Redirect to the default page (getstarted.html)
});

// Start the server
app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});