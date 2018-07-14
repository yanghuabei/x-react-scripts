// @remove-on-eject-begin
/**
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
// @remove-on-eject-end

'use strict'
const escapeStringRegexp = require('escape-string-regexp')

class InterpolateHtmlPlugin {
  constructor(replacements) {
    this.replacements = replacements
  }

  apply(compiler) {
    compiler.hooks.compilation.tap('InterpolateHtmlPlugin', compilation => {
      compilation.hooks.htmlWebpackPluginBeforeHtmlProcessing.tap(
        'InterpolateHtmlPlugin',
        data => {
          // Run HTML through a series of user-specified string replacements.
          Object.keys(this.replacements).forEach(key => {
            const value = this.replacements[key]
            data.html = data.html.replace(
              new RegExp('%' + escapeStringRegexp(key) + '%', 'g'),
              value
            )
          })
        }
      )
    })
  }
}

module.exports = InterpolateHtmlPlugin
