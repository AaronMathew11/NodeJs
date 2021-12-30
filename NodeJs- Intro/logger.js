const eventemitter= require('events');
const uuid=require('uuid');

console.log(uuid.v4());

class Logger extends eventemitter{
    log(msg){
        //call event
        this.emit('message',{id:uuid.v4(),msg});
    }
}

// module.exports= Logger;

const logger=new Logger();
logger.on('message',data=>console.log('called listener in ',data));

logger.log('Hello World');
logger.log('Aaron here');
logger.log('Lets have some fun');