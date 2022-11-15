const express = require("express");
const bodyParser = require("body-parser");

const app = express();

// import the routes/index.js file
const userRoutes = require("./routes");

app.use(bodyParser.json());

app.use(userRoutes);

app.get("/", (req, res) => {
  return res.json("Stat with /users");
});

app.listen(3000, () => {
  console.log("Server is listening on port 3000");
});
