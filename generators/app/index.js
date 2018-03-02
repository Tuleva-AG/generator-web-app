'use strict';
const Generator = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');

module.exports = class extends Generator {
  prompting() {
    // Have Yeoman greet the user.
    this.log(
      yosay(`Welcome to the ${chalk.red('tuleva-web-app')} generator from Tuleva!`)
    );

    const prompts = [
      {
        type: 'input',
        name: 'name',
        message: 'Name of your project',
        default: this.appname
      },
      {
        type: 'input',
        name: 'description',
        message: 'Project description',
        default: this.description
      },
      {
        type: 'input',
        name: 'author',
        message: 'What is the authors name',
        default: ''
      }
    ];

    return this.prompt(prompts).then(answers => {
      // To access props later use this.props.someAnswer;
      this.props = answers;
    });
  }

  writing() {
    this.fs.copy(this.templatePath(''), this.destinationPath(''));
  }

  install() {
    this.installDependencies({
      npm: true,
      bower: false,
      yarn: false
    });
  }
};
