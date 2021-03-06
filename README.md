# grunt-apm [![Build Status](https://img.shields.io/travis/aymericbeaumet/grunt-apm.svg?style=flat)][travis] [![NPM version](https://img.shields.io/npm/v/grunt-apm.svg?style=flat)][npm]

An easy way to deal with APM (Atom Package Manager) from Grunt.

## Getting Started

This plugin requires Grunt.

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-apm --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-apm');
```

## Tasks

This plugin defines the following tasks (each one calls the respective APM command
in the current working directory):

- `apm-link`
- `apm-test`
- `apm-unlink`

## Release History

1.0.0
- Bump stable

0.0.1:
- `apm-link`
- `apm-test`
- `apm-unlink`

## License

MIT © [Aymeric Beaumet](http://beaumet.me)

[npm]: https://www.npmjs.org/package/grunt-apm
[travis]: https://travis-ci.org/aymericbeaumet/grunt-apm
