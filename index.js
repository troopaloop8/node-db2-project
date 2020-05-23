require('dotenv').config();
const express = require('express');
const app = require('./server.js');

const PORT = process.env.PORT || 3333;

app.listen(PORT, () => {
    console.log(`Running on port http://localhost:${PORT}`)
})
