const fs = require("fs");
const express = require("express");

const file =  "./assets/Status.txt";

var app = express();

app.get("/", (req, res) => {
    let fullData;
    fullData = fs.readFileSync(file).toString("ascii").split("\r\n\r\n");
    fullData.sort();
    let jsonData = fullData.map(val =>fileToOneJson(val));
    console.log("mockfile");
    res.json(jsonData);
});

function fileToOneJson(onePackage) {
    let packageName = onePackage.substring(onePackage.indexOf("Package:"), onePackage.indexOf("\r\n", onePackage.indexOf("Package:")));
    let depends = onePackage.substring(onePackage.indexOf("Depends:"), onePackage.indexOf("\r\n", onePackage.indexOf("Depends:")));
    if (depends === packageName) depends = "";
    let description = onePackage.substring(onePackage.indexOf("Description:"));
    return { packageName, depends, description };
}
module.exports = app;