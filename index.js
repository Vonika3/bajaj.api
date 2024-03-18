const http = require("http");
const express = require("express");
const cors = require("cors");

require("dotenv").config();

const port = process.env.PORT || 5000;
const app = express();
app.use(express.json());
app.use(cors());
app.get("/", (req, res) => {
  res.json("Hello there!! Please go to /bfhl");
});
app.post("/bfhl", (req, res) => {
  let { data } = req.body;
  if (!data) return res.status(402).json("Data is required.");
  const numbers = data.filter((item) => typeof item === "number");
  const odd_numbers = numbers.filter((item) => item % 2 !== 0);
  const even_numbers = numbers.filter((item) => item % 2 === 0);
  const alpha = data.filter((item) => typeof item === "string")
                        .map((item) => item.toUpperCase());

  response_text = {
    is_success: true,
    user_id: "aneesh_kumar_03012003",
    email: "aneesh1635.be21@chitkara.edu.in",
    roll_number: 2110991635,
    odd_numbers: odd_numbers,
    even_numbers: even_numbers,
    alphabets: alpha,
  };

  res.status(200).send(response_text);
});

const server = http.createServer(app);

server.listen(port, () => console.log(`Server started on ${port}`));
