# generator-web-app

|||
|-|-|
|Build|[![current build status](https://tulevaag-public.visualstudio.com/_apis/public/build/definitions/17517bf1-7b87-4ef4-af00-c7220a135715/2/badge)](https://tulevaag-public.visualstudio.com/generator-web-app/_build/index?context=allDefinitions&path=%5C&definitionId=2&_a=completed)|
|Internal release| [![current internal release status](https://rmprodweu1.vsrm.visualstudio.com/Ac85f02bd-2265-486d-8aef-d9b083a0f0fa/_apis/public/Release/badge/17517bf1-7b87-4ef4-af00-c7220a135715/2/2)](https://tulevaag-public.visualstudio.com/generator-web-app/_releases2?definitionId=2&view=mine&_a=releases)|
|Internal released feed version| ![@tulevaag/generator-web-app package in internal feed in Visual Studio Team Services](https://tulevaag-public.feeds.visualstudio.com/_apis/public/Packaging/Feeds/29fa824c-6d8f-46a6-b409-4d14d962fa7c@43d1dd30-46d6-4d50-8c10-0b39093335e2/Packages/5ca3672d-837e-44d1-a4a0-01069e6057e9/Badge)|
|Public npm release|[![current public release status](https://tulevaag-public.vsrm.visualstudio.com/_apis/public/Release/badge/17517bf1-7b87-4ef4-af00-c7220a135715/2/3)](https://tulevaag-public.visualstudio.com/generator-web-app/_releases2?definitionId=2&view=mine&_a=releases)|

This is a simple generator web app, that allows you to create a up to date app with the current full stack web development technologies.

**Note**: This project is used with GitHub and the new VSTS public projects features. Where GitHub is used for code and issues, but the complete build pipeline is hosted on VSTS.

* Build Definitions: https://tulevaag-public.visualstudio.com/generator-web-app/_build 
* Release Definitions: https://tulevaag-public.visualstudio.com/generator-web-app/_release


## Installation

Install [Yeoman](http://yeoman.io) using [npm](https://www.npmjs.com/) (we assume you have pre-installed [node.js](https://nodejs.org/)). And also install the tuleva web app generator published on our private npm feed.

```bash
npm install -g yo
npm install -g @tuleva/generator-web-app
```
And then generate your new project:

```bash
yo generator-web-app
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
