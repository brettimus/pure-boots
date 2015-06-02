#! /usr/bin/env node

var path = require("path");
var cols = process.argv[2] || 12;
if (isNaN(Number(cols))) {
    printUsage();
    console.log("***** Input Error *****\n<columns> must be a number!");
    process.exit(1);
}
var currDir = process.cwd();
var destDir = process.argv[3];

if (destDir) {
    if (!path.isAbsolute(destDir)) {
        destDir = path.join(currDir, destDir);
    }
} else {
    destDir = currDir;
}


var command = path.join('grunt --cols='+cols+' --dest='+destDir);

var sys = require('sys');
var exec = require('child_process').exec;
var child;

process.chdir(__dirname);


child = exec(command, function(err, stdout, stderr) {
    if (err) {
        console.log("*** OH NOZ! Error!", err);
        console.log(stderr);
        return;
    }
    console.log("* Success! pure-grid-"+cols+".css placed into "+destDir+"\n");
});


function printUsage() {
    var usage = "*** PURE CLI\n"+
        "*** Usage: pure-grid <columns> [<relative-directory-path>]";
    console.log(usage);
}