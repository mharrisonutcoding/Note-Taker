const express = require("express");
const api = require("./routes/index.js");
const path = require("path");


const PORT = process.env.PORT || 3001;

const app = express();

// Middleware that parses Json
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api", api);

app.use(express.static("public"));

// home route GET
app.get("*", (req, res) =>
  res.sendFile(path.join(__dirname), "./public/index.html")
);
// notes route GET
app.get("/notes", (req, res) =>
  res.sendFile(path.join(__dirname, "./public/notes.html"))
);

// easy access to port server in terminal once its run

app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} !`)
);
