# Force SSL using Express (Redirect HTTP to HTTPS)

Redirecting HTTP to HTTPS. It forces SSL (HTTPS) when HTTP is required using Express (Nodejs) and remove www and trailing slash on your domain.

[![project-version](https://img.shields.io/npm/v/ssl-express-www.svg?style=flat-square)](https://github.com/brunomacedo/ssl-express-www) [![downloads](https://img.shields.io/npm/dt/ssl-express-www.svg?style=flat-square)](https://www.npmjs.com/package/ssl-express-www) [![npm](https://img.shields.io/badge/npm-v5.5.1-red.svg?style=flat-square)](https://www.npmjs.com) [![mocha](https://img.shields.io/badge/mocha-v4.1.0-yellowgreen.svg?style=flat-square)](https://mochajs.org/) [![Build Status](https://travis-ci.org/brunomacedo/ssl-express-www.svg?branch=master)](https://travis-ci.org/brunomacedo/ssl-express-www)

## Installation

```prompt
npm i ssl-express-www
```

## Usage CommonJS

```javascript
var express = require('express');
var secure = require('ssl-express-www');
var app = express();

app.use(secure);

var port = process.env.PORT || 3000;
app.listen(port, () => console.log('Server listening.'));

```

## Usage ES6

Transpile it with [Babel](https://babeljs.io/)

```javascript
import express from 'express';
import secure from 'ssl-express-www';

const app = express();

app.use(secure);

let port = process.env.PORT || 3000;
app.listen(port, () => console.log('Server listening.'));

```

## Solve LF replace to CRLF on Git

This command will solve the problem with linebreak replacement on `git commit`.

```prompt
git config --global core.autocrlf input
```

## Contributing

Babel@6 doesn't export default `module.exports` any more.

```prompt
npm i -D babel-plugin-add-module-exports
```

Usage in file `.babelrc`

```json
{
  "presets": ["env"],
  "plugins": [
    "add-module-exports"
  ]
}
```

## Update package version

View usage | [view](https://coderwall.com/p/9bx-iq/npm-to-bump-module-version)


```prompt
npm version patch -m "Bumped to version %s"
```
v2.1.**1**


```prompt
npm version minor
```
v1.**2**.1


```prompt
npm version major
```
v**3**.1.1

## List global NPM packages

```prompt
npm list -g --depth 0
```

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details
