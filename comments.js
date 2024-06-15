// Create web server

const express = require('express');
const app = express();

// Middleware
app.use(express.json());

// Static files
app.use(express.static('public'));

// Router
app.use('/api/comments', require('./routes/api/comments'));

// Listen
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server started on port ${port}`));