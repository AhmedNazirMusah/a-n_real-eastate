// import express from "express";
const express = require('express')
import postRoute from  "./routes/postRoute.js"

// const postRoute = require('./routes/postRoute.js')

const app = express();

app.use("/api/test", (req,res) => {
    res.send("it works")
})  

app.use("/api/", postRoute)

app.listen(5000, () => {
    console.log("server is running");
});