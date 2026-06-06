const express = require('express');

const app = express();

const PORT = 3000;

// Home Route
app.get('/', (req, res) => {
    res.send('Welcome to Home Page');
});

// About Route
app.get('/about', (req, res) => {
    res.send('Welcome to About Page');
});

// Profile Route
app.get('/profile', (req, res) => {
    res.send('Welcome to Profile Page');
});

// Contact Us Route
app.get('/contact-us', (req, res) => {
    res.send('Welcome to Contact Us Page');
});

// Setting Route
app.get('/setting', (req, res) => {
    res.send('Welcome to Setting Page');
});

// Games Route
app.get('/games', (req, res) => {
    res.send('Welcome to Games Page');
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
