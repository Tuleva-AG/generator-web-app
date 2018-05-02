'use strict';
const Generator = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');
const utilities = require('./../../common/utilities')
const validateNpm = require('./../../common/validateNpmName')
const fs = require("fs");

const prompts = [{
  type: "checkbox",
  name: "generatorTypes",
  choices: [{
      name: " New Tuleva React Project Template",
      value: "project",
    },
    {
      name: " New Tuleva React Project Template With SP Dependencies",
      value: "spProject",
    },
    {
      name: " \twebparts/ Blank Web Part",
      value: "webpart",
    },
    {
      name: " \twebparts/ Component Installer",
      value: "componentInstaller"
    },
    {
      name: " \tappcustomizers/ Custom Menu (TopNav)",
      value: "menu"
    },
  ],
  message: "What do you want?",
}];

module.exports = class extends Generator {

  _checkInsideProject() {
    let files = fs.readdirSync(this.contextRoot);
    if (files.indexOf("package.json") > -1) {
      return true;
    }
    return false;
  }

  _checkForMenuAppCustomizer() {
    let path = this.destinationPath("src/appcustomizers/menu");
    console.log("APP CUSTOMIZER", path, fs.existsSync(path))
    return fs.existsSync(path);
  }

  _invokeNextGenerator() {
    if (this.generators && this.generators.length) {
      this.composeWith(require.resolve("../" + this.generators[0]), {
        next: this._next
      })
    }
  }

  _next() {
    if (this.generators && this.generators.length) {
      this.generators.shift();
      this._invokeNextGenerator()
    }
  }

  prompting() {
    // Have Yeoman greet the user.
    this.log(
      yosay(`Welcome to the ${chalk.red('tuleva-web-app')} generator from Tuleva!`)
    );

    let isInsideProject = this._checkInsideProject();
    if (isInsideProject) {
      // disable Project generator if already inside project
      prompts[0].choices.find(c => c.value === "project").disabled = true;
      prompts[0].choices.find(c => c.value === "spProject").disabled = true;
      // Disable Menu Generator
      if (this._checkForMenuAppCustomizer()) {
        prompts[0].choices.find(c => c.value === "menu").disabled = true;
      }
    } else {
      prompts[0].choices[0].checked = true;
    }

    return this.prompt(prompts).then(answers => {
      this.generators = answers.generatorTypes
      //If you aren't in a project, but you didn't choose a project, force a project first
      // if (this.generators.length && !isInsideProject && (!this.generators.includes("project") || !this.generators.includes("spProject"))) {
      //   this.log("HEADS UP! Running Project Generator even though you didn't ask for it...")
      //   this.generators.unshift("project");
      // }
    })
  }
  end() {
    this._invokeNextGenerator();
  }
};
