'use strict';
const Generator = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');
const utilities = require('./../../common/utilities')
const validateNpm = require('./../../common/validateNpmName')

module.exports = class extends Generator {
  prompting() {
    // Have Yeoman greet the user.
    this.log(
      yosay(`Welcome to the ${chalk.red('tuleva-web-app')} generator from Tuleva!`)
    );

    const prompts = [{
        type: 'input',
        name: 'name',
        message: 'Name of your project (default: name of the folder)',
        validate: (name) =>{

          var results = validateNpm(name)

          var messages = ''
          if(!results.validNpmPackage){
            return results.errors.join('\n');
          }else{
            return true;
          }

        },
        default: this.appname
      },
      {
        type: 'input',
        name: 'description',
        message: 'Project description',
        default: 'A new Tuleva project'
      },
      {
        type: 'input',
        name: 'author',
        message: 'What is the authors name',
        default: 'Tuleva AG'
      }
    ];

    return this.prompt(prompts).then(answers => {
      // To access props later use this.props.someAnswer;
      this.props = answers;
    });
  }

  writing() {

    let answers = {
      name: this.props.name,
      description: this.props.description,
      author: this.props.author,
    }

    this.fs.copyTpl(
      this.templatePath('package.json'),
      this.destinationPath('package.json'),
      answers
    );

    this.fs.copy(
      this.templatePath('src/**'),
      this.destinationPath('src/')
    );

    this.fs.copy(
      this.templatePath('tests/**'),
      this.destinationPath('tests/')
    );

    this.fs.copy(
      this.templatePath('rulesets/csslintrc.json'),
      this.destinationPath('.csslintrc')
    );

    this.fs.copy(
      this.templatePath('rulesets/eslintrc.json'),
      this.destinationPath('.eslintrc')
    );

    this.fs.copy(
      this.templatePath('rulesets/tslint.json'),
      this.destinationPath('tslint.json')
    );
  }

  install() {
    this.installDependencies({
      npm: true,
      bower: false,
      yarn: false
    });
  }
};
