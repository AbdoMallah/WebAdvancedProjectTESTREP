const express = require('express') 
const db = require('./data-access-layer/db')
const app = express()

app.use(express.static('CSS'))
app.set('views', path.join(__dirname, 'views'))
app.engine('hbs', expresshandlebars({
    extname: 'hbs',
    defaultLayout: 'main.hbs',
    layoutsDir: path.join(__dirname + 'layouts')
}))
app.get('/', function(req, res){
    
    console.log("Hejjjjjjjjjj")
    res.send("It's Working")
})

app.listen(8080)