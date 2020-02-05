'use strict';

const fs = require("fs");
const mockFile = "./assets/Status.txt";
const ubuntuFile = "../../../../var/lib/dpkg/status";

function bufferFile(filepath) {
    return fs.readFileSync(filepath);
}