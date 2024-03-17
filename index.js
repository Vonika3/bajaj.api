const http = require("http");
const express = require("express");
const cors = require("cors");

require("dotenv").config();

const port = process.env.PORT || 5000;
const app = express();
app.use(express.json());
app.use(cors());
app.get("/", (req, res) => {
  res.json("Hello");
});
app.post("/", (req, res) => {
  let { data } = req.body;
  if (!data) return res.status(402).json("Data is required.");
  const numbers = data.filter((item) => typeof item === "number");
  const alpha = data.filter((item) => typeof item === "string");

  response_text = {
    isSuccess: true,
    name: "Aneesh Kumar",
    email: "aneesh1635.be21@chitkara.edu.in",
    roll_no: 2110991635,
    numbers: numbers,
    alphabets: alpha,
  };

  res.status(200).send(response_text);
});

const server = http.createServer(app);

server.listen(port, () => console.log(`Server started on ${port}`));
