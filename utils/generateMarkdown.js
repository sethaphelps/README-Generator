// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  console.log ("license badge", license)
  if (license === "MIT" || license === "GPL" || license === "Apache 2.0"){
    return `This project is licensed under the ${license} license.`
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(response = {}) {
  return `# ${response.title} \n
  # ${response.description} \n
  ### Table of Contents \n


${renderLicenseBadge(response.license)}


`;
}

module.exports = generateMarkdown;
