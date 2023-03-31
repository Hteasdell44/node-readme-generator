// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {

  switch (license) {

    case "Artistic license 2.0": return "![License: Artistic-2.0](https://img.shields.io/badge/License-Artistic_2.0-0298c3.svg)";
    case "Creative Commons license family": return "![License: CC0-1.0](https://img.shields.io/badge/License-CC0_1.0-lightgrey.svg)";
    case "MIT": return "![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)";
    case "zLib License": return "![License: Zlib](https://img.shields.io/badge/License-Zlib-lightgrey.svg)";
    case "No License": return "";
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {

  switch (license) {

    case "Artistic license 2.0": return "(https://opensource.org/licenses/Artistic-2.0)";
    case "Creative Commons license family": return "(http://creativecommons.org/publicdomain/zero/1.0/)";
    case "MIT": return "(https://opensource.org/licenses/MIT)";
    case "zLib License": return "(https://opensource.org/licenses/Zlib)";
    case "No License": return "";
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {

  switch (license) {

    case "Artistic license 2.0": return `This project is protected by Artistic License 2.0. Learn more about it here: ${renderLicenseLink(license)}`;
    case "Creative Commons license family": return `This project is protected by the Creative Commons License Family. Learn more about it here: ${renderLicenseLink(license)}`;
    case "MIT": return `This project is protected by the MIT License. Learn more about it here: ${renderLicenseLink(license)}`;
    case "zLib License": return `This project is protected by the zLib License. Learn more about it here: ${renderLicenseLink(license)}`;
    case "No License": return "";
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `\n${renderLicenseBadge(data.license)}\n\n## Description\n\n${data.description}\n\n## Table of Contents\n\n1. [Description] (#description)\n2. [Installation] (#installation)\n3. [Usage] (#usage)\n4. [License] (#license)\n5. [Contributing] (#contributing)\n6. [Tests] (#tests)\n7. [Questions] (#questions)\n\n## Installation\n\n${data.installation}\n\n## Usage\n\n${data.usage}\n\n## License\n\n${renderLicenseSection(data.license)}\n\n## Contributing\n\n${data.contribution}\n\n## Tests\n\n${data.testing}\n\n## Questions\n\nFind me on GitHub at ${data.username}.\n\nOr, email me at ${data.email}.`;
};

module.exports = {

  generateMarkdown,
  renderLicenseBadge,
  renderLicenseLink,
  renderLicenseSection
};