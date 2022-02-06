"user strict";
// var cfg = require("./knex-cfg").client;
// var screen = require('./screen');
// screen.clear();
var screen = require('./screen');
var db = require('./db');
var users = require('./users-repo');
var jsonBody = require('body/json');
var formidable = require('formidable');
var axios = require('axios');
var fs = require('fs');
const { response } = require('express');

var data = data;
 
axios({
  method: 'post',
  url: 'http://localhost:8080/users',
  data: {
     data
  },
  TransformRequest: () => {
    const newData = data;
  }
}).then((response) => {
  console.log(response.data);
}).catch((error) => {
  console.log(error);
})



// var new_user = { firstname: 'mohan', lastname: 'verma', email: 'mohan@gmail.com', password: 12345678 };
// screen.clear();

// users.AddUsers(new_user).then(function(result){
//     screen.write(result);
// })
// .catch(function(err){
//   screen.write('Ooops')
//   console.log(err);
// })
// .finally(function(){
//     knex.destroy();
// })



























// const http = require('http');


// const server = http.createServer();
// server.on('request', (request, response) => {
  
//     console.log('this is an incoming request');
// });

// server.listen(8040);























/* VALIDATING DATA  */ 

// users.listUsersByEmail("kumar@gmail.com").then(function(result){
//    screen.write(result , "json");
// })
// .catch(function(err){
//     screen.write('Ooops');
//     screen.write(err);
// })
// .finally(function(){
//   db.destroy();
// });















/* TRANSACTIONS  */ 
//  var anmol = [
//      { name: "hello", email:"hello@gmail.com", phone:"98885411406", country: 'INDIA' },
//      { name: "ANMOL ", email:"anmol5@gmail.com", phone:"981488511406", country: 'INDIA' }

//     ];
//  var shubham = { name: "shubham kumar", email:"shubham@gmail.com", phone:"9888541406",country: 'INDIA' };


// knex.transaction(function(trx){
//     trx
//     .insert(anmol).into('mytable')
//     .then(function(idArr)
//     {
//         var personID = idArr[0];
//         for(var i = 0; i < anmol.length; i++)
//         {
//             anmol[i].id = personID; 
//         }
//         return trx.insert(anmol).into('mytable')
//     });
// }).then(function(){
//     screen.write(anmol.length + 'anmol instserted', 'pretty');
// }).catch(function(err){
//     console.log(err);
// }).finally(function(){
//     knex.destroy();
// })








/*  INSERT UPDATE DELETE    */

//  var anmol = { name: "ANMOL VERMA", email:"anmol@gmail.com", phone:"9888511406", country: 'INDIA' };
//  var shubham = { name: "shubham kumar", email:"shubham@gmail.com", phone:"9888541406",country: 'INDIA' };
//  var kumar = { name: "kumar rao", email:"kumar@gmail.com", phone:"9884511406",country: 'INDIA' };
//  var sachin = { name: "sachin singh", email:"sachin@gmail.com", phone:"9888514465" ,country: 'INDIA'};
//  var country = {country: 'INDIA'};
// knex("mytable").where('id', '=', 11).update(country)
// .then(function(count)
// {
//       console.log(count); 
//       return knex('mytable').select('id', '=', 11)
// })
// .then(function(rows){
//     screen.write(rows, 'pretty');
// })
// .finally(function(){
//     knex.destroy();
// })














/*    OLD    */ 




// var new_id = 10;
// var query = knex.raw("SELECT * FROM mytable WHERE id = ?", + [new_id]);
// run(query, "pretty");



// function run(knexQuery, mode){
// return knexQuery.then(function(rows){
//     screen.write(rows);
// })
// .catch(function(err){
//     screen.write("Ooops");
//     screen.write(err);
// })
// .finally(function(){
//     knex.destroy();
// })
// }
