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
      yosay(`Welcome to the ${chalk.red('generator-web-app')} generator from Tuleva AG!`)
    );

    const prompts = [{
        type: 'input',
        name: 'name',
        message: 'Name of your project (default: name of the folder)',
        validate: (name) => {

          var results = validateNpm(name)

          var messages = ''
          if (!results.validNpmPackage) {
            return results.errors.join('\n');
          } else {
            return true;
          }

        },
        default: this.appname
      },
      {
        type: 'input',
        name: 'description',
        message: 'Project description',
        default: 'A new project'
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

    let answers = {
      name: this.props.name,
      description: this.props.description,
      author: this.props.author,
    }

    let filesToCopy = [{
        from: 'package.json',
        to: 'package.json',
        tpl: true
      },
      {
        from: 'src/**',
        to: 'src/',
        tpl: false
      },
      {
        from: 'tests/**',
        to: 'tests/',
        tpl: false
      },
      {
        from: 'rulesets/csslintrc.json',
        to: '.csslintrc',
        tpl: false
      },
      {
        from: 'rulesets/eslintrc.json',
        to: '.eslintrc',
        tpl: false
      },
      {
        from: 'rulesets/tslint.json',
        to: 'tslint.json',
        tpl: false
      },
      {
        from: 'mocha.opts',
        to: 'mocha.opts',
        tpl: false
      },
      {
        from: 'readme.md',
        to: 'readme.md',
        tpl: false
      },
      {
        from: 'webpack.config.js',
        to: 'webpack.config.js',
        tpl: false
      },
      {
        from: 'tsconfig.json',
        to: 'tsconfig.json',
        tpl: false
      }
    ];

    filesToCopy.forEach(fileToCopy => {

      let from = this.templatePath(fileToCopy.from),
        to = this.destinationPath(fileToCopy.to);

      if (fileToCopy.tpl) {
        this.fs.copyTpl(from, to, answers);
      } else {
        this.fs.copy(from, to);
      }

    });

  }

  install() {
    this.installDependencies({
      npm: true,
      bower: false,
      yarn: false
    });
  }
};
