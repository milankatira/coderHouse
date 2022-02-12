require("dotenv").config();

const express = require("express");

const cors=require('cors');

const app = express();

const corsOption={
  origin:['http://localhost:3000']
}
app.use(cors(corsOption))

const PORT = process.env.PORT || 5000;

const router=require('./routes');

const DbConnect=require('./database');


DbConnect()

app.use(express.json())

app.use(router);

app.get("/", (req, res) => {
  res.send("hello");
});

app.listen(PORT, () => console.log(`Listening onPort ${PORT}`));
