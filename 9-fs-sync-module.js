//Sync Fs Module

const {readFileSync, writeFileSync} = require('fs')

const first = readFileSync('./content/first.txt', 'utf8');

const test = readFileSync('./content/subcontent/test.txt', 'utf8');

console.log(first,test);

writeFileSync('./content/result-sync.txt',
`Here is the result ${first}, ${test} result`,

{flag:'a'}
)
//Flag A appendes to the file



