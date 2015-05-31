#! /usr/bin/env node

var path = require("path");
var cols = process.argv[2] || 12;
if (isNaN(Number(cols))) {
    printUsage();
    console.log("***** Input Error *****\n<columns> must be a number!");
    process.exit(1);
}
var currDir = path.normalize(process.cwd());
var dest = path.normalize(path.join(currDir, process.argv[3])) || currDir;

var command = path.join('grunt --cols='+cols+' --dest='+dest);

var sys = require('sys');
var exec = require('child_process').exec;
var child;

process.chdir(__dirname);


child = exec(command, function(err, stdout, stderr) {
    if (err) {
        console.log("Error!", err);
        console.log(stderr);
        return;
    }
    console.log(stdout);
});


function printUsage() {
    var usage = "*** PURE CLI\n"+
        "*** Usage: pure-me <columns> [<relative-directory-path>]";
    console.log(usage);
}