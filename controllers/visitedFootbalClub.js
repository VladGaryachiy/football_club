
let nodemailer = require("nodemailer");
let pg = require('pg');
let connect = "postgres://eduonix:1111@localhost/football";


/*let smtpTransport = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: "gmc.motors.ua@gmail.com",
        pass: "gmcmotors12345"
    }
});*/

module.exports = function (req,res) {
    req;

    let id = req.body.id;
    let name = req.body.name;
    let amount_places = req.body.amount_places;

      pg.connect(connect,function (err,client,done) {
          if(err){
              return console.error('Error',err);
          }
          client.query("UPDATE  coaches SET amount_places_in_group = $1 WHERE coach_id=$2",
              [amount_places, id]);
      });

      res.status(200).json({success:"GOOD"});









    /*
        if(error.length>0){
            res.status(500).json({error:error})
        }
        else{
            res.status(200).json({success:success});
            let message = "Доброго дня " + name + " !\nВи подали заявку для участі в тест-драйві на автомобілі " + carName +
                " (Привід: " +drive+') ! \nВаша заявка була схвалена керівництвом, тож приходьте в центральний офіс ' +
                'вашого міста ('+city+')  в дату та час яку ви вказали ('+date+')\n' +
                'Вам потрібно при собі мати документ що засвідчує вашу особу та документ на право керування транспортними засобами даної категорії !';
            let mailOptions={
                to : email,
                subject : "Замовлення тест-драйв",
                text : message
            };
            console.log(mailOptions);
            smtpTransport.sendMail(mailOptions, function(error, response){
                if(error){
                    console.log(error);
                    res.end("error");
                }else{
                    console.log("Message sent: " + response.message);
                    res.end("sent");
                }
            });
            };*/






    /* let mailOptions={
         to : req.body.email,
         subject : "My firs message",
         text : "This is message , hi good working"
     };
     console.log(mailOptions);
     smtpTransport.sendMail(mailOptions, function(error, response){
         if(error){
             console.log(error);
             res.end("error");
         }else{
             console.log("Message sent: " + response.message);
             res.end("sent");
         }
     });*/


};