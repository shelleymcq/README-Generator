// packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// array of questions for user input
const questions = [
        {
            type: 'input',
            message: 'Enter title of project.',
            name: 'title',
        },
        {
            type: 'input',
            message: 'Enter description of project.',
            name: 'description',
        },
        {
            type: 'input',
            message: 'Enter installation instructions.',
            name: 'installation',
        },
        {
            type: 'input',
            message: 'Enter usage information.',
            name: 'usage',
        },
        {
            type: 'list',
            message: 'Choose license.',
            name: 'license',
            choices: ['MIT License', 'Eclipse Public License 2.0', 'Mozilla Public Liscense 2.0']
        },
        {
            type: 'input',
            message: 'Enter other contributors. Skip if none.',
            name: 'contributors',
        },        
        {
            type: 'input',
            message: 'Enter test instructions.',
            name: 'tests',
        },
        {
            type: 'input',
            message: 'Enter github username.',
            name: 'username',
        },
        {
            type: 'input',
            message: 'Enter contact email.',
            name: 'email',
        },
    ];

inquirer.prompt(questions);





// function to write README file
// function writeToFile(fileName, data) {}



// function to initialize app
// function init() {}


// function call to initialize app
// init();


