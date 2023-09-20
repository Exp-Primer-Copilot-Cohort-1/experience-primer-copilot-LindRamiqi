// Create web server
// Start web server
// http://localhost:3000
// http://localhost:3000/about
// http://localhost:3000/contact
// http://localhost:3000/help

const express = require("express");
const app = express();
const port = 3000;

// app.get("/", (req, res) => {
//   res.send("Hello World");
// });

// app.get("/about", (req, res) => {
//   res.send("About page");
// });

// app.get("/contact", (req, res) => {
//   res.send("Contact page");
// });

// app.get("/help", (req, res) => {
//   res.send("Help page");
// });

// app.get("/help/:topic", (req, res) => {
//   res.send(`Help page ${req.params.topic}`);
// });

// app.get("/help/:topic/:subtopic", (req, res) => {
//   res.send(
//     `Help page ${req.params.topic} ${req.params.subtopic}`
//   );
// });

app.get("/", (req, res) => {
  res.send("<h1>Hello World</h1>");
});

app.get("/about", (req, res) => {
  res.send("<h1>About page</h1>");
});

app.get("/contact", (req, res) => {
  res.send("<h1>Contact page</h1>");
});

app.get("/help", (req, res) => {
  res.send("<h1>Help page</h1>");
});

app.get("/help/:topic", (req, res) => {
  res.send(`<h1>Help page ${req.params.topic}</h1>`);
});

app.get("/help/:topic/:subtopic", (req, res) => {
  res.send(
    `<h1>Help page ${req.params.topic} ${req.params.subtopic}</h1>`
  );
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});