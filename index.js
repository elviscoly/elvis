#! /usr/bin/env node

const welcome = require('cli-welcome');
const pkgJSON = require('./package.json');
const chalk = require('chalk');

const log = console.log;

welcome({
  title: `Elvis Iria`,
  tagLine: `Hey, nice to meet you`,
  description: pkgJSON.description,
  version: pkgJSON.version,
  bgColor: `#FADC05`,
  color: `#000000`,
  bold: true,
  clear: true,

})

log(`

${chalk.green(`Software Engineer at M-rinternational`)}

${chalk.italic(`
  About: I'm a software developer. As you'll see, 
  I have six years plus of hands-on experience in efficiently 
  coding web application and mobile applications using modern HTML5, 
  CSS, JavaScript, PHP, Node JS, Angular, Native script, Ionic, Dart, 
  Flutter, React and others Frameworks. 
  Also specialize using MongoDB, SQL and MYSQL
`)}

${chalk.hex(`#1da1f2`).bold.inverse(` Twitter `)}: ${chalk.dim(`https://twitter.com/elviscoly`)}
${chalk.hex(`#6cc644`).bold.inverse(` GitHub `)}: ${chalk.dim(`https://github.com/elviscoly`)}

`);