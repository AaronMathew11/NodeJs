const eventemmitter= require('events');

//create class
class Myemitter extends eventemmitter{}

//init object
const myemitter= new Myemitter();

//event listener
myemitter.on('event',()=>console.log('Event Fired!'));

//Init event
myemitter.emit('event');
myemitter.emit('event');
myemitter.emit('event');