#! /usr/bin/env node

const welcome = require('cli-welcome');
const pkgJSON = require('./package.json');

welcome({
  title: pkgJSON.name,
  tagLine: `Hey, nice to meet you`,
  description: pkgJSON.description,
  version: pkgJSON.version,
  bgColor: `#FADC00`,
  color: `#000000`,
  bold: true,
  clear: true,

})

console.log(`
Elvis Iria

Software Engineer at M-rinternational

About: I'm a software developer. As you'll see, I have six years plus of hands-on experience in efficiently coding web application and mobile applications using modern HTML5, CSS, JavaScript, PHP, Node JS, Angular, Native script, Ionic, Dart, Flutter, React and others Frameworks. Also specialize using MongoDB, SQL and MYSQL

Twitter: https://twitter.com/elviscoly
GitHub: https://github.com/elviscoly

`);