const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

const app = express();

dotenv.config();

mongoose.connect(process.env.MONGO_URI)
.then(()=>{
    console.log("Database connected!")
})
.catch((err)=>{
    console.log("Error : " + err);
})

app.use(express.json());
app.use(cors());

app.listen(3000,()=>{
    console.log("Server is running on port 3000");
})