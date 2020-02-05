'use strict';

const fs = require("fs");
const express = require("express");

const mockFile = "./assets/Status.txt";
const ubuntuFile = "../../../../var/lib/dpkg/status";

const port = process.env.PORT || 8080;

const app = express();
app.use(express.static(__dirname + "/views"));

app.listen(port);
console.log("Server running in port: " + port);

function bufferFile(filepath) {
    return fs.readFileSync(filepath);
}