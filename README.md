# pdf-generator

> Generate PDFs from HTML with S3 + Serverless.

![Unit tests status](https://github.com/tomfa/pdf-generator-api/actions/workflows/tests.yml/badge.svg)
![ESLint status](https://github.com/tomfa/pdf-generator-api/actions/workflows/lint.yml/badge.svg)

Mono repo containing 3 packages:

- [@pdf-generator/api](https://github.com/tomfa/pdf-generator-api/tree/master/api): Serverless API
- [@pdf-generator/web](https://github.com/tomfa/pdf-generator-api/tree/master/web): NextJS application
- [@pdf-generator/shared](https://github.com/tomfa/pdf-generator-api/tree/master/shared): Shared utils and types

### Setup

```
yarn
```

#### Mac M1 processors

Install chromium
```
brew install chromium

# test opening. You might have to allow it in security settings
chromium

# If you receive "Chromium is damaged"
xattr -cr /Applications/Chromium.app
```

Set puppeteer settings to use brew chromium in `.bash_profile`

```
export PUPPETEER_SKIP_CHROMIUM_DOWNLOAD=true
export PUPPETEER_EXECUTABLE_PATH=`which chromium`
```



#### Infrastructure
The infrastructure is set up initially using terraform.

```
yarn infrastructure:deploy
 ```

_This assumes you have terraform >= 0.12 installed, and AWS credentials set on your machine._

### Run

```
yarn start
```

_Starts all packages concurrently_

### Test

```
yarn test

# In watch mode
yarn test:watch
```

#### Linting

This repository uses ESLint and Prettier.

[`husky`](https://typicode.github.io/husky/#/) is used to check and fix linting errors on commit. They can also be run with the scripts below.

```
# Runs eslint check
yarn lint

# Runs prettier check
yarn lint:prettier-check
```
