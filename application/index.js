const inquirer = require('inquirer');
const fs = require('fs');

inquirer
    .prompt([
        {
            type: 'input',
            message: 'Enter title of project.',
            name: 'appName',
        },
        {
            type: 'input',
            message: 'Enter description of project.',
            name: 'description',
        },
        {
            type: 'input',
            message: 'Enter table of contents.',
            name: 'contents',
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
            message: 'Enter license.',
            name: 'license',
            choices: ['MIT License', 'Eclipse Public License 2.0', 'Mozilla Public Liscense 2.0']
        },
        {
            type: 'input',
            message: 'Enter contributors.',
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


    ])