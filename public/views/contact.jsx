let React = require('react');
let ReactDOM = require('react-dom');

let Tween = require('rc-tween-one/lib/TweenOne');
let ScrollOverPack = require('rc-scroll-anim/lib/ScrollOverPack');





class Contacts extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            cartVisible:false
        };

        this.CartVisible = this.CartVisible.bind(this);
        this.sendMessage = this.sendMessage.bind(this);

    }
    CartVisible(){
        this.setState(prevState => ({
            cartVisible: !prevState.cartVisible
        }));
    }
    sendMessage(e){
        e.preventDefault();
        let message = e.currentTarget[0].value;

        let objMessage = {
            "message": message
        };

        $.ajax({
            method: 'POST',
            url: '/send-user-message',
            data: JSON.stringify(objMessage),
            contentType: "application/json; charset=utf-8",
            cache: false,
            success: function (result) {

                let promise = new Promise(function (success, error) {
                    $('.result-container').text('Повідомлення надіслано!');
                    $('.result-container').toggleClass('success');
                    success('good');
                });

               promise.then(function (mes) {
                    console.log(mes);
                        setTimeout(function () {
                            $('.result-container').removeClass('success');
                            $('.result-container').text('');
                            success('done');
                        }, 1500);
                });

            },
            error: function (error) {
                $('.result-container').text('Повідомлення відсутнє');
                $('.result-container').toggleClass('error');

                setTimeout(function () {

                    $('.result-container').removeClass('error');
                    $('.result-container').text('');
                }, 4000);
            }
        });


    }

    render() {
        let cart = null;
        let display;
        if(this.state.cartVisible === true){
            cart =  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2540.637460730217!2d30.532735815439455!3d50.447853179475075!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4ce52d23f0edd%3A0x45bd69e4cb11cdab!2z0LLRg9C70LjRhtGPINCc0LjRhdCw0LnQu9CwINCT0YDRg9GI0LXQstGB0YzQutC-0LPQviwgMTUsINCa0LjRl9CyLCAwMjAwMA!5e0!3m2!1sru!2sua!4v1523815452535" width="600" height="450" frameBorder="0" style={{border:0}} allowFullScreen></iframe>;
            display = "block";
        }
        else {
            cart = null;
            display = "none";
        }
        return (
           <React.Fragment>
               <Tween
                   animation={{
                       type: 'from',
                       ease: 'easeOutQuart',
                       opacity: 0 ,
                       translateY: '300px',
                       duration:900,
                   }}>
                   <div className="contact-main-container">
                       <h1 className="contact-main-name">
                           Контактна інформація
                       </h1>
                       <p className="contact-where-club">
                           Ми знаходемося за адресою: <span className="bold-contact">м.Київ -  вул. Михайла Грушевського 15</span>
                       </p>
                       <p className="contact-phone">
                           Телефон: <span className="bold-contact">+380632520173</span>
                       </p>
                       <p className="contact-email">
                           Email: <span className="bold-contact">Oleglarin123@gmail.com</span>
                       </p>
                       <div className="contact-button-group">
                           <button className="write-message btn btn-primary" data-toggle="modal" data-target="#message-form-modal">Написати нам</button>
                           <button onClick={this.CartVisible} className="show-cart btn btn-primary">Подивитися на карті</button>
                       </div>
                       <div className="cart-container" style={{display:display}}>
                           {cart}
                       </div>

                   </div>

               </Tween>

               <div className="modal fade" id="message-form-modal" tabIndex="-1" role="dialog" aria-labelledby="formModalLabel">
                   <div className="modal-dialog">
                       <div id="modal"  className="modal-content container contact-modal-container ">
                           <div className="row">
                               <div className="col-md-12 col-sm-12 col-xs-12 ">
                                   <h1 className="age-category">Написати повідомлення:</h1>
                                   <div className="result-container"></div>
                                   <form onSubmit={this.sendMessage} action="/send-user-message" method="post" className="">
                                       <textarea className="message-block" placeholder="Ваше повідомлення...">

                                       </textarea>
                                       <div className="button-group">
                                           <button type="submit" className="btn btn-success" >Надіслати</button>
                                           <button data-name-close-list="coach_list" type="button" className="btn btn-default " data-dismiss="modal" onClick={this.clearState}>Вийти</button> {/*clear state*/}
                                       </div>
                                   </form>
                               </div>
                           </div>
                       </div>
                   </div>
               </div>
           </React.Fragment>
        )
    }
}


module.exports.Contacts = Contacts;