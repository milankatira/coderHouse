require("dotenv").config();

const express = require("express");

const cors = require("cors");

const app = express();

const cookieParser=require('cookie-parser')
const corsOption = {
  credentials: true,
  origin: ["http://localhost:3000"],
};



app.use(cors(corsOption));

app.use(cookieParser())

const PORT = process.env.PORT || 5000;

const router = require("./routes");

const DbConnect = require("./database");

DbConnect();

app.use(express.json({limit:'8mb'}));

app.use(router);

//set static storage
app.use('/storage',express.static('storage'))

app.get("/", (req, res) => {
  res.send("hello");
});

app.listen(PORT, () => console.log(`Listening onPort ${PORT}`));
