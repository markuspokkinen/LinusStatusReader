'use strict';

const os = require("os").platform();
const express = require("express");
const win = require("./models/winreader");
const lin = require("./models/LinuxReader");


const port = process.env.PORT || 8080;
const host = '0.0.0.0';

const app = express();
app.use(express.static(__dirname + "/views"));

if (os === "win32") {
    app.use("/file", win);
} else if (os === "linux") {
    app.use("/file", lin);
}
console.log(os);

app.listen(port, host, () => {
    console.log("Server running in port: " + host + ":"+port);
});

