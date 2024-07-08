const os = require('os')

//info abt current user
const user = os.userInfo()
console.log(user)

//method returns the system uptime in seconds
console.log(`Bensoli system uptime is: ${os.uptime()} seconds`);

const currentOS = {
    name:os.type(),
    release:os.release(),
    totalmem:os.totalmem(),
    freeMem:os.freemem(),
}

console.log(currentOS)