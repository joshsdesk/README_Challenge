// Function to return a license badge based on which license is passed in
function renderLicenseBadge(license) {
  if (license === 'None') return '';
  return `![License](https://img.shields.io/badge/License-${license.replace(' ', '%20')}-blue.svg)`;
}

// Function to return the license link in the Table of Contents
function renderLicenseLink(license) {
  if (license === 'None') return '';
  return `- [License](#license)`;
}

// Function to return the license section of the README
function renderLicenseSection(license) {
  if (license === 'None') return '';
  return `## License

This project is licensed under the ${license} license.`;
}

// Main function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

${renderLicenseBadge(data.license)}

## Description

${data.description}

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
${renderLicenseLink(data.license)}
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)
- [GitHub Repository](#github-repository)
- [Walkthrough Video](#walkthrough-video)

## Installation

To install the necessary dependencies, run the following command:
\`\`\`
npm install
\`\`\`

## Usage

To start the application, use the following command:
\`\`\`
node index.js
\`\`\`

${renderLicenseSection(data.license)}

## Contributing

${data.contributing}

## Tests

To run tests, use the following command:
\`\`\`
npm test
\`\`\`

## Questions

If you have any questions, feel free to contact me:
- Email: [${data.email}](mailto:${data.email})
- GitHub: [${data.github}](https://github.com/${data.github})

## GitHub Repository

Find the project repository at [GitHub Repository](https://github.com/${data.github}/${data.repoName}).
---

`;
}

export default generateMarkdown;