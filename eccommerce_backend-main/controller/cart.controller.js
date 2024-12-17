const express = require('express')

const router = express.Router()

const cartService = require('../services/cart.services');


router.post("/newcart", function save(req, res) {

    cartService.Cart(req, res).then((response) => {
        res.send(response)
    }).catch((err) => { res.send(err) })
});
// router.post("/checkCartData", function checkCartData(req, res) {

//     cartService.checkCartData(req, res).then((response) => {
//         res.send(response)
//     }).catch((err) => { res.send(err) })
// });

router.post("/findcart",function find(req,res){
    cartService.findCart(req,res).then((response)=>{
        res.send(response)
    }).catch((err)=>{res.send(err)})
});

router.post("/updatecart",function update(req,res){
    cartService.updateCart(req,res).then((response)=>{
        res.send(response)
    }).catch((err)=>{res.send(err)})
});


module.exports = router
