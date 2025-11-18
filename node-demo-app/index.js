const express = require("express");
const path = require("path");
const app = express();

// serve static files
app.use(express.static(path.join(__dirname, "public")));

// send index.html for the root
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

// fallback for all other routes
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

module.exports = app;
