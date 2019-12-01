#!/usr/local/bin/node


// require native Node.js modules
const path = require('path')
const fs = require('fs')

const output = fs.readFileSync(path.join(__dirname, 'output'), 'utf8')
console.log(output)