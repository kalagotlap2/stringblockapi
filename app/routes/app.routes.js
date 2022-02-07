const cors=require("cors");
const corsOptions ={
   origin:'*', 
   credentials:true,            //access-control-allow-credentials:true
   optionSuccessStatus:200,
}
var express = require('express');
var router = express.Router();

// controllers

var user_config_controller = require('../controllers/userconfigs.controller.js');
var user_roles_controller = require('../controllers/userroles.controller.js');

//module.exports = (app) => {
  //router.set('subdomain offset',0);
  //const App = require("../controllers/");

//   router.post("config/create", function(req,res){
//      user_config_controller.createConfig;
//   });
  //router.set('subdomain offset',0);
  router.get("/config/getall", user_config_controller.findAllConfigs);

//   router.post("roles/registration", function(req,res){
//      user_roles_controller.register
//    });
  //router.set('subdomain offset',0);
  router.get("roles/userdetails", user_roles_controller.getUserRoles);

  router.get("/theme/:themeId", user_config_controller.findOne);

  router.put("/theme/:themeId", user_config_controller.update);

  router.delete("/theme/:themeId", user_config_controller.delete);

  module.exports = router;
