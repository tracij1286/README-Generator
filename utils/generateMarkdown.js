// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === 'MIT') {
    return `![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)(http://opensource.org/licenses/MIT)`
  }
  if (license === 'GNU') {
    return `https://www.gnu.org/licenses/gpl-3-0`
  }
  if (license === 'Unlicense') {
    return ``
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (!license) {
    return ``;
  } else {
    return `## Licenses
    This project is covered under the ${license} license. To learn more about what this means, click the license button at the top.`
  }
  }

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ## Description
  ${data.description}

  ## Table of Contents

  * [Description](#description)
  * [Installation](#installation)
  * [Usage](#usage)
  * [Contributing](#contributing)
  * [Licenses](#licenses)
  * [Tests](#tests)
  * [Questions](#questions)
  
  ## License

  ${renderLicenseBadge(data.licenses)} 
  
  Refer to [https://choosealicense.com/](https://choosealicense.com/)



  ## Usage
  ![alt text](assets/images/screenshot.png)


  ## Contributors
  ${data.contributors}

  ## Tests

  ${data.test}

  ## Questions 
  If you have any questions about this repo, contact me directly at ${data.email}. You can find more of my work at [${data.github}](https://github.com/${data.github}/).

`;
}

module.exports = generateMarkdown;
