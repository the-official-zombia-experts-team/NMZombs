const express = require("express");
const myMiddleware = require("./mymiddleware");

const app = express();
app.use(myMiddleware.logger);
app.use(express.static("public"));

app.set("view engine", "ejs");

app.get("/", (req, res) => {
    res.render("index");
});

app.listen(80, () => {
    console.log("Listening on port 80.");
});
