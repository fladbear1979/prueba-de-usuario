const express = require('express');
const app = express();
const userRoutes = require('./routes');

app.use(express.json());
app.use('/', userRoutes);

// Error handling middleware
app.use((req, res) => {
    console.error(`Unhandled request: ${req.method} ${req.originalUrl}`);
    res.status(404).json({ message: 'Not Found' });
});

app.use((err, req, res, next) => {
    console.error(err);
    res.status(500).json({ message: 'Internal Server Error' });
});

module.exports = app;