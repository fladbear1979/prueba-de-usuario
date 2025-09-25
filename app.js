const express = require('express');
const app = express();
const userRoutes = require('./routes');

app.use(express.json());
app.use('/', userRoutes);

// Error handling middleware
app.use((req, res, next) => {
    res.status(404).json({ message: 'Not Found' });
});

module.exports = app;