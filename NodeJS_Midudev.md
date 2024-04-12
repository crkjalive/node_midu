# Curso práctico de Nodejs by Midudev 
> https://www.youtube.com/watch?v=yB4n_K7dZV8&list=PLUofhDIg_38qm2oPOV-IRTTEKyrVBBaU7&index=1



1. Entorno de ejecucion de Javascript  
2. compila en cualquier dispositivo  
3. event loop
4. arquitectura orientada a eventos
5. v8 motor integrado en chrome en NodeJs
6. asincrono
7. sistema monohilo
8. retoma procesos mientras espera respuesta de eventos pendientes
9. escalable
10. 2009 Ryan Dal
11. Open Source Foundation

### NPM

1. npm paquetes para NodeJs 

## Requisitos

1. Javascript
2. Javascript.info  

## Nodejs.org
1. LTS
2. Current (no estable)

## NVM
si se requiere usar diferentes versiones de NodeJS usamos NVM  

## FNM
instala nodejs con rust  
1. curl -fsSL https://fnm.vercel.app/install | bash  
2. fnm --version (fnm 1.33.1)
3. PATH debe estar de manera global 

### instalacion con NFM
1. fnm list (fmn ls)
2. fnm install 18.17.0 (instalamos segun la version)
3. node --version 
4. fnm alias 18.17.0 default

# Primeros pasos min 19
1. > node (repl) consola de node
2. podemos evaluar expresiones

### console en NodeJs
1. console.log('Hola Mundo')
2. console.info('Hola Mundo')
3. console.error('Hola Mundo')

### Objeto window 
el objeto window no existe en NodeJs  
ya que funciona con v8 en el navegador  
pero en node no tenemos este objeto window

> console.log(typeof window)

### globalThis
> console.log(globalThis)  

1. globalThis  

- una variable global en toda nuestra aplicación, sin importar su scope
- va a estar disponible siempre  
- es el equivalente a ***window*** en el navegador
- todos los objetos salen del ***globalThis***  

# Patrón de diseño Modulo
separamos nuestro código por modulos  
tenemos dos formas para la exportacion e importacion de modulos

> Sistemas de Modulos disponibles 
 
### forma clásica para exportar modulos, llamada CommonJS  
se usa con extension ***.js***

***Exportar modulo***  

> CommonJS Module export

~~~
function sum (a,b) {
    return a + b
}

module.exports = {
    sum
}
~~~

***Importar modulo***  

> CommonJS require module

~~~
const {sum} = require('./sum')

console.log(sum(1,2))
~~~

### forma moderna para exportar modulos 
se usa con la extension ***.mjs***  

***exportar modulo  ***

~~~
export function sum (a, b) {
    return a + b
}
~~~

***importar modulo***

~~~
import {sum} from './sum.mjs'

console.log(sum(1,2))
~~~


# Modulos nativos de Node 

### OS
información de sistema operativo y arquitectura  

~~~
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
~~~

### file system stats
sistema de archivos, el mas utilizado  

~~~
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
~~~

### file system fs
como leer un archivo.txt de manera sincrona

~~~
const fs = require('node:fs')

console.log('Leyendo el primer archivo ...')

const text = fs.readFileSync('./archivo.txt', 'utf-8')

console.log(text)

console.log('Leyendo el segundo archivo ...')

const secondText = fs.readFileSync('./archivo2.txt', 'utf-8')

console.log(secondText)

console.log('termino de leer de manera secuencial')

~~~

### Async y Sinc 
leyendo archivos de manera asincrona  

Min 45









