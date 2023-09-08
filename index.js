const express = require("express");

const cors = require("cors");

// Import the database connection
require("./Config/db");

// Import the router
const router = require("./Routes/user.routes");

const app = express();

//middlewares
app.use(express.json());
app.use(cors());
app.use("/", router);

app.get("/", (req, res) => {
  res.send("backend is running");
});

// server start on port 5000
app.listen(5000, () => {
  console.log(`Server is running on 5000 port`);
});
