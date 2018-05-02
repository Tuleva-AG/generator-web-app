'use strict';
const Generator = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');
const utilities = require('./../../common/utilities')
const validateNpm = require('./../../common/validateNpmName')
const fs = require("fs");

const packageDependencies = require("./packageDependencies");

module.exports = class extends Generator {
  _modifyPackageJson() {
    let path = this.destinationPath("package.json");
    try {
      var packageJson = JSON.parse(fs.readFileSync(path, "utf8"));
      if (!packageJson.name) packageJson.name = this.params.solutionName;
      packageJson.dependencies = Object.assign({}, packageJson.dependencies, packageDependencies.dependencies);
      packageJson.devDependencies = Object.assign({}, packageJson.devDependencies, packageDependencies.devDependencies);

      fs.writeFileSync(path, JSON.stringify(packageJson, null, "\t"))
    } catch (err) {
      console.log(err);
      console.log("Unable to modify package.json");
    }
  }

  prompting() {
    this.composeWith(require.resolve("../project"));
  }

  end() {
    this._modifyPackageJson();
  }

  install() {
    this.installDependencies({
      npm: true,
      bower: false,
      yarn: false
    });
  }
};
