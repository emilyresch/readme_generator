# Homework 8, good README generator

## Description
In this assingment, users answer a series of prompts who's responses are then inserted into a readme template. 

### Specifics
This app uses the inquirer npm to create prompts. The answers are stored in an object. 
Util and fs are also required in order to promisify a writeFile that will make the function promise-based/asynchronous. 
There is also a function that generates the readme file. It returns a template literal of the markdown file. 
When the prompt function is called, the app waits to recieve all of the users answers before writing them into the readme file with the writeFileAsync function. 
There is also a function to grab the users Github avatar using an axios call and the gihtub api response. 

### Used
Badges - sheilds.io
Markdown - https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet#images
