#! /usr/bin/env node

const welcome = require('cli-welcome');
const pkgJSON = require('./package.json');
const chalk = require('chalk');

const log = console.log;
const dim = chalk.dim;
const italic = chalk.italic;
const green = chalk.green;
const twitterClr = chalk.hex(`#1da1f2`).bold.inverse;
const gitHubClr = chalk.hex(`#6cc644`).bold.inverse;

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

${green(`Software Engineer at M-rinternational`)}

${italic(`
  About: I'm a software developer. As you'll see, 
  I have six years plus of hands-on experience in efficiently 
  coding web application and mobile applications using modern HTML5, 
  CSS, JavaScript, PHP, Node JS, Angular, Native script, Ionic, Dart, 
  Flutter, React and others Frameworks. 
  Also specialize using MongoDB, SQL and MYSQL
`)}

${twitterClr(` Twitter `)}: ${dim(`https://twitter.com/elviscoly`)}
${gitHubClr(` GitHub `)}: ${dim(`https://github.com/elviscoly`)}

`);