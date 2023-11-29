
// OS module

const os = require('os')
const { clearScreenDown } = require('readline')

console.log(os.arch())    // architecture (64 or 32)

console.log(os.platform())

console.log(os.networkInterfaces())

console.log(os.cpus())

console.log(os.totalmem())

console.log(os.freemem())