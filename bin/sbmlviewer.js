#!/usr/bin/env node
'use strict'

const commander = require('commander')
const pkg = require('../package')

commander
  .version(pkg.version, '-v, --version')
  .description('Command line utilities for sbmlviewer')
  .command('transform <inputFile> <outputFile>', 'Transform sbml-file to html table')
  .parse(process.argv)
