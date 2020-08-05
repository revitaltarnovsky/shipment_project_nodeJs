const express = require('express');
const router = express.Router();
const axios = require ("axios");
const Joi = require("@hapi/joi");



/* GET home page. */
router.get('/',(req, res)=> {
  let url="https://msbit-exam-products-store.firebaseio.com/deliveryProducts/products.json";
  axios.get(url)
  .then(resp=>{
    let myData=resp.data
    console.log(myData)
    let temp_ar;
    temp_ar=myData.filter(item=>{
      if(item.status){
        return item.status==1
      }
    })
    console.log(temp_ar)
    res.header("Access-Control-Allow-Origin", "*");
    res.json(temp_ar)
  })
});

module.exports = router;
