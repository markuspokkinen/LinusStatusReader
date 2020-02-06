'use strict';

const os = require("os").platform();
const express = require("express");
const win = require("./models/winreader");
const lin = require("./models/LinuxReader");


const port = process.env.PORT || 8080;

const app = express();
app.use(express.static(__dirname + "/views"));

if (os === "win32") {
    app.use("/file", win);
} else if (os === "linux") {
    app.use("/file", lin);
}
console.log(os);

app.listen(port);
console.log("Server running in port: " + port);
