//function that generates the readme and sections
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
  - ${res.email}
  - ${res.github}
`;
}

module.exports = generateMarkdown;
