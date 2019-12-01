#!/usr/local/bin/node

// require Node.JS native modules
const path = require('path')
const fs = require('fs')

// require third-party modules
const chalk = require('chalk')
const boxen = require('boxen')

// set up Boxen options
const boxenOptions = {
  padding: 1,
  margin: 1,
  borderStyle: 'round'
}

const newLine = '\n'

const output = chalk.blue(`                Hello, I'm Rishabh😼`) + newLine + newLine +
chalk.white(`    LinkedIn: `) + chalk.blue('https://www.linkedin.com/in/rishabh-bhandari-ba5778168/') + newLine +
chalk.white('GitHub: ') + chalk.cyan(`github.com/RishabhKodes`) + newLine + newLine + 
chalk.white('Written with 💜 by e33or_assasin') + newLine +

fs.writeFileSync(path.join(__dirname, 'bin/output'), chalk.magenta(boxen(output, boxenOptions)))