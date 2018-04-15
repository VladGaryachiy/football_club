
let pg = require('pg');
let connect = "postgres://eduonix:1111@localhost/football";

module.exports = function (req,res) {


    pg.connect(connect,function (err,client,done) {
        if(err){
            return console.error('Error',err);
        }
        client.query(
            'SELECT * FROM videos',function (err,result) {
                if(err){
                    return console.error('Error',err);
                }

                res.status(200).json({result:result.rows});

                done();


            })
    });


};