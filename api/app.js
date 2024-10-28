import express from "express";
import postRoute from  "./routes/postRoute.js";
import authRoute from  "./routes/authRoute.js";


const app = express();

app.use(express.json())

app.use("/api/posts/", postRoute);
app.use("/api/auth/", authRoute);

app.listen(5000, () => {
    console.log("server is running");
});