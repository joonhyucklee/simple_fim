const readline = require("readline");
const fs = require("fs");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const requestBaseline = async () => {
    const answer = await new Promise(resolve => {
        rl.question("What would you like to do? \n" + 
        "A) Collect new baseline \n" + 
        "B) Begin monitoring files with saved baseline \n" + 
        "\nPlease enter 'A' or 'B': ", resolve)
    })
    if (answer.toUpperCase() === "A"){
        console.log("You have selected A");
    } else if (answer.toUpperCase() === "B") {
        console.log("You hav Selected B");
    } else {
        console.log("Please choose either option A or B");
        return requestBaseline();
    }
}
module.exports = requestBaseline;

// function calculateFileHash(file) {

// }

//The data will be stored in the variable data

var data = {};
readFiles('dirname/', function(filename, content) {
  data[filename] = content;
}, function(err) {
  throw err;
});

//Function to read all files within a directory

function readFiles(dirname, onFileContent, onError) {
  fs.readdir(dirname, function(err, filenames) {
    if (err) {
      onError(err);
      return;
    }
    filenames.forEach(function(filename) {
      fs.readFile(dirname + filename, 'utf-8', function(err, content) {
        if (err) {
          onError(err);
          return;
        }
        onFileContent(filename, content);
      });
    });
  });
}