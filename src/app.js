import express from 'express';
import handlebars from 'express-handlebars';
import { Server } from 'socket.io';
import * as path from 'path'
import __dirname from './utils.js';


const app = express()
const httpServer = app.listen(8080, () => console.log('Srv Up!'))
//const io = new Server(httpServer)

app.use(express.json())
app.use(express.urlencoded({ extended: true}));

app.engine('handlebars', handlebars.engine())
app.set('view engine', 'handlebars')
app.set('views', path.resolve(__dirname+'/views'))
app.use(express.static(path.resolve(__dirname+'/public')))

app.use('/', async(req,res)=> res.render('./partials/home',{}))



//const messages = []

/*io.on('connection', socket => {
    socket.broadcast.emit('alerta')
    socket.emit('logs', messages)
    socket.on('message', data => {
        messages.push(data)
        io.emit('logs', messages)
    })
})*/

