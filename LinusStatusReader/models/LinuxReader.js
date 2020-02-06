const fs = require("fs");
const express = require("express");

const file = "../../../../../../../var/lib/dpkg/status";

var app = express();


app.get("/", (req, res) => {
    let fullData;
    fullData = fs.readFileSync(file).toString("ascii").split("\n\n");
    fullData.sort();
    let jsonData = fullData.map(val => fileToOneJson(val));
    console.log("unbuntufile");
    res.json(jsonData);
});

function fileToOneJson(onePackage) {
    let packageName = onePackage.substring(onePackage.indexOf("Package:"), onePackage.indexOf("\n", onePackage.indexOf("Package:")));
    let depends = onePackage.substring(onePackage.indexOf("Depends:"), onePackage.indexOf("\n", onePackage.indexOf("Depends:")));
    if (depends === packageName) depends = "";

    let desclastIndex;
    let indexOfOrigMaint = onePackage.indexOf("Original-Maintainer:");
    let indexOfHomePage = onePackage.indexOf("Homepage: ");

    if (indexOfOrigMaint === -1) desclastIndex = indexOfHomePage;
    if (indexOfHomePage === -1) desclastIndex = indexOfOrigMaint;
    else if (indexOfHomePage < indexOfOrigMaint) desclastIndex = indexOfHomePage;
    else if (indexOfOrigMaint < indexOfHomePage) desclastIndex = indexOfOrigMaint;

    let description = onePackage.substring(onePackage.indexOf("Description:"), desclastIndex);
    return { packageName, depends, description };
}
module.exports = app;