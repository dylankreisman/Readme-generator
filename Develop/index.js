// TODO: imported inquirer
const inquirer = require('inquirer')
const util = require('util')
const fs = require('fs')
const generateMarkdown = require('Develop/utils/generateMarkdown.js')
const writeFileSync = util.promisify(fs.writeFile);
// TODO: Create an array of questions for user input
const questions = [
    {
        name: 'title',
        type: 'input',
        message: 'Create a title'
    },
    {
        name: 'Table of Content',
        type: 'input',
        message: 'Make a list for your Table of Contents'
    },
    {
        name: 'Usage Information',
        type: 'input',
        message: 'Make a list for your Table of Contents'
    },
    {
        name: 'Contribution Guidelines',
        type: 'input',
        message: 'Add in your contribution guidelines'
    },
    {
        name: 'Test Instructions',
        type: 'input',
        message: 'Write here how to detail test instructions'
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
    err ? console.err(err) : console.log('Readme'))
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((res) => {
        console.log(res);
        const { name } = res
        writeToFile(`${name}.js`, generateMarkdown(answers));
    })
}

// Function call to initialize app
init();
