let React = require('react');
let ReactDOM = require('react-dom');

let Tween = require('rc-tween-one/lib/TweenOne');
let ScrollOverPack = require('rc-scroll-anim/lib/ScrollOverPack');

class Home extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return React.createElement(
            React.Fragment,
            null,
            React.createElement(
                'div',
                { className: 'home-page-main-container' },
                React.createElement(
                    'h1',
                    { className: 'home-main-name' },
                    '\u041A\u0438\u0457\u0432\u0441\u044C\u043A\u0430 \u0444\u0443\u0442\u0431\u043E\u043B\u044C\u043D\u0430 \u0448\u043A\u043E\u043B\u0430 ',
                    React.createElement(
                        'span',
                        { className: 'school-bold-name' },
                        '\xAB\u0414\u042E\u0421\u0428-15\xBB'
                    )
                )
            ),
            React.createElement(
                'div',
                { className: 'about-school-main-container' },
                React.createElement(
                    'div',
                    { className: 'about-school-main-name' },
                    '\u041F\u0440\u043E \u043D\u0430\u0441'
                ),
                React.createElement(
                    'div',
                    { className: 'about-school container' },
                    React.createElement(
                        'div',
                        { className: 'row' },
                        React.createElement(
                            ScrollOverPack,
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
                                    }
                                },
                                React.createElement(
                                    'div',
                                    { className: 'col-md-6 col-sm-6 col-xs-6 text-container' },
                                    React.createElement(
                                        'p',
                                        { className: 'about-school-text' },
                                        '\u0414\u042E\u0421\u0428  \u211615 \u043C. \u041A\u0438\u0457\u0432 - \u0446\u0435 \u0434\u0435\u0440\u0436\u0430\u0432\u043D\u0438\u0439 \u043F\u043E\u0437\u0430\u0448\u043A\u0456\u043B\u044C\u043D\u0438\u0439 \u043D\u0430\u0432\u0447\u0430\u043B\u044C\u043D\u0438\u0439 \u0437\u0430\u043A\u043B\u0430\u0434 \u0441\u043F\u043E\u0440\u0442\u0438\u0432\u043D\u043E\u0433\u043E \u043F\u0440\u043E\u0444\u0456\u043B\u044E, \u0437\u0430\u0441\u043D\u043E\u0432\u0430\u043D\u0438\u0439 \u0432 1992 \u0440\u043E\u0446\u0456. \u0413\u043E\u043B\u043E\u0432\u043D\u0438\u0439 \u0430\u0434\u043C\u0456\u043D\u0456\u0441\u0442\u0440\u0430\u0442\u0438\u0432\u043D\u0438\u0439 \u043A\u043E\u0440\u043F\u0443\u0441 \u0437\u043D\u0430\u0445\u043E\u0434\u0438\u0442\u044C\u0441\u044F \u0437\u0430 \u0430\u0434\u0440\u0435\u0441\u043E\u044E: \u043C.\u041A\u0438\u0457\u0432, \u0432\u0443\u043B. \u042F\u043A\u0443\u0431\u043E\u0432\u0441\u044C\u043A\u043E\u0433\u043E, 7-\u0410.\u0412 \u0414\u042E\u0421\u0428-15 \u043F\u0440\u043E\u0432\u043E\u0434\u0438\u0442\u044C\u0441\u044F \u043F\u0456\u0434\u0433\u043E\u0442\u043E\u0432\u043A\u0430 \u0437 \u0444\u0443\u0442\u0431\u043E\u043B\u0443. \u041F\u0456\u0434\u0442\u0440\u0438\u043C\u0430\u043D\u043D\u044F \u0442\u0430 \u0435\u043A\u0441\u043F\u043B\u0443\u0430\u0442\u0430\u0446\u0456\u044F \u0441\u043F\u043E\u0440\u0442\u0438\u0432\u043D\u043E\u0457 \u0431\u0430\u0437\u0438 \u0437\u0434\u0456\u0439\u0441\u043D\u044E\u0454\u0442\u044C\u0441\u044F \u0437\u0430 \u0440\u0430\u0445\u0443\u043D\u043E\u043A \u0444\u0456\u043D\u0430\u043D\u0441\u0443\u0432\u0430\u043D\u043D\u044F \u0448\u043A\u043E\u043B\u0438 \u0437 \u0431\u044E\u0434\u0436\u0435\u0442\u0443 \u0413\u043E\u043B\u043E\u0441\u0456\u0457\u0432\u0441\u044C\u043A\u043E\u0433\u043E \u0440\u0430\u0439\u043E\u043D\u0443 \u043C. \u041A\u0438\u0454\u0432\u0430, \u043D\u0430\u0434\u0445\u043E\u0434\u0436\u0435\u043D\u044C \u0437 \u043E\u0440\u0435\u043D\u0434\u0438 \u043D\u0435\u0436\u0438\u0442\u043B\u043E\u0432\u0438\u0445 \u043F\u0440\u0438\u043C\u0456\u0449\u0435\u043D\u044C \u0442\u0430 \u0431\u043B\u0430\u0433\u043E\u0434\u0456\u0439\u043D\u0438\u0445 \u0432\u043D\u0435\u0441\u043A\u0456\u0432 \u0441\u043F\u043E\u043D\u0441\u043E\u0440\u0456\u0432. \u041E\u0441\u0442\u0430\u043D\u043D\u0456\u043C \u0447\u0430\u0441\u043E\u043C \u0434\u0435\u0440\u0436\u0430\u0432\u043D\u0435 \u0444\u0456\u043D\u0430\u043D\u0441\u0443\u0432\u0430\u043D\u043D\u044F \u0441\u043F\u043E\u0440\u0442\u0443 \u0432\u043A\u0440\u0430\u0439 \u043D\u0435\u0441\u0442\u0430\u0431\u0456\u043B\u044C\u043D\u0435, \u0449\u043E \u0443\u0441\u043A\u043B\u0430\u0434\u043D\u044E\u0454 \u043F\u0456\u0434\u0433\u043E\u0442\u043E\u0432\u043A\u0443 \u0441\u043F\u043E\u0440\u0442\u0441\u043C\u0435\u043D\u0456\u0432. \u0421\u043F\u043E\u0440\u0442\u0438\u0432\u043D\u0456 \u0437\u0430\u043B\u0438 \u0421\u0428 \u2116 220, \u2116 227 \u0442\u0430 \u2116 260 \u0432\u0438\u043A\u043E\u0440\u0438\u0441\u0442\u043E\u0432\u0443\u044E\u0442\u044C\u0441\u044F \u0434\u043B\u044F \u0442\u0440\u0435\u043D\u0443\u0432\u0430\u043D\u044C \u0434\u0456\u0442\u0435\u0439, \u044E\u043D\u0430\u043A\u0456\u0432 \u0442\u0430 \u043C\u043E\u043B\u043E\u0434\u0456 \u0443\u0437\u0438\u043C\u043A\u0443. \u0428\u043A\u043E\u043B\u0430 \u043C\u0430\u0454 \u0443 \u0441\u0432\u043E\u0454\u043C\u0443 \u0440\u043E\u0437\u043F\u043E\u0440\u044F\u0434\u0436\u0435\u043D\u043D\u0456 \u0433\u0443\u0440\u0442\u043E\u0436\u0438\u0442\u043E\u043A, \u0434\u0435 \u043C\u0435\u0448\u043A\u0430\u044E\u0442\u044C \u0434\u0456\u0442\u0438 \u0437 \u0456\u043D\u0448\u0438\u0445 \u0440\u0435\u0433\u0456\u043E\u043D\u0456\u0432 \u0423\u043A\u0440\u0430\u0457\u043D\u0438.'
                                    )
                                ),
                                React.createElement(
                                    'div',
                                    { className: 'col-md-6 col-sm-6 col-xs-6 img-container-about-school' },
                                    React.createElement('img', { src: '../img/logo-test.png', alt: '', className: 'home-main-logo' })
                                )
                            )
                        ),
                        React.createElement('br', null),
                        React.createElement('br', null),
                        React.createElement('br', null),
                        React.createElement('br', null),
                        React.createElement('br', null),
                        React.createElement('br', null),
                        React.createElement('br', null),
                        React.createElement('br', null),
                        React.createElement('br', null),
                        React.createElement('br', null),
                        React.createElement('br', null),
                        React.createElement('br', null),
                        React.createElement('br', null),
                        React.createElement('br', null),
                        React.createElement('br', null),
                        React.createElement('br', null),
                        React.createElement('br', null),
                        React.createElement(
                            ScrollOverPack,
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
                                    }
                                },
                                React.createElement(
                                    'div',
                                    { className: 'col-md-12 col-sm-12 col-xs-12' },
                                    React.createElement(
                                        'p',
                                        { className: 'why-me-school-main-name' },
                                        '\u0427\u043E\u043C\u0443 \u0441\u0430\u043C\u0435 \u043C\u0438?'
                                    )
                                ),
                                React.createElement(
                                    'h1',
                                    { className: 'our-main-mission' },
                                    '\u041D\u0430\u0448\u0430 \u0433\u043E\u043B\u043E\u0432\u043D\u0430 \u043C\u0435\u0442\u0430 - \u0440\u043E\u0437\u0432\u0438\u0442\u043E\u043A \u0434\u0438\u0442\u044F\u0447\u043E\u0433\u043E \u0442\u0430 \u044E\u043D\u0430\u0446\u044C\u043A\u043E\u0433\u043E \u0444\u0443\u0442\u0431\u043E\u043B\u0443, \u0430 \u0442\u0430\u043A\u043E\u0436 \u043F\u0456\u0434\u0433\u043E\u0442\u043E\u0432\u043A\u0430 \u043C\u043E\u043B\u043E\u0434\u0438\u0445 \u0444\u0443\u0442\u0431\u043E\u043B\u0456\u0441\u0442\u0456\u0432.'
                                ),
                                React.createElement(
                                    'div',
                                    { className: 'col-md-3  col-sm-6 col-xs-6 features-part' },
                                    React.createElement(
                                        'div',
                                        { className: 'features-container-img' },
                                        React.createElement('img', { src: '../img/coach.jpg', alt: '', className: 'features-img' })
                                    ),
                                    React.createElement(
                                        'p',
                                        { className: 'name-features' },
                                        '\u0414\u043E\u0441\u0432\u0456\u0434\u0447\u0435\u043D\u0456 \u0442\u0440\u0435\u043D\u0435\u0440\u0438'
                                    ),
                                    React.createElement(
                                        'p',
                                        { className: 'about-features' },
                                        '\u041C\u0438 \u0432\u0438\u043A\u043E\u0440\u0438\u0441\u0442\u043E\u0432\u0443\u0435\u043C\u043E \u0441\u0443\u0447\u0430\u0441\u043D\u0456 \u043C\u0435\u0442\u043E\u0434\u0438 \u043E\u0440\u0433\u0430\u043D\u0456\u0437\u0430\u0446\u0456\u0457 \u0442\u0440\u0435\u043D\u0443\u0432\u0430\u043B\u044C\u043D\u043E\u0433\u043E \u043F\u0440\u043E\u0446\u0435\u0441\u0443 \u0456 \u043F\u043E\u0434\u0433\u043E\u0442\u043E\u0432\u043A\u0438 \u0434\u0456\u0442\u0435\u0439.'
                                    )
                                ),
                                React.createElement(
                                    'div',
                                    { className: 'col-md-3 col-sm-6 col-xs-6 features-part' },
                                    React.createElement(
                                        'div',
                                        { className: 'features-container-img' },
                                        React.createElement('img', { src: '../img/competition.jpg', alt: '', className: 'features-img' })
                                    ),
                                    React.createElement(
                                        'p',
                                        { className: 'name-features' },
                                        '\u0423\u0447\u0430\u0441\u0442\u044C \u0443 \u0437\u043C\u0430\u0433\u0430\u043D\u043D\u044F\u0445'
                                    ),
                                    React.createElement(
                                        'p',
                                        { className: 'about-features' },
                                        '\u041D\u0430\u0448\u0456 \u043A\u043E\u043C\u0430\u043D\u0434\u0438 \u043F\u043E\u0441\u0442\u0456\u0439\u043D\u043E \u0431\u0435\u0440\u0443\u0442\u044C \u0443\u0447\u0430\u0441\u0442\u044C \u0443 \u0437\u043C\u0430\u0433\u0430\u043D\u043D\u044F\u0445 \u0440\u0456\u0437\u043D\u043E\u0433\u043E \u0440\u0456\u0432\u043D\u044F \u044F\u043A \u0432 \u0423\u043A\u0440\u0430\u0457\u043D\u0456, \u0442\u0430\u043A \u0456 \u0437\u0430 \u043A\u043E\u0440\u0434\u043E\u043D\u043E\u043C.'
                                    )
                                ),
                                React.createElement(
                                    'div',
                                    { className: 'col-md-3 col-sm-6 col-xs-6 features-part' },
                                    React.createElement(
                                        'div',
                                        { className: 'features-container-img' },
                                        React.createElement('img', { src: '../img/tactic.jpg', alt: '', className: 'features-img' })
                                    ),
                                    React.createElement(
                                        'p',
                                        { className: 'name-features' },
                                        '\u0422\u0430\u043A\u0442\u0438\u0447\u043D\u0430 \u043F\u0456\u0434\u0433\u043E\u0442\u043E\u0432\u043A\u0430'
                                    ),
                                    React.createElement(
                                        'p',
                                        { className: 'about-features' },
                                        '\u041C\u0438 \u043D\u0430\u0432\u0447\u0430\u0454\u043C\u043E \u0434\u0456\u0442\u0435\u0439 \u0444\u0443\u0442\u0431\u043E\u043B\u044C\u043D\u043E\u0457 \u0442\u0430\u043A\u0442\u0438\u043A\u0438, \u0432\u0447\u0438\u043C\u043E \u0440\u043E\u0437\u0443\u043C\u0456\u0442\u0438 \u0456 \u0447\u0438\u0442\u0430\u0442\u0438 \u0433\u0440\u0443.'
                                    )
                                ),
                                React.createElement(
                                    'div',
                                    { className: 'col-md-3 col-sm-6 col-xs-6 features-part' },
                                    React.createElement(
                                        'div',
                                        { className: 'features-container-img' },
                                        React.createElement('img', { src: '../img/individual.jpg', alt: '', className: 'features-img' })
                                    ),
                                    React.createElement(
                                        'p',
                                        { className: 'name-features' },
                                        '\u0406\u043D\u0434\u0438\u0432\u0456\u0434\u0443\u0430\u043B\u044C\u043D\u0438\u0439 \u043F\u0456\u0434\u0445\u0456\u0434'
                                    ),
                                    React.createElement(
                                        'p',
                                        { className: 'about-features' },
                                        '\u041D\u0430\u043C\u0430\u0433\u0430\u0454\u043C\u043E\u0441\u044F \u0441\u0442\u0432\u043E\u0440\u0438\u0442\u0438 \u043A\u043E\u043C\u0444\u043E\u0440\u0442\u043D\u0456 \u0443\u043C\u043E\u0432\u0438 \u0442\u0440\u0435\u043D\u0443\u0432\u0430\u043D\u044C \u0434\u043B\u044F \u043A\u043E\u0436\u043D\u043E\u0457 \u0434\u0438\u0442\u0438\u043D\u0438. \u0412\u0440\u0430\u0445\u043E\u0432\u0443\u0454\u043C\u043E \u043D\u0430\u0432\u0430\u043D\u0442\u0430\u0436\u0435\u043D\u043D\u044F \u0432 \u0448\u043A\u043E\u043B\u0456 \u0442\u0430 \u0456\u043D\u0448\u0438\u0445 \u0441\u0435\u043A\u0446\u0456\u044F\u0445.'
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

module.exports.Home = Home;
