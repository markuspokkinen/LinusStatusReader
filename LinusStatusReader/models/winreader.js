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
    
    let packageName = onePackage.substring(onePackage.indexOf("Package: "), onePackage.indexOf("\r\n", onePackage.indexOf("Package: "))).split(":")[1];
    let depends = onePackage.substring(onePackage.indexOf("Depends: "), onePackage.indexOf("\r\n", onePackage.indexOf("Depends: "))).split(",");
    if (depends[0].split(":")[1] === packageName) depends = ["","None"];

    let desclastIndex;
    let indexOfOrigMaint = onePackage.indexOf("Original-Maintainer: ");
    let indexOfHomePage = onePackage.indexOf("Homepage: ");

    if (indexOfOrigMaint === -1 && indexOfHomePage !== -1) desclastIndex = indexOfHomePage;
    if (indexOfHomePage === -1 && indexOfOrigMaint !== -1) desclastIndex = indexOfOrigMaint;
    else if (indexOfHomePage < indexOfOrigMaint) desclastIndex = indexOfHomePage;
    else if (indexOfOrigMaint < indexOfHomePage) desclastIndex = indexOfOrigMaint;
    else desclastIndex = onePackage.length;
    
    let description = onePackage.substring(onePackage.indexOf("Description: "), desclastIndex);
    return { packageName, depends, description };
}
module.exports = app;