const express = require("express");
const path = require("path");
const api = require("./public/assets/js/index.js");

const PORT = process.env.PORT || 3001;

const app = express();

// Middleware for parsing JSON
app.use(express.json());
//Middleware for parsing urlencoded form data
app.use(express.urlencoded({ extended: true }));

app.use(express.static("public"));

app.get("/", (req, res) =>
  res.sendFile(path.join(__dirname, "./public/index.html"))
);

app.get("/notes", (req, res) =>
  res.sendFile(path.join(__dirname, "./public/notes.html"))
);

app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`)
);
