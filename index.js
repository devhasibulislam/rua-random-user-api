/**
 * Title: Driver code
 * Description: Consume all operations & operands
 * Author: Hasibul Islam
 * Date: 03/09/2022
 */

// external imports
const express = require("express");
const cors = require("cors");

// internal imports
const userRouter = require("./routes/user.route");

const app = express();
const port = process.env.PORT || 5000;

// connect with middleware
app.use(cors());
app.use(express.json());
app.use(express.static("public"));

app.use("/user", userRouter);

// enable requests
app.get("/", (req, res) => {
    res.status(200).sendFile(__dirname + "/index.html");
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});