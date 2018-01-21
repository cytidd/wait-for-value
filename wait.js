if (typeof(process.env.WORKING_DIRECTORY) === "undefined") {
    throw new Error("WORKING_DIRECTORY environment variable not set.");
}
if (typeof(process.env.TARGET_VERSION) === "undefined") {
    throw new Error("TARGET_VERSION environment variable not set.");
}

const workingDir = process.env.WORKING_DIRECTORY;
const targetVersion = process.env.TARGET_VERSION;

const simpleGit = require("simple-git")(workingDir);

// console.log(simpleGit.tag());

async function status (workingDir) {
    const git = require('simple-git/promise');

    let statusSummary = null;
    try {
       statusSummary = await git(workingDir).status();
    }
    catch (e) {
       // handle the error
    }

    return statusSummary;
}

let s = status(workingDir);
console.log('status', s);

// retrieve tags

// check out each one (maximum 5) and look for targetVersion

// return tag where targetVersion was version in test.json

// return "Not found" if it doesn't exist



