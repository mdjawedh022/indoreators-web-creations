const express = require("express");
const app = express();
const cors = require("cors");
const { connection } = require("./config/db");
const { noteRouter } = require("./routes/notes.routes");
require("dotenv").config();

app.get("/", (req, res) => {
  res.send("welcome to notes!");
});

app.use(express.json());
app.use(cors());
app.use("/api/notes", noteRouter);
app.listen(process.env.port, async () => {
  try {
    await connection;
    console.log("connected to the Database!");
  } catch (error) {
    console.log("Database connection failed!");
  }
  console.log(`server is runniing at the port ${process.env.port}`);
});

