const express = require('express')
var app = express();
const router = require('./router/router.js')

app.use(router)

app.use('/', (req, res, next) => {
    console.log("Paso por aca")
    next()
});



app.use("/", (req, res) =>{
    console.log("No se encontro")
})


app.listen(3000, function () {
    console.log('App listening on port 3000!');
});
