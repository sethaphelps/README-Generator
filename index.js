// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs/promises");
const generateMarkdown = require("./utils/generateMarkdown.js");
// TODO: Create an array of questions for user input
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
    type: "list",
    name: "installation",
    // message: "Please choose a license type.",
    // choices: ["MIT", "GPL", "Apache 2.0", "none"],
  },
  {
    type: "list",
    name: "usage",
    // message: "Please choose a license type.",
    // choices: ["MIT", "GPL", "Apache 2.0", "none"],
  },
  {
    type: "list",
    name: "credits",
    // message: "Please choose a license type.",
    // choices: ["MIT", "GPL", "Apache 2.0", "none"],
  },
  {
    type: "list",
    name: "license",
    message: "Please choose a license type.",
    choices: ["MIT", "GPL", "Apache 2.0", "none"],
  },
  {
    type: "list",
    name: "github",
    // message: "Please choose a license type.",
    // choices: ["MIT", "GPL", "Apache 2.0", "none"],
  },
  {
    type: "list",
    name: "email",
    // message: "Please choose a license type.",
    // choices: ["MIT", "GPL", "Apache 2.0", "none"],
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

function startPrompt() {
  console.log("starting prompt");
  inquirer.prompt(questions).then((responses) => {
    console.log(generateMarkdown(responses));
  });
}

function init() {
  startPrompt();
}

// Function call to initialize app
init();
