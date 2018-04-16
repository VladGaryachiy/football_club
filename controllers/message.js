
let nodemailer = require("nodemailer");



let smtpTransport = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: "vladosikhot@gmail.com",
        pass: "popaaa12345"
    }
});

module.exports = function (req,res) {
    req;
    let message = req.body.message;


    let success = []; let error = [];



    if(message === ""){
        error.push({
            name:"name",
            message:"Повідомлення відсутнє",
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


    if(error.length > 0){
        res.status(500).json({error:error})
    }
    else{
        res.status(200).json({success:success});

        let mailOptions={
            to : "vladosikhot@gmail.com",
            subject : "Повідомлення від клієнта",
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








};