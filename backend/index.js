const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const authRouter = require("./routes/auth");

const app = express();
app.use(express.json());
app.use(cors());
app.use("/api/auth",authRouter);

dotenv.config();

mongoose.connect(process.env.MONGO_URI)
.then(()=>{
    console.log("Database connected!")
})
.catch((err)=>{
    console.log("Error : " + err);
})

app.listen(3000,()=>{
    console.log("Server is running on port 3000");
})