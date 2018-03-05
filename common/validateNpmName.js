'use strict'

var scopedPackagePattern = new RegExp('^(?:@([^/]+?)[/])?([^/]+?)$');
var builtins = require('builtins');
var blacklist = [
  'node_modules',
  'favicon.ico'
];

var validate = module.exports = function (name) {
  var errors = []

  if (name === null) {
    errors.push('name cannot be null')
    return done(errors)
  }

  if (name === undefined) {
    errors.push('name cannot be undefined')
    return done(errors)
  }

  if (typeof name !== 'string') {
    errors.push('name must be a string')
    return done(errors)
  }

  if (!name.length) {
    errors.push('name length must be greater than zero')
  }

  if (name.match(/^\./)) {
    errors.push('name cannot start with a period')
  }

  if (name.match(/^_/)) {
    errors.push('name cannot start with an underscore')
  }

  if (name.trim() !== name) {
    errors.push('name cannot contain leading or trailing spaces')
  }

  // No funny business
  blacklist.forEach(function (blacklistedName) {
    if (name.toLowerCase() === blacklistedName) {
      errors.push(blacklistedName + ' is a blacklisted name')
    }
  })

  // really-long-package-names-------------------------------such--length-----many---wow
  // the thisisareallyreallylongpackagenameitshouldpublishdowenowhavealimittothelengthofpackagenames-poch.
  if (name.length > 214) {
    errors.push('name cannot contain more than 214 characters')
  }

  // mIxeD CaSe nAMEs
  if (name.toLowerCase() !== name) {
    errors.push('name cannot contain capital letters')
  }

  if (/[~'!()*]/.test(name.split('/').slice(-1)[0])) {
    errors.push('name cannot contain special characters ("~\'!()*")')
  }

  if (encodeURIComponent(name) !== name) {
    // Maybe it's a scoped package name, like @user/package
    var nameMatch = name.match(scopedPackagePattern)
    if (nameMatch) {
      var user = nameMatch[1]
      var pkg = nameMatch[2]
      if (encodeURIComponent(user) === user && encodeURIComponent(pkg) === pkg) {
        return done(errors)
      }
    }

    errors.push('name can only contain URL-friendly characters')
  }

  return done(errors)
}

validate.scopedPackagePattern = scopedPackagePattern

var done = function (errors) {
  var result = {
    validNpmPackage: errors.length === 0,
    errors: errors
  }

  if (!result.errors.length) delete result.errors
  return result
}