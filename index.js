// packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown.js");
// an array of questions for user input
inquirer.prompt([
  {
    type: "input",
    name: "title",
    message: "What is the title of this project?",
  },
  {
    type: "input",
    name: "description",
    message: "Please write a short description of your project.",
  },
  {
    type: "input",
    name: "installation",
    message: "What are the steps required to install your project?",
  },
  {
    type: "input",
    name: "usage",
    message: "Add a screenshot using ![alt text](assets/images/screenshot.png)",
  },
  {
    type: "input",
    name: "contributors",
    message: "What does the user need to know about contributing to the repo?",
  },
  {
    type: "list",
    message: "What kind of license should your project have?",
    name: "licenses",
    choices: ["MIT", "GNU","Unlicense"],
    default: ["MIT"],
  },
  {
    type: "input",
    name: "test",
    message: "What command should be run to run test?",
    default: "npm test",
  },
  {
    type: "input",
    name: "github",
    message: "What is your GitHub username?",
  },
  {
    type: "input",
    name: "email",
    message: "What is your email address?",
  },

]).then((data) => {
  console.log(data);
  fs.writeFile("README.md",generateMarkdown(data),
  error =>{
    if (error) {
      console.log('please input all data')
    }
    console.log('README Complete')
  }
  )})
