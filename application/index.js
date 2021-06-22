// packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');

const writeFileAsync = util.promisify(fs.writeFile)

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

const generateMarkdown = (answers) => ` 
# ${answers.title}
## Description
${answers.description}
## Table of Contents
[Installation](#installation)
[Usage](#usage)
[License](#license)
[Contributors](#contributors)
[Testing](#test)
[Contact Me](#email)
## Installation Instructions
${answers.installation}
## Usage
${answers.usage}
## License
${answers.license}
## Contributors
${answers.contributors}
## Testing
${answers.test}
## Github 
${answers.username}
## Contact
${answers.email}
`;

const init = () => {
    getInput()
    .then((answers) => writeFileAsync('markdown.md', generateMarkdown(answers)))
    .then(() => console.log('Successfully wrote to markdown.md'))
    .catch((err) => console.error(err));
};

init()



