const express = require("express");
const path = require("path");
const api = require("./routes/index.js");

const PORT = process.env.PORT || 3001;

const app = express();

// Middleware for parsing JSON
app.use(express.json());
//Middleware for parsing urlencoded form data
app.use(express.urlencoded({ extended: true }));

app.use("/api", api);

app.use(express.static("public"));

app.get("/", (req, res) =>
  res.sendFile(path.join(__dirname, "/public/index.html"))
);
