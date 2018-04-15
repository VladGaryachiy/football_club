let React = require('react');
let ReactDOM = require('react-dom');

let Tween = require('rc-tween-one/lib/TweenOne');
let ScrollOverPack = require('rc-scroll-anim/lib/ScrollOverPack');

class Contacts extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cartVisible: false
        };

        this.CartVisible = this.CartVisible.bind(this);
        this.sendMessage = this.sendMessage.bind(this);
    }
    CartVisible() {
        this.setState(prevState => ({
            cartVisible: !prevState.cartVisible
        }));
    }
    sendMessage(e) {
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
        if (this.state.cartVisible === true) {
            cart = React.createElement('iframe', { src: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2540.637460730217!2d30.532735815439455!3d50.447853179475075!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4ce52d23f0edd%3A0x45bd69e4cb11cdab!2z0LLRg9C70LjRhtGPINCc0LjRhdCw0LnQu9CwINCT0YDRg9GI0LXQstGB0YzQutC-0LPQviwgMTUsINCa0LjRl9CyLCAwMjAwMA!5e0!3m2!1sru!2sua!4v1523815452535', width: '600', height: '450', frameBorder: '0', style: { border: 0 }, allowFullScreen: true });
            display = "block";
        } else {
            cart = null;
            display = "none";
        }
        return React.createElement(
            React.Fragment,
            null,
            React.createElement(
                Tween,
                {
                    animation: {
                        type: 'from',
                        ease: 'easeOutQuart',
                        opacity: 0,
                        translateY: '300px',
                        duration: 900
                    } },
                React.createElement(
                    'div',
                    { className: 'contact-main-container' },
                    React.createElement(
                        'h1',
                        { className: 'contact-main-name' },
                        '\u041A\u043E\u043D\u0442\u0430\u043A\u0442\u043D\u0430 \u0456\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0456\u044F'
                    ),
                    React.createElement(
                        'p',
                        { className: 'contact-where-club' },
                        '\u041C\u0438 \u0437\u043D\u0430\u0445\u043E\u0434\u0435\u043C\u043E\u0441\u044F \u0437\u0430 \u0430\u0434\u0440\u0435\u0441\u043E\u044E: ',
                        React.createElement(
                            'span',
                            { className: 'bold-contact' },
                            '\u043C.\u041A\u0438\u0457\u0432 -  \u0432\u0443\u043B. \u041C\u0438\u0445\u0430\u0439\u043B\u0430 \u0413\u0440\u0443\u0448\u0435\u0432\u0441\u044C\u043A\u043E\u0433\u043E 15'
                        )
                    ),
                    React.createElement(
                        'p',
                        { className: 'contact-phone' },
                        '\u0422\u0435\u043B\u0435\u0444\u043E\u043D: ',
                        React.createElement(
                            'span',
                            { className: 'bold-contact' },
                            '+380632520173'
                        )
                    ),
                    React.createElement(
                        'p',
                        { className: 'contact-email' },
                        'Email: ',
                        React.createElement(
                            'span',
                            { className: 'bold-contact' },
                            'Oleglarin123@gmail.com'
                        )
                    ),
                    React.createElement(
                        'div',
                        { className: 'contact-button-group' },
                        React.createElement(
                            'button',
                            { className: 'write-message btn btn-primary', 'data-toggle': 'modal', 'data-target': '#message-form-modal' },
                            '\u041D\u0430\u043F\u0438\u0441\u0430\u0442\u0438 \u043D\u0430\u043C'
                        ),
                        React.createElement(
                            'button',
                            { onClick: this.CartVisible, className: 'show-cart btn btn-primary' },
                            '\u041F\u043E\u0434\u0438\u0432\u0438\u0442\u0438\u0441\u044F \u043D\u0430 \u043A\u0430\u0440\u0442\u0456'
                        )
                    ),
                    React.createElement(
                        'div',
                        { className: 'cart-container', style: { display: display } },
                        cart
                    )
                )
            ),
            React.createElement(
                'div',
                { className: 'modal fade', id: 'message-form-modal', tabIndex: '-1', role: 'dialog', 'aria-labelledby': 'formModalLabel' },
                React.createElement(
                    'div',
                    { className: 'modal-dialog' },
                    React.createElement(
                        'div',
                        { id: 'modal', className: 'modal-content container contact-modal-container ' },
                        React.createElement(
                            'div',
                            { className: 'row' },
                            React.createElement(
                                'div',
                                { className: 'col-md-12 col-sm-12 col-xs-12 ' },
                                React.createElement(
                                    'h1',
                                    { className: 'age-category' },
                                    '\u041D\u0430\u043F\u0438\u0441\u0430\u0442\u0438 \u043F\u043E\u0432\u0456\u0434\u043E\u043C\u043B\u0435\u043D\u043D\u044F:'
                                ),
                                React.createElement('div', { className: 'result-container' }),
                                React.createElement(
                                    'form',
                                    { onSubmit: this.sendMessage, action: '/send-user-message', method: 'post', className: '' },
                                    React.createElement('textarea', { className: 'message-block', placeholder: '\u0412\u0430\u0448\u0435 \u043F\u043E\u0432\u0456\u0434\u043E\u043C\u043B\u0435\u043D\u043D\u044F...' }),
                                    React.createElement(
                                        'div',
                                        { className: 'button-group' },
                                        React.createElement(
                                            'button',
                                            { type: 'submit', className: 'btn btn-success' },
                                            '\u041D\u0430\u0434\u0456\u0441\u043B\u0430\u0442\u0438'
                                        ),
                                        React.createElement(
                                            'button',
                                            { 'data-name-close-list': 'coach_list', type: 'button', className: 'btn btn-default ', 'data-dismiss': 'modal', onClick: this.clearState },
                                            '\u0412\u0438\u0439\u0442\u0438'
                                        ),
                                        ' '
                                    )
                                )
                            )
                        )
                    )
                )
            )
        );
    }
}

module.exports.Contacts = Contacts;
