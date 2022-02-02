
var cfg = require("./knex-cfg").client;
var screen = require('./screen');
screen.clear();
knex.select("id", "name", 'phone', 'email', 'country', 'list').from("mytable").asCallback(function(err, rows)
{
    if(err){
        screen.write(err);
    }else{
        screen.write(rows, 'pretty');
    }
    knex.destroy();
    console.log('Done.')

});

