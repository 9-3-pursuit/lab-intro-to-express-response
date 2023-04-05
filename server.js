// DEPENDENCIES
const app = require("./app.js");
const express = require("express");

// CONFIGURATION
const PORT = 3003

// LISTEN
app.listen(PORT, () => {
    console.log(`Listening on Port ${PORT}`);
});

