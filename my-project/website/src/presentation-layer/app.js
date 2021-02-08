const express = require('express') 
const path = require('path')
const expressHandleBars = require('express-handlebars')
const db = require('../data-access-layer/db')
const app = express()

app.engine('hbs', expressHandleBars({
    extname: 'hbs',
    defaultLayout: 'main.hbs'
}))

app.set('views', path.join(__dirname, '/views'))
app.use(express.static(path.join(__dirname, 'public')))


app.get('/', function(req, res){
    const model = {}
    res.render('index.hbs',model)
})

app.listen(8080)