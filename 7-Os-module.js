const os = require('os');

// info about current user

const user = os.userInfo()
console.log(user);


//mehod runs the system uptime (running time) in seconds

console.log(`the system uotime is ${(os.uptime()/60)} seconds`)

const currentOS = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem()
}

console.log(currentOS);