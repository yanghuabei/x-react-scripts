// @remove-on-eject-begin
/**
 * Copyright (c) 2015-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
// @remove-on-eject-end
'use strict';

// Do this as the first thing so that any code reading it knows the right env.
process.env.BABEL_ENV = 'development';
process.env.NODE_ENV = 'development';

// Makes the script crash on unhandled rejections instead of silently
// ignoring them. In the future, promise rejections that are not handled will
// terminate the Node.js process with a non-zero exit code.
process.on('unhandledRejection', err => {
  throw err;
});

// Ensure environment variables are read.
require('../config/env');

const chalk = require('chalk');
const fs = require('fs-extra');
const webpack = require('webpack');
const paths = require('../config/paths');
const checkRequiredFiles = require('react-dev-utils/checkRequiredFiles');
const formatWebpackMessages = require('react-dev-utils/formatWebpackMessages');
const config = require('../config/webpack.config.amd.dev');

const buildDir = paths.appBuild;

const amdEntry = require(paths.appPackageJson).amdEntry || {
  amd: paths.appAmdJs,
};

// Warn and crash if required files are missing
if (!checkRequiredFiles(Object.values(amdEntry))) {
  process.exit(1);
}

fs.emptyDirSync(buildDir);
copyPublicFolder();
let compiler = webpack(config);
compiler.watch(
  {
    aggregateTimeout: 300,
  },
  (err, stats) => {
    if (err) {
      console.log(err);
    }
    const messages = formatWebpackMessages(stats.toJson({}, true));
    if (messages.errors.length) {
      console.log(messages.errors[0]);
    }
    if (messages.warnings.length) {
      console.log(chalk.yellow('Compiled with warnings.\n'));
      console.log(messages.warnings.join('\n\n'));
    }
    console.log(chalk.green('Watching change'));
  }
);

function copyPublicFolder() {
  fs.copySync(paths.appPublic, paths.appBuild, {
    dereference: true,
    filter: file => file !== paths.appHtml,
  });
}
