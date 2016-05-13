/**
 * Dependencies
 */
var each      = require('async').each
var colors    = require('colors/safe')
var minimatch = require("minimatch")
var _         = require('underscore')

_.mixin({ deepPick: require('deep_pick') })

/**
 * Expose `plugin`.
 */
module.exports = plugin

function idFn (input) {
  return input
}

function isDefined(value) {
  return typeof value == "undefined" || value == null
}

/**
 * Metalsmith plugin to print filenames and file information to the console.
 *
 * @param {Object} options
 *   @property {String} pattern (optional)
 *   @property {Object} schema (optional)
 *   @property {Function} logger (optional)
 * @return {Function}
 */
function plugin(opts){

  opts = opts || {}

  pattern = opts.pattern || '**'
  logger  = opts.logger  || console.log

  var deepPick = (isDefined(opts.schema)) ? idFn : _.deepPick

  /**
   * Main plugin function
   */
  return function(files, metalsmith, done){
    function log(filename, done) {
      if(minimatch(filename, pattern)) {
        logger(colors.green(filename))
        logger(deepPick(files[filename]), schema)
      }
    }

    /**
     * Render all matched files
     */
    each(Object.keys(matches), log, done)
  }
}
