// packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');

const writeFileAsync = util.promisify(fs.writeFile)

// prompts for each section of the README
const getInput = () => {
    return inquirer.prompt(
    // array of questions for user input
    [
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
            choices: [
                'Apache License 2.0', 
                'GNU General Public License v3.0', 
                'MIT License', 
                'BSD 2-Clause Simplified License', 
                'BSD 3-Clause New or Revised License', 
                'Boost Software License 1.0', 
                'Creative Commons Zero v1.0 Universal', 
                'Eclipse Public License 2.0', 
                'GNU Affero General Public License v3.0', 
                'GNU General Public License v2.0', 
                'GNU Lesser Genergal Public License v2.1', 
                'Mozilla Public Liscense 2.0', 
                'The Unlicense']
        },
        {
            type: 'input',
            message: 'Enter all contributors.',
            name: 'contributors',
        },        
        {
            type: 'input',
            message: 'Enter test instructions.',
            name: 'test',
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
    ]);
}

// function takes user input and add to markdown
const generateMarkdown = (answers) => 

` 
# ${answers.title}
## Licensing:
#### _${answers.license}_
---
---
## Description
${answers.description}
## Table of Contents
* [Installation](#Installation)
* [Usage](#Usage)
* [Contributors](#Contributors)
* [Testing](#Testing)
* [Questions](#Questions)
## Installation
${answers.installation}
## Usage
${answers.usage}
## Contributors
${answers.contributors}
## Testing
${answers.test}
## Questions 
#### To contribute, please contact me by email.

github.com/${answers.username} or email me at ${answers.email}
`;

const init = () => {
    getInput()
    .then((answers) => writeFileAsync('README.md', generateMarkdown(answers)))
    .then(() => console.log('Successfully wrote README file'))
    .catch((err) => console.error(err));
};

init()



