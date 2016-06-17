# react-defaulting-image

this simple component allows for specifying a default image if the target image can not be loaded.

[![Build Status](https://travis-ci.org/tony-kerz/react-defaulting-image.svg?branch=tk%2Ftravis)](https://travis-ci.org/tony-kerz/react-defaulting-image)

## unit testing strategies

while this is a very simple component, i'm also using this repo to evaluate a few unit testing
libraries:

1. [jest](https://facebook.github.io/jest/)
  - automatically initializes [jsdom](https://github.com/tmpvar/jsdom) to be able to test jsx type functionality via [react test helpers](https://facebook.github.io/react/docs/test-utils.html)
  - handy [auto-mock feature](https://facebook.github.io/jest/docs/automatic-mocking.html#content)
  - [jasmine-2](http://jasmine.github.io/2.4/introduction.html) by default
  - [example](https://github.com/tony-kerz/react-defaulting-image/blob/556db3e459e31fff802cab753ad7cc5cf7ec9e83/src/__tests__/index-test.js)

1. [mocha](https://mochajs.org/)
  - requires [initialization of jsdom](https://github.com/tony-kerz/react-defaulting-image/blob/556db3e459e31fff802cab753ad7cc5cf7ec9e83/test/mocha.opts)
  - can use with various assertion libraries, [chai](http://chaijs.com/) is one popular option
  - [example](https://github.com/tony-kerz/react-defaulting-image/blob/556db3e459e31fff802cab753ad7cc5cf7ec9e83/test/index-test.js)

1. [ava](https://github.com/avajs/ava)
  - requires [initialization of jsdom](https://github.com/tony-kerz/react-defaulting-image/blob/556db3e459e31fff802cab753ad7cc5cf7ec9e83/package.json#L65)
  - runs tests in parallel for performance and isolation win
  - enhanced [power-assert messages ftw](https://github.com/avajs/ava#enhanced-assertion-messages)
  - [example](https://github.com/tony-kerz/react-defaulting-image/blob/556db3e459e31fff802cab753ad7cc5cf7ec9e83/ava/index-test.js)

> at this point, [ava](https://github.com/avajs/ava#why-ava) is my fave based on isolation, concurrency and enhanced-assertion messages
