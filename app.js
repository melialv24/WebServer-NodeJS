const express = require('express')
const hbs = require('hbs')
require('dotenv').config()

//creando mi servidor 
const app = express()
const port = process.env.PORT

//handlebars
app.set('view engine', 'hbs')
hbs.registerPartials(__dirname + '/views/partials', (err) => {console.log(err)})


// Servir contenido estático 
app.use(express.static('public'))

app.get('/', (req, res) => {
  res.render('home', {
    nombre: 'Melissa',
    titulo: 'curso de melissa'
  })
})


app.get('/elements', (req, res) => {
  res.render('elements', {
    nombre: 'Melissa',
    titulo: 'curso de melissa'
  })
})

app.get('/generic', (req, res) => {
  res.render('generic', {
    nombre: 'Melissa',
    titulo: 'curso de melissa'
  })
})

app.get('*', (req, res) => {
  res.sendFile(__dirname + '/public/404.html')
})

// Aquí le digo en que puerto se ejecuta mi servidor 

app.listen(port, () => {
  console.log(`Example app listening at port ${port}`)
})