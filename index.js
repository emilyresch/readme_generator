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
            message: "What is required to install your app?",
            name: "installation"
        },
        {
            type: "input",
            message: "How is your app used?",
            name: "usage"
        },
        {
            type: "number",
            message: "What is the year of this app's creation?",
            name: "year"
        },
        {
            type: "input",
            message: "List all contributors to the app.",
            name: "authors"
        },
        {
            type: "input",
            message: "What are the contributors' github usernames?",
            name: "contribHubs"
        },
        {
            type: "input",
            message: "Has this app been tested? Explain the testing procedures.",
            name: "tests"
        },
        {
            type: "input",
            message: "Include any final questions about the app.",
            name: "questions"
        },
        {
            type: "input",
            message: "Enter the deployed Heroku link",
            name: "heroku"
        },
        {
            type: "input",
            message: "What is the name of your Github repository? (case sensitive)",
            name: "repo"
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
    return `
# __${answers.title}__ by ${answers.github}


_________________________

![Repo Size badge](https://img.shields.io/github/repo-size/${answers.github}/${answers.repo})
![File Size badge](https://img.shields.io/github/size/${answers.github}/${answers.repo})
![GitHub License](https://img.shields.io/github/license/${answers.github}/${answers.repo})

_________________________

## Description:
${answers.description}

_________________________

### Table of Contents
- [Installing](#installing)
- [Contributors](#contributors)
- [Tests](#tests)
- [Questions](#questions)
- [License](#license)
- [Heroku](#heroku)

_________________________

### Installing
${answers.installation}

## Contributors
${answers.authors} - ${answers.contribHubs}

### Tests
${answers.tests}

### Questions
${answers.questions}

## License
${answers.title} (C) ${answers.year}, ${answers.authors}.

This program is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with this program.  If not, see <https://www.gnu.org/licenses/>.

##Heroku
<${answers.heroku}>


_____________________

![Github profile pic](https://avatars2.githubusercontent.com/${answers.github})

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