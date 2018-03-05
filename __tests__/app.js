'use strict';
const path = require('path');
const assert = require('yeoman-assert');
const helpers = require('yeoman-test');

describe('generator-tuleva-web-app:app', () => {
  beforeAll(() => {
    return helpers
      .run(path.join(__dirname, '../generators/app'))
      .withPrompts({
        someAnswer: true
      });
  });

  describe('check template files', ()=>{

    it('create basic project files', () => {
      assert.file([
        'readme.md',
        'tsconfig.json',        
        'webpack.config.js'
      ]);
    });

    it('create test files', () => {
      assert.file([
        'mocha.opts',
        'tests/dateFunctions.test.ts'
      ]);
    });

    it('create rule sets', () => {
      assert.file([
        'rulesets/csslintrc.json',
        'rulesets/eslintrc.json',
        'rulesets/tslint.json'
      ]);
    });

    it('create app files', () => {
      assert.file([
        'src/index.tsx',
        'src/style.scss',
        'src/components/utilities/helloDate.ts',
        'src/components/App/App.Props.ts',
        'src/components/App/App.scss',
        'src/components/App/App.States.ts',
        'src/components/App/App.tsx'
      ]);
    });

  })

 
});
