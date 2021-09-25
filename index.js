const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const Recipelist = require("./models/recipe.js")

const app = express();
const PORT = process.env.PORT || 4300;
const connectDB = require('./config/db.js');
require('dotenv').config();

//DB Connection
connectDB();

//Middleware
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({extended: false}))

//Router Linking
// app.use("/", require(""));
app.use("/auth", require("./routes/auth.routes.js"));

//Server Connection
app.listen(PORT, () => {
    console.log("The Server started successfully in the ",+PORT);
})