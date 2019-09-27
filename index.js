const express = require('express')
var app = express();
const router = require('./router/router')





app.use('/', function (req, res, next) {
    res.send('API working');
    next()
});

app.use(router)

app.get('/sumar/:n1/:n2', function (req, res) {
    var n1 = parseInt(req.params.n1)
    var n2 = parseInt(req.params.n2)
    var suma = n1 + n2
    var out = JSON.stringify({
        "data" : {
            "numero 1": n1,
            "numero 2": n2, 
            "respuesta": suma
        }       
    })
    res.send(out).status(200)

});

app.listen(3000, function () {
    console.log('App listening on port 3000!');
});
