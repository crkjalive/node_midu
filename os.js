const os = require('node:os')

console.log(os.platform())
console.log(os.version())
console.log(os.release())
console.log(os.arch())
console.log(os.cpus())
console.log(os.freemem() / 1024 / 1024)
console.log(os.totalmem() / 1024 / 1024)
console.log(os.hostname())
console.log(os.homedir())
console.log(os.availableParallelism())
console.log(os.loadavg())
console.log(os.machine())
console.log(os.userInfo())
console.log(os.uptime() / 60 / 60)


