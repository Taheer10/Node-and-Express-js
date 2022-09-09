const EventEmitter = require('events');

const customEmitter = new EventEmitter();

customEmitter.on('response', (name,id) =>{
  console.log(`Data received with username ${name} and id ${id}`)
})

customEmitter.on('response', () =>{
  console.log(`Other Code/logic goes here`)
})
customEmitter.emit('response','hussain',10)
