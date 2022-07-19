// TODO: imported inquirer
const inquirer = require('inquirer')
const fs = require('fs')
const generateMarkdown = require('Develop/utils/generateMarkdown.js')
// TODO: Create an array of questions for user input
const questions = [
    {
        name: 'title',
        type: 'input',
        message: 'Create a title'
    },
    {
        name: 'table',
        type: 'input',
        message: 'Make a list for your Table of Contents'
    },
    {
        name: 'usage',
        type: 'input',
        message: 'You can put in your usage information here'
    },
    {
        name: 'contribution',
        type: 'input',
        message: 'Add in your contribution guidelines'
    },
    {
        name: 'instructions',
        type: 'input',
        message: 'Write here how to detail test instructions'
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, res) {
    fs.writeFile(fileName, res, (err) =>
    err ? console.err(err) : console.log('Readme'))
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((res) => {
        console.log(res);
        const { name } = res
        writeToFile('generateMarkdown.js', generateMarkdown(answers));
    })
}

// Function call to initialize app
init();
