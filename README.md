WebdriverIO boilerplate
===================

This boilerplate allows to run WebdriverIO WEB tests using Mocha and the page objects pattern.

## Features and purposes

- Page Object pattern used
- Verify that the UI is working correctly
- Verify that user can navigate through UI pages
- Verify that UI elements are displayed
- Allure report as a test report tool

# Mandatory setup

1. NodeJS (latest)

# How to run tests

- Web - To execute tests in local browser run `npm run test`
- Report - To view test report run `npm run test:report`

## How to run specific test
To run specific test locally you need to update `wdio.conf.js` in `config` folder. Find `specs: ['../test/specs/*.js'],`. Replace `/*` with filename. For example to run `login.spec.js` you need to write the following: `specs: ['../test/specs/login.spec.js']`. This will run all `it` in spec file. If you want to run specific it in this file, replace `it(...` with `it.only(...`

# Stack

1. Javascript
2. Webdriver.io - interactions with browser
3. Allure - reporting solution
4. Mocha - testing framework
5. Chai - assertion library for node and the browser

## Project structure
```
/config - configuration
/helper - helper functions
/reports - folder for reports
/test - 
  /pages - page objects and page components
  /specs - tests
```
