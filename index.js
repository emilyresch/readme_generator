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
const util = require("util");


const writeFileAsync = util.promisify(fs.writeFile);
//prompt user with questions and their input is stored in an object
function promptUser() {
    return inquirer.prompt([{
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
            type: "number",
            message: "How many contributed to this app (number)?",
            name: "contribnumber"
        },
        {
            type: "type",
            message: "List all contributors to the app.",
            name: "authors"
        },
        {
            type: "input",
            message: "What tests were run on this app?",
            name: "tests"
        },
        {
            type: "input",
            message: "Include any questions about the app.",
            name: "questions"
        },
        {
            type: "input",
            message: "What is your GitHub username?",
            name: "github"
        }
    ]);
}



//badges need to be implemented so that they display at the top of the file
function generateReadmeFile(answers) {
    var userLicense = answers.license;
    return `
# __${answers.title}__ by ${answers.github}

## Description:
${answers.description}

### Authors
${answers.authors}

_________________________


![license badge](https://img.shields.io/badge/license-${userLicense}-brightgreen) ![license badge](https://img.shields.io/badge/contributors-${answers.contribnumber}-red)

_________________________

### Table of Contents
- [Installing](###Installing)
- [Tests](###Tests)
- [Questions](###Questions)
- [License](##License)

_________________________

### Installing
${answers.installation}

### Tests
${answers.tests}

### Questions
${answers.questions}

## License
This project is licensed under the ${answers.license} license.

_____________________

![profile pic](http://avatars0.githubusercontent.com/${answers.github})
`

};

promptUser()
    .then(function (answers) {
        const readme = generateReadmeFile(answers);
        return writeFileAsync("myreadme.md", readme);
    }).then(function () {
        console.log("Successfully wrote Readme file!");
    }).catch(function (err) {
        console.log(err);
    })