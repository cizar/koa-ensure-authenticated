'use strict'

var extend = require('util')._extend

module.exports = function(options) {
  var defaults = {
    redirectUrl: '/',
    message: 'Login required',
    setReturnTo: true
  }

  if ('string' == typeof options) {
    options = { redirectUrl: options }
  }

  options = extend(defaults, options || {})

  return function *ensureAuthenticatedMiddleware(next) {
    if (!this.isAuthenticated()) {
      if (this.flash && options.message) {
        this.flash('error', options.message)
      }
      if (this.session && options.setReturnTo) {
        this.session.returnTo = this.originalUrl || this.req.url
      }
      return this.redirect(options.redirectUrl)
    }
    yield next
  }
}