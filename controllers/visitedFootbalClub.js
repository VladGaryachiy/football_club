
let nodemailer = require("nodemailer");
let pg = require('pg');
let connect = "postgres://eduonix:1111@localhost/football";


/*let smtpTransport = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: "Oleglarin123@gmail.com",
        pass: "190420qq"
    }
});*/

module.exports = function (req,res) {
    req;

    let id = req.body.id;
    let amount_places = req.body.amount_places;
    let coach_name = req.body.coach_name;
    let name_group = req.body.name_group;

    /*--client info--*/
    let name = req.body.name;
    let surname = req.body.surname;
    let age = req.body.age;
    let city = req.body.city;
    let phone = req.body.phone;
    let email = req.body.email;

    let success = []; let error = [];


    let vName;
    if(vName = /[0-9]/.test(name)){
        error.push({
            name:"name",
            message:"Неправильне ім'я",
            class:"error"
        })
    }
    else if(vName = /[A-Z]/i.test(name)){
        error.push({
            name:"name",
            message:"Допустима мова (укр, рос)",
            class:"error"
        })
    }
    else{
        success.push({
            name:"name",
            message:"Добре",
            class:"success"
        })
    }
    /*--------------------SURNAME-------------------*/

    let vSurname;

    if(vSurname = /[0-9]/.test(surname)){
        error.push({
            name:"surname",
            message:"Неправильний формат",
            class:"error"
        })
    }
    else if(vSurname = /[A-Z]/i.test(surname)){
        error.push({
            name:"surname",
            message:"Допустима мова (укр, рос)",
            class:"error"
        })
    }
    else{
        success.push({
            name:"surname",
            message:"Добре",
            class:"success"
        })
    }


    /*-----------------------PHONE-------------------------------*/

    let vPhone;
   if(vPhone = /[A-Z]/i.test(phone)){
        error.push({
            name:"phone",
            message:"Неправильний формат",
            class:"error"
        })
    }
    else if(vPhone = /^\+380\d{9}$/.test(phone)){
        success.push({
            name:"phone",
            message:"Добре",
            class:"success"
        })
    }
    else{
        error.push({
            name:"phone",
            message:"Непрвильний формат",
            class:"error"
        })

    }

    /*-----------------------EMAIL-------------------------------*/
    let vEmail;
    if(vEmail = /\w+@\w+\.\w{2,3}/.test(email)){
        success.push({
            name:"email",
            message:"Добре",
            class:"success"
        })
    }
    else{
        error.push({
            name:"email",
            message:"Непрвильний формат",
            class:"error"
        })

    }

    /*---------------------------City----------------------*/

    let vCity;
   if(vCity = /[0-9]/.test(city)){
        error.push({
            name:"city",
            message:"Непрвильний формат",
            class:"error"
        })
    }
    else{
        success.push({
            name:"city",
            message:"Добре",
            class:"success"
        })

    }


    /*----------------------Date--------------*/

    let vAge;
   if(vAge = /[A-Z]/i.test(age)){
        error.push({
            name:"date",
            message:"Непрвильний формат",
            class:"error"
        })
    }
    else{
        success.push({
            name:"date",
            message:"Добре",
            class:"success"
        })
    }


    if(error.length > 0){
        res.status(500).json({error:error})
    }
    else{
        res.status(200).json({success:success});

        pg.connect(connect,function (err,client,done) {
            if(err){
                return console.error('Error',err);
            }
            client.query("UPDATE  coaches SET amount_places_in_group = $1 WHERE coach_id=$2",
                [amount_places, id]);
        });

        /*let message = "Доброго дня " + name + ' ' + surname +" !\nВи подали анкету для участі в тренуваннях в Київський футбольній школі ДЮСШ 15" +
            "Група : " + name_group +'\nТренер: ' + coach_name+'\n'+name+' ми завпрошуємо вас на перше тренування в понеділок о 18-00, ми знаходимося ' +
            'за адресою м.Київ -  вул. Михайла Грушевського 15 \nМи чекаємо вас!)';
        let mailOptions={
            to : email,
            subject : "Запрошуємо на тренування",
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
        });*/

    }














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