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

app.get("/file", (req, res) => {
    let fullData;

    if (fs.existsSync(ubuntuFile)) {
        fullData = bufferFile(ubuntuFile).toString("ascii").split("\r\n\r\n");
        console.log("unbuntufile");
    } else {
        fullData = bufferFile(mockFile).toString("ascii").split("\r\n\r\n");   
        console.log("mockfile");
    }
    fullData.sort();
    let fullJson = fullData.map(val => fileToOneJson(val));
    //console.log(fullJson);
    res.json(fullJson);
});

function bufferFile(filepath) {
    return fs.readFileSync(filepath,'UTF-8');
}
function fileToOneJson(onePackage) {
    let packageName = onePackage.substring(onePackage.indexOf("Package:"), onePackage.indexOf("\r\n", onePackage.indexOf("Package:")));
    let depends = onePackage.substring(onePackage.indexOf("Depends:"), onePackage.indexOf("\r\n", onePackage.indexOf("Depends:")));
    let description = onePackage.substring(onePackage.indexOf("Description:"));
    return { packageName, depends, description };
}