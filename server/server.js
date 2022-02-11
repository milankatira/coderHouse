require("dotenv").config();
const express = require("express");

const app = express();

const PORT = process.env.PORT || 5000;

const router=require('./routes');

app.use(express.json())

app.use(router);

app.get("/", (req, res) => {
  res.send("hello");
});

app.listen(PORT, () => console.log(`Listening onPort ${PORT}`));
