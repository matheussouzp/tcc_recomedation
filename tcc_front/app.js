const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
    const message = "this route is used only to show some data"

    res.send(message)
})

app.get("/hello", (req, res) => {
    res.send("Hello world!")
})

app.listen(port, () => console.log("api is up"))