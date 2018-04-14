
let pg = require('pg');
let connect = "postgres://eduonix:1111@localhost/football";

module.exports = function (req,res) {


    pg.connect(connect,function (err,client,done) {
        if(err){
            return console.error('Error',err);
        }
        client.query(
            'SELECT * FROM coaches JOIN sport_title ON coaches.id_sport_title =  sport_title.id\n' +
            'JOIN who_is_trained ON coaches.id_who_is_trained = who_is_trained.id',function (err,result) {
                if(err){
                    return console.error('Error',err);
                }

                res.status(200).json({result:result.rows});

                done();


            })
    });


};