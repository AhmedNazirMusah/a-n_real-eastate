import express from "express"

const router = express.Router()

router.get("/", (req,res) => {
    res.send("psot working")
});

export default router