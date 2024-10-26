import express from "express";

console.log("test 2")

const app = express();

app.listen(8800, () => {
    console.log("server is running")
})