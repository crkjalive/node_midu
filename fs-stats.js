const fs = require('node:fs')

const stats = fs.statSync('./archivo.txt')

console.log(
    stats.isFile(), // es un fichero
    stats.isDirectory(), // es un directorio
    stats.isSymbolicLink(), // es un enlace
    stats.size, // tamaño en bytes
    stats.atime,
    stats.birthtime,
    stats.blksize, 
    stats.ctime, 
    stats.dev, 
    stats.gid,
    stats.ino
)


