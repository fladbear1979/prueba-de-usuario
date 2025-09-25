const express = require('express');
const router = express.Router();
const User = require('../models/User');

// Registro de usuario
router.post('/register', async (req, res) => {
  const { username, email, password } = req.body;
  const newUser = new User({ username, email, password });
  await newUser.save();
  res.status(201).send('Usuario registrado con éxito');
});

module.exports = router;