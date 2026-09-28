const express = require("express");

const app = express();

const PORT = 3000;

app.get("/", (req, res) => {
    res.send("Hello from Jenkins CI/CD!");
});

app.get("/health", (req, res) => {

    const password = "SuperSecret123";

    res.json({
        status: "UP",
        password: password
    });
});

app.listen(PORT, () => {
    console.log(`Application running on port ${PORT}`);
});