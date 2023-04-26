const express = require("express");
const format = require("date-format");

const app = express();

const PORT = process.env.PORT || 4000;

app.get("/", (req, res) => {
    res.status(200).send("Hello World!");
});

app.get("/api/v1/:token", (req, res) => {
    console.log(req.params.token);
    res.status(200).json({ param: req.params.token });
});

app.get("/api/v1/instagram", (req, res) => {
    const instaSocial = {
        username: "irvinreal",
        followers: 10,
        follows: 33,
        date: format.asString("dd/MM - hh:mm:ss", new Date()),
    };

    res.status(200).json(instaSocial);
});

app.get("/api/v1/facebook", (req, res) => {
    const instaSocial = {
        username: "irvin real",
        followers: 173,
        follows: 332,
        date: format.asString("dd/MM - hh:mm:ss", new Date()),
    };

    res.status(200).json(instaSocial);
});

app.get("/api/v1/linkedin", (req, res) => {
    const instaSocial = {
        username: "Irvin Gonzalez Real",
        followers: 19,
        follows: 28,
        date: format.asString("dd/MM - hh:mm:ss", new Date()),
    };

    res.status(200).json(instaSocial);
});

app.listen(PORT, () => {
    console.log(`Server is running at ${PORT}`);
});
