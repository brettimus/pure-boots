var path = require("path");
var cols = process.argv[2] || 12;
if (isNaN(Number(cols))) {
    printUsage();
    console.log("***** Input Error *****\n<columns> must be a number!");
    process.exit(1);
}
var dest = process.argv[3] || process.cwd();

var command = 'grunt --cols='+cols+' --dest='+dest;

var sys = require('sys');
var exec = require('child_process').exec;
var child;

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