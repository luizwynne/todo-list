var express = require('express');
var app = express();
var bodyParser = require('body-parser');
const cors = require('cors')
app.use(bodyParser.json())
app.use(cors({ origin: ['http://localhost:3001'], }))

const database = require('./config/db');
 
try {
    
    const resultado = database.sync();
    app.use('/api/todo', require('./routes/todo.route'))
    
    var server = app.listen(8080, function () {
        var host = server.address().address
        var port = server.address().port
        console.log("App listening at http://%s:%s", host, port)
    })

} catch (error) {
    console.log(error);
}