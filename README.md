# generator-tuleva-web-app

## Installation

First, we need to configure your environment to use our custom npm feed in our [VSTS](https://tulevaag.visualstudio.com).
For this vsts-npm-auth must be installed from the public npm feed.

```bash
npm install -g vsts-npm-auth --registry https://registry.npmjs.com --always-auth false
```

Second, we need to create the .npmrc file with our remote repository and authenticate against VSTS. Use your Azure AD account from tuleva.
Create the .npmrc file in your new project folder in the root of the project. Copy the following line into this file

```text
registry=https://tulevaag.pkgs.visualstudio.com/_packaging/TulevaExtensionPreviews/npm/registry/
always-auth=true
```
```bash
vsts-npm-auth -config .npmrc
```

Last, install [Yeoman](http://yeoman.io) using [npm](https://www.npmjs.com/) (we assume you have pre-installed [node.js](https://nodejs.org/)). And also install the tuleva web app generator published on our private npm feed.

```bash
npm install -g yo
npm install -g generator-tuleva-web-app --registry https://tulevaag.pkgs.visualstudio.com/_packaging/TulevaExtensionPreviews/npm/registry/
```
And then generate your new project:

```bash
yo tuleva-web-app
```

The project includes the following frameworks / technologies that can be used:
* react (ui framework)
* webpack (for building)
* sass (for css)
* typescript (default language)
* office fabric ui for react
* mocha (unit testing)
* tslint (TypeScript style checks)
* eslint (JavaScript style checks)

For npm the following tasks

* build - building with optimized options
* build:debug - building with debug options
* build:prod - building with optionized options for production
* serve - start the webserver
* eslint - run style checks for JavaScript
* tslint - run style checks for TypeScript
* test - run unti test with mocha

## License

 © [Tuleva AG](http://www.tuleva.de)

[build-image]: https://tulevaag.visualstudio.com/_apis/public/build/definitions/723f273b-a8e1-44b1-b9e5-761636473868/6/badge

[build-url]: https://tulevaag.visualstudio.com/Tuleva-ProjectTemplates/_build/index?context=mine&path=%5C&definitionId=6&_a=completed
