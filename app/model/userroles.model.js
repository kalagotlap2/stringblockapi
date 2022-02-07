const mongoose = require("mongoose");
const userRolesSchema = mongoose.Schema({
  wallet_account_address: String,
  super_admin:Boolean,
  product_roles:[],
  owner_sub_domains:[],
  user_registration_date:String
})

module.exports = mongoose.model("UserRoles",userRolesSchema);