const express = require('express')
const path = require('path')
const app = express()

app.set('port', 3000)
app.set('views', path.join(__dirname ,'views'))
app.set('view engine', 'ejs')

app.use(express.static( path.join(__dirname, 'public' )))
app.use(express.json())


app.use('/inicio',require('./routes/direccion'))

app.listen(app.get('port'), console.log("server on port "+app.get('port')))