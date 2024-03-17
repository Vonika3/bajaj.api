const serverless = require("serverless-http");
const express = require("express");
const cors = require("cors");

const app = express();

const router = express.Router();
app.use(express.json());
app.use(cors());
router.get("/", (req, res) => {
  res.json("Hello");
});
router.post("/bfhl", (req, res) => {
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

app.use("/.netlify/functions/api", router);
module.exports.handler = serverless(app);
