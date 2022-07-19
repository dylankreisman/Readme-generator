// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(res) {
  return `# Title
  ${res.title}

  ## Table of Contents
  * [Installation](#Installation)
  * [Usage](#Usage)
  * [License](#License)
  * [Contributing](#Contribution)
  * [Tests](#Tests)
  * [Questions](#Questions)
  

  ## Installation

  ## License
  ![License](https://img.shields.io/badge/license-${res.license}-blue)
 

  ## Usage
  ${res.usage}

  ## Contribution
  ${res.contribution}

  ## Tests
  ${res.instructions}

  ## Questions
  ${res.email}
  ${res.github}
`;
}

module.exports = generateMarkdown;
