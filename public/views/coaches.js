let React = require('react');
let ReactDOM = require('react-dom');

let Tween = require('rc-tween-one/lib/TweenOne');
let ScrollOverPack = require('rc-scroll-anim/lib/ScrollOverPack');

let CoachesInfo = [];

(function () {
    $.ajax({
        url: '/CoachesData',
        method: 'GET',
        contentType: "application/json; charset=utf-8",
        cache: false,
        async: false,
        success: function (result) {
            dataParser(result);
        },
        error: function (error) {
            return error;
        }
    });
})();

function dataParser(result) {
    for (let i = 0; i < result.result.length; i++) {
        CoachesInfo.push(result.result[i]);
    }
}

class Coaches extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            coachInfo: [{
                name: '',
                surname: '',
                father_name: '',
                age: '',
                biography: '',
                coach_img: '',
                name_sport_title: '',
                name_who_is_trained: ''
            }]
        };

        this.CoachInfo = this.CoachInfo.bind(this);
    }

    CoachInfo(e) {
        let searchCoach = e.currentTarget.attributes[1].nodeValue;
        let foundCoach = CoachesInfo.filter(item => {
            return item.name === searchCoach;
        });

        this.setState({
            coachInfo: foundCoach
        });
    }

    render() {
        let allInfoCoach = this.state.coachInfo[0];
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
                    { className: 'coaches-main-container' },
                    React.createElement(
                        'h1',
                        { className: 'coaches-main-name' },
                        '\u0422\u0440\u0435\u043D\u0435\u0440\u0441\u044C\u043A\u0438\u0439 \u0441\u043A\u043B\u0430\u0434'
                    ),
                    React.createElement(
                        'div',
                        { className: 'container  coaches-cart-container' },
                        React.createElement(
                            'div',
                            { className: 'row' },
                            CoachesInfo.map((item, i) => React.createElement(
                                'div',
                                { className: 'col-md-4 col-sm-6 col-xs-6 cart-coach', key: i },
                                React.createElement(
                                    'div',
                                    { className: 'coaches-img-container' },
                                    React.createElement('img', { src: item.coach_img, className: "coach-cart-img coach_img" + i, alt: '' })
                                ),
                                React.createElement(
                                    'div',
                                    { className: 'coaches-name-container' },
                                    React.createElement(
                                        'h3',
                                        { className: 'coaches-full-name ' },
                                        item.surname,
                                        ' ',
                                        item.name,
                                        ' ',
                                        item.father_name
                                    )
                                ),
                                React.createElement(
                                    'div',
                                    { className: 'button-read-more-info-coaches-container' },
                                    React.createElement(
                                        'button',
                                        { onClick: this.CoachInfo, className: 'read-more-about-coach btn btn-primary', 'data-name': item.name, 'data-toggle': 'modal', 'data-target': '#formModal' },
                                        '\u0427\u0438\u0442\u0430\u0442\u0438 \u0431\u0456\u043B\u044C\u0448\u0435'
                                    )
                                )
                            ))
                        )
                    )
                )
            ),
            React.createElement(
                'div',
                { className: 'modal fade', id: 'formModal', tabIndex: '-1', role: 'dialog', 'aria-labelledby': 'formModalLabel' },
                React.createElement(
                    'div',
                    { className: 'modal-dialog' },
                    React.createElement(
                        'div',
                        { className: 'modal-content container  coach-about-main-container-in-modal' },
                        React.createElement(
                            'div',
                            { className: 'row' },
                            React.createElement(
                                'div',
                                { className: 'col-md-12 col-sm-12 col-xs-12 modal-img-container' },
                                React.createElement('img', { src: allInfoCoach.coach_img, alt: '', className: "modal-img individual-img-coach-id_" + allInfoCoach.coach_id }),
                                React.createElement(
                                    'div',
                                    { className: 'modal-characteristic-container' },
                                    React.createElement(
                                        'h1',
                                        { className: 'modal-coach-surname' },
                                        allInfoCoach.surname
                                    ),
                                    React.createElement(
                                        'div',
                                        { className: 'name_surname_container' },
                                        React.createElement(
                                            'h2',
                                            { className: 'modal-coach-name-and-father_name' },
                                            allInfoCoach.name,
                                            ' \xA0',
                                            allInfoCoach.father_name
                                        )
                                    ),
                                    React.createElement('p', { className: 'line' }),
                                    React.createElement(
                                        'div',
                                        { className: 'other_characteristic_container' },
                                        React.createElement(
                                            'h3',
                                            { className: 'modal-coach-age' },
                                            '\u0412\u0456\u043A: ',
                                            allInfoCoach.age
                                        ),
                                        React.createElement(
                                            'h3',
                                            { className: 'modal-coach-sport-title' },
                                            '\u0421\u043F\u043E\u0440\u0442\u0438\u0432\u043D\u0435 \u0437\u0432\u0430\u043D\u043D\u044F: ',
                                            allInfoCoach.name_sport_title
                                        ),
                                        React.createElement(
                                            'h3',
                                            { className: 'modal-coach-who-is-trained' },
                                            '\u041A\u043E\u0433\u043E \u0442\u0440\u0435\u043D\u0443\u0454: ',
                                            allInfoCoach.name_who_is_trained
                                        )
                                    ),
                                    React.createElement('p', { className: 'line' })
                                ),
                                React.createElement(
                                    'p',
                                    { className: 'modal-coach-biography' },
                                    allInfoCoach.biography
                                )
                            )
                        ),
                        React.createElement(
                            'button',
                            { type: 'button', className: 'btn btn-default exit', 'data-dismiss': 'modal' },
                            '\u0412\u0438\u0439\u0442\u0438'
                        )
                    )
                )
            )
        );
    }
}

module.exports.Coaches = Coaches;
