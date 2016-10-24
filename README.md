# cli-ts-electron

Basic project created with aurelia to run in electron.

## Components

- [Typescript](https://github.com/Microsoft/TypeScript)
- [aurelia](http://aurelia.io)
- [aurelia-cli](https://github.com/aurelia/cli) @0.21.0
- [aurelia-i18n](https://github.com/aurelia/i18n)
- [aurelia-validation](https://github.com/aurelia/validation)
- [aurelia-materialize-bridge](https://github.com/aurelia-ui-toolkits/aurelia-materialize-bridge) @0.17.1
- [electron](http://electron.atom.io/)


## Install

Clone this project and cd into cloned folder.

```bash
git clone https://github.com/Ullfis/cli-ts-electron.git
cd cli-ts-electron
```

Install dependencies

```bash
npm install
```

## Prepare materialize-css

```bash
npm run materialize
```

In windows cmd, run this command instead:

```bash
npm run materializewin
```

## Run

Compile and start with electron:

```bash
au run [--env [dev|stage|prod]] [--watch]
```

## Release

Build

```bash
au build --env prod
```

Copy files to release folder

```bash
au release
```
