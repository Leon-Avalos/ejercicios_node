const express = require('express')

var router = express.Router()

router.get('/suma', (req, res ) => {
    res.send("Sumar")
})

router.get('/resta', (req, res ) => {
    res.send("Restar")
})

router.get('/multiplicacion', (req, res ) => {
    res.send("Multiplicar")
})

router.get('/division', (req, res ) => {
    res.send("Dividir")
})



module.exports = router