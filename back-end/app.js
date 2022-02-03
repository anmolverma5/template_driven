
var cfg = require("./knex-cfg").client;
var screen = require('./screen');
screen.clear();

var new_id = 10;
var query = knex.raw("SELECT * FROM mytable WHERE id = ?", + [new_id]);
run(query, "pretty");



function run(knexQuery, mode){
return knexQuery.then(function(rows){
    screen.write(rows);
})
.catch(function(err){
    screen.write("Ooops");
    screen.write(err);
})
.finally(function(){
    knex.destroy();
})
}
