const http = require('http')

http.createServer((req, res) => {

    // res.writeHead(200, {'Content-Type': 'application/json'})
    // res.setHead(200, {'Content-Disposition': 'attachment; filename=lista.csv'})

    res.write('Hola Mundo')
    res.end()
})
//Para especificar el puerto en el cual quiero que se corra mi servidor
.listen(8080)

console.log('Escuchando el puerto', 8080)