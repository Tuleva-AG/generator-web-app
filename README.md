# generator-tuleva-web-app

## Installation

First, we need to configure your environment to use our custom npm feed in our [VSTS](https://tulevaag.visualstudio.com).
For this vsts-npm-auth must be installed from the public npm feed.

```bash
npm install -g vsts-npm-auth --registry https://registry.npmjs.com --always-auth false
```

Second, we need to authenticate against VSTS. Use your Azure AD account from tuleva.

```bash
vsts-npm-auth -config .npmrc
```

last, install [Yeoman](http://yeoman.io) and generator-tuleva-web-app using [npm](https://www.npmjs.com/) (we assume you have pre-installed [node.js](https://nodejs.org/)). And also install the tuleva web app generator published on our private npm feed.

```bash
npm install -g yo
npm install -g generator-tuleva-web-app --registry https://tulevaag.pkgs.visualstudio.com/_packaging/ProjectTemplates/npm/registry/
```

And then generate your new project:

```bash
yo tuleva-web-app
```

## License

 © [Tuleva AG](http://www.tuleva.de)

[build-image]: https://tulevaag.visualstudio.com/_apis/public/build/definitions/723f273b-a8e1-44b1-b9e5-761636473868/6/badge

[build-url]: https://tulevaag.visualstudio.com/Tuleva-ProjectTemplates/_build/index?context=mine&path=%5C&definitionId=6&_a=completed
