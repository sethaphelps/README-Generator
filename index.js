// Packages needed for this application

const inquirer = require("inquirer");
const fs = require("fs/promises");
const generateMarkdown = require("./utils/generateMarkdown.js");

// TODO: Array of questions for user input

const questions = [
  {
    type: "input",
    name: "title",
    message: "What is the title of your project?",
  },
  {
    type: "input",
    name: "description",
    message: "Provide a short description explaining the what, why, and how of your project.",
  },
  {
    type: "input",
    name: "installation",
    message: "What steps are required to install your project?",
  },
  {
    type: "input",
    name: "usage",
    message: "Provide instructions and examples for using your program",
    
  },
  {
    type: "input",
    name: "contributions",
    message: "Include any collaborators or third-party assets and their links.",
  },
  {
    type: "list",
    name: "license",
    message: "Please choose a license type.",
    choices: ["MIT", "SIL", "Apache 2.0"],
  },
  {
    type: "input",
    name: "tests",
    message: "Include any tests you may have created in your application."
  },
  {
    type: "input",
    name: "github",
    message: "Enter your GitHub username.",
  },
  {
    type: "input",
    name: "email",
    message: "Enter your e-mail.",
  },
];

// Function to write the README file

const writeToFile = data => {
    fs.writeFile('./readmefile/README.md', data, err => {
      if (err) {
          console.log(err);
          return;
      } else {
          console.log('Your Read me has been created!')
      }
    })
};

// TODO: Function to initialize app

const init = () => {
    return inquirer.prompt(questions);
}

// Function call to initialize app

init()
.then(userInput => {
    return generateMarkdown(userInput)
})
.then(data => {
    return writeToFile(data)
})
.catch(err => {
    console.log(err)
});