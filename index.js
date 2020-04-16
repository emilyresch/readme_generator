//PSEUDO CODE FOR README GENERATOR

//need to ask user their github username and other info specific to their repo
//this will writeFile readme.md template (using template literal), filled in with data fetched with user info
//   * Title
//   * Description
//   * Table of Contents
//   * Installation - 
//   * Usage - 
//   * License 
//   * Contributing
//   * Tests
//   * Questions
//   * User GitHub profile picture
//   * User GitHub email

//will need: inquirer, fs (writeFile), util (promisify),
//INQUIRER

//require everything 
const inquirer = require("inquirer");
const fs = require("fs");
//prompt user with questions and their input is stored in an object
inquirer
    .prompt([
        {
            type: "input",
            message: "What is the title of your app?",
            name: "title"
        },
        {
            type: "input",
            message: "Write a brief description of your project.",
            name: "description"
        },
        {
            type: "input",
            message: "What are the steps to installing your app?",
            name: "installation"
        },
        {
            type: "input",
            message: "How is your app used?",
            name: "usage"
        },
        {
            type: "input", //list?
            message: "What is the app's license?",
            name: "license"
        },
        {
            type: "input",
            message: "List all contributors to the app.",
            name: "contrib"
        },
        {
            type: "input",
            message: "What tests were run on this app?",
            name: "tests"
        },
        {
            type: "input",
            message: "Would you like to include questions?",
            name: "questions"
        },
        {
            type: "input",
            message: "What is your GitHub username?",
            name: "github"
        }
    ]).then(function(answers){
        console.log(answers);
        // console.log(answers.tests);
        // writeToFile();
        // console.log(JSON.stringify(answers));
    })

//badges need to be implemented so that they display at the top of the file
// const readmeFile = `
// Inline-style: 
// ![badge](this is where url for badge will go "badge")
// # ${answers.title}
// ## Description:
// ${answers.description}
// ### Installing
// ${answers.installation}
// ### Contributors
// ${answers.contributors}
// ### Running tests
// ${answers.tests}
// ### Final Questions
// ${answers.questions}
// ## License
// This project is licensed under the ${answers.license} license.
// ## Authors
// ${answers.github}
// `
// `*** ${title} `
 
//need to make a function that writes our file using the data from the prompts
function writeToFile(fileName, data) {
    // fs.writeFile("readme.md", readmeFile, function(err){
    //     if (err){
    //         console.log(err);
    //     }else{
    //         console.log("successfully wrote file");
    //     }
    // })
}

function init() {

}

init();
