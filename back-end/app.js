
var cfg = require("./knex-cfg").client;
var screen = require('./screen');
screen.clear();



























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
