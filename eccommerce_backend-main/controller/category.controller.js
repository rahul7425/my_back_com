const express = require('express')

const router = express.Router()
const db = require("../db/db")


const dbCategory = db.Category


router.post("/add", async function save(req, res) {
    
    let newCategory = {
       name:req.body.name
    }
    
    const result = await new dbCategory(newCategory).save();
    const data = {
        responseCode: 1,
        result:result
    }
    res.send(data);

})
router.get("/read", async function save(req, res) {
    
    const result = await dbCategory.find();
    const data = {
        responseCode: 1,
        result:result
    }
    res.send(data);

})



module.exports = router
