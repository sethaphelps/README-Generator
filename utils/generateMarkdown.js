// Function that returns a license badge based on which license is passed in

function renderLicenseBadge(license) {
  if (!license) {
    return "";
  } else {
    return `[![License: MIT](https://img.shields.io/badge/License-${license}-yellow.svg)](${renderLicenseLink(
      license
    )})`;
  }
}

// Function that returns the license link

function renderLicenseLink(license) {
  if (license === "MIT") {
    return "https://opensource.org/licenses/MIT";
  }
  if (license === "Apache 2.0") {
    return "https://opensource.org/licenses/Apache-2.0";
  }
  if (license === "SIL") {
    return "https://opensource.org/licenses/OFL-1.1";
  }
  if (license === "none") {
    return "";
  }
}

// Function that returns the license section of README

function renderLicenseSection(license) {
  return `## License 
  This project is licensed under ${license}.`;
}

// Function to generate markdown for README

function generateMarkdown(response = {}) {
  return `# ${response.title}

  ${renderLicenseBadge(response.license)}

  ## Table of Contents
  * [Description](#description)
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributions](#contributions)
  * [Tests](#tests)
  * [Creator](#creator)

  ## Description
  ${response.description}

  ## Installation
  ${response.installation}

  ## Usage
  ${response.usage}

  ${renderLicenseSection(response.license)} 

  ## Contributions
  ${response.contributions}

  ## Tests
  ${response/tests}

  ## Creator Information
  * Github: https://github.com/${response.github}
  * Email: ${response.email}

`;
}

module.exports = generateMarkdown;
