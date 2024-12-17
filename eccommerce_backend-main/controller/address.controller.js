const express = require('express')
const db = require("../db/db")


const router = express.Router()

const dbAddress = db.Address


router.post("/newaddress", async function save(req, res) {
    // let newAddress = {
    //     userID: req.body.userID,
    //     fname: req.body.fname,
    //     lname: req.body.lname,
    //     mobile: req.body.mobile,
    //     altermobile: req.body.altermobile,
    //     country: req.body.country,
    //     state: req.body.state,
    //     city: req.body.city,
    //     pincode: req.body.pincode,
    //     address: req.body.address,
    //     addtype: req.body.addtype
    // }

    const result = await new dbAddress(req.body).save();
    const data = {
        responseCode: 1,
        result: result
    }
    res.send(data);

});

router.post("/savedaddress", async (req, res) => {
    try {
        const result = await dbAddress.find(req.body);
        res.send(result)
    } catch (error) {
        res.send(error)
    }
})



module.exports = router
