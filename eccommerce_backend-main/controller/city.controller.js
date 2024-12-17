const express = require('express')

const router = express.Router()
const db = require("../db/db")



const dbCity = db.City
//

router.post("/addcity", async function save(req, res) {
    let newCity = {
        country: req.body.country,
        state: req.body.state,
        city: req.body.city
    }
    const result = await new dbCity(newCity).save();
    const data = {
        responseCode: 1,
        result: result
    }
    res.send(data);
});
router.get("/getcity", async function save(req, res) {
    
    const result = await dbCity.find();
    const data = {
        responseCode: 1,
        result: result
    }
    res.send(data);
});
router.post("/updatecity", async function save(req, res) {
    
    const result = await dbCity.findOneAndUpdate({state:req.body.state},req.body)
    const data = {
        responseCode: 1,
        result: result
    }
    res.send(data);
});




module.exports = router
