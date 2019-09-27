const express = require('express')

var router = express.Router()

router.get('/suma/:a/:b', (req, res ) => {
    let a = parseInt(req.params.a)
    let b = parseInt(req.params.b)
    let c = a + b 
    var out = JSON.stringify({
        "msg" : "Operación suma",
        "numero 1" : a,
        "numero 2" : b,
        "resultado": c }
    )
    res.send(out).status(200)
})

router.get('/resta/:m/:n', (req, res ) => {
    let m = parseInt(req.params.m)
    let n = parseInt(req.params.n)
    let c = m -n 
    var out = JSON.stringify({
        "msg" : "Operación resta",
        "numero 1" : m,
        "numero 2" : n,
        "resultado": c }
    )
    res.send(out).status(200)

    
})

router.get('/multiplicacion/:d/:e', (req, res ) => {
    let d = parseInt(req.params.d)
    let e = parseInt(req.params.e)
    let c = d * e 
    var out = JSON.stringify({
        "msg" : "Operación multiplicación",
        "numero 1" : d,
        "numero 2" : e,
        "resultado": c }
    )
    res.send(out).status(200)
})

router.get('/division/:c/:d', (req, res ) => {
    let c = parseFloat(req.params.c)
    let d = parseFloat(req.params.d)
    if(d != 0){
        var r = c / d
    }else{
        res.send(JSON.stringify({"Error" : "Division por cero"}))
    } 
    var out = JSON.stringify({
        "msg" : "Operación división",
        "numero 1" : c,
        "numero 2" : d,
        "resultado": r }
    )
    res.send(out).status(200)
})





module.exports = router