const fs = require("fs");
const express = require("express");

const file = "./assets/Status.txt";

var app = express();

app.get("/", (req, res) => {
    let fullData;
    fullData = fs.readFileSync(file).toString("ascii").split("\r\n\r\n");
    fullData.sort();
    let jsonData = fullData.map(val => fileToOneJson(val));
    console.log("mockfile");
    res.json(jsonData);
});

function fileToOneJson(onePackage) {
    let packageName = onePackage.substring(onePackage.indexOf("Package:"), onePackage.indexOf("\r\n", onePackage.indexOf("Package: "))).split(":")[1].trim();
    if (packageName === undefined) packageName = "";
    let tmpdepends = onePackage.substring(onePackage.indexOf("Depends:"), onePackage.indexOf("\r\n", onePackage.indexOf("Depends: "))).split(",");

    let depends;

    if (tmpdepends[0].split(":")[1] === undefined || tmpdepends[0].split(":")[1].trim() === packageName.trim()) depends = ["None"];

    else {
        depends = tmpdepends.map((val, index) => {
            let element = val;
            if (index === 0) {
                element = val.split(":")[1];
            }
            if (val.includes("|")) {
                element = element.split("|").map(value => {
                    return value.split("(")[0].trim();
                }).reduce((acc, current) => acc = acc + " | " + current);
            } else {
                element = element.split("(")[0];
            }
            return element.trim();
        });
    }
    let desclastIndex;
    let indexOfOrigMaint = onePackage.indexOf("Original-Maintainer:");
    let indexOfHomePage = onePackage.indexOf("Homepage:");

    if (indexOfOrigMaint === -1 && indexOfHomePage > -1) desclastIndex = indexOfHomePage;
    else if (indexOfHomePage === -1 && indexOfOrigMaint > -1) desclastIndex = indexOfOrigMaint;
    else if (indexOfHomePage < indexOfOrigMaint) desclastIndex = indexOfHomePage;
    else if (indexOfOrigMaint < indexOfHomePage) desclastIndex = indexOfOrigMaint;
    else desclastIndex = onePackage.length;

    /*if (packageName === " libc-bin") {
        console.log(tmpdepends);
        console.log(tmpdepends[0].split(":")[1].trim() === packageName.trim());
        console.log(onePackage);
        console.log(desclastIndex);
    }*/

    let description = onePackage.substring(onePackage.indexOf("Description: "), desclastIndex);
    return { packageName, depends, description };
}
module.exports = app;