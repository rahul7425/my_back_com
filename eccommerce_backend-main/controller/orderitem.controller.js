const express = require('express')

const db = require("../db/db")

const router = express.Router()

const dbOrderitem = db.Orderitem

router.post("/neworderitem", (req, res) => {

    const { product } = req.body

    try {

        dbOrderitem.insertMany(product).then((response) => {
            res.send(response)
        })

    } catch (error) {
        res.send(error)
    }




})

module.exports = router