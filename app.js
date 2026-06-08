const express = require("express");

const app = express();

app.get("/", (req, res) => {
    res.send("CI/CD Demo Successful");
});

module.exports = app;
