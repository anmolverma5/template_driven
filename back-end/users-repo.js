"use strict";

var Promise = require("bluebird");
var db = require('./db');


module.exports =
{
  listUsers: function()
  {
      return db.select('id', 'email').from("users").then();
  },
  listUsersByEmail: function(searchTxt)
  {
      return db("users").select("*").where("email","like","%"+searchTxt+"%").then();
  }
};