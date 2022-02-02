
var cfg = require("./knex-cfg").client;
knex.select("id", "name").from("mytable").asCallback(function(err, rows)
{
    if(err){
        console.log(err);
    }else{
        console.log(rows);
    }
    knex.destroy();
    console.log('Done.')

});

