// TODO: Include packages needed for this application

const inquirer = require("inquirer");
const fs = require("fs");
const { generateMarkdown } = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = ['What is the title of your project? Ex: random-password-generator', 'Write a short desciption of your project.', 
                    'How can users install the code for your project?', 'Where can users access the live version of the project? Ex: https://hteasdell44.github.io/wall-ball',
                    'How can others contribute to your project? If you are not open to external contribution, enter N/A.', 'Would you like to provide instructions for testing your code? If not, enter N/A.',
                    'What license would you like to use for your project?', 'What is your GitHub username?', 'What is your email?'];


// TODO: Create a function to write README file
function writeToFile(fileName, data) {

    fs.appendFile(fileName,generateMarkdown(data), function(err) {
            if (err) throw err;
        });
}

// TODO: Create a function to initialize app
function init() {

    inquirer.prompt([{
    
        name: 'title',
        message: questions[0],
        type: 'input'
    },
    
    {
        
        name: 'description',
        message: questions[1],
        type: 'input'
    },
    
    {
        name: 'installation',
        message: questions[2],
        type: 'input'
    },
    
    {
        name: 'usage',
        message: questions[3],
        type: 'input'
    },
    
    {
        name: 'contribution',
        message: questions[4],
        type: 'input'
    },
    
    {
        name: 'testing',
        message: questions[5],
        type: 'input'
    },
    
    {
        name: 'license',
        message: questions[6],
        type: 'list',
        choices: ["Artistic license 2.0", "Creative Commons license family", "MIT", "zLib License", "No License"]
    },
    
    {
        name:'username',
        message: questions[7],
        type: 'input'
    },
    
    {
        name: 'email',
        message: questions[8],
        type: 'input'
    }
    ])
    
    .then(function (answer) {
        
        fs.writeFile('./README.md', '# ' + answer.title, function (err) {
    
            if (err) throw err;
            writeToFile('./README.md', answer);
        })
    });
}

// Function call to initialize app
init();
