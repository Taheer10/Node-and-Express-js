const names = require('./3-Firstmodules')
const sayname = require('./4-SecondModules')
const person = require('./5-alternative-method')
require('./6-mind-grenade')

sayname(names.johan);
sayname(names.mona);
console.log(person);

