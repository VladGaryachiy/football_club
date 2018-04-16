let React = require('react');
let ReactDOM = require('react-dom');

let Tween = require('rc-tween-one/lib/TweenOne');
let ScrollOverPack = require('rc-scroll-anim/lib/ScrollOverPack');

let childrenGroupCoach = [];
let teenagerGroupCoach = [];
let adultGroupCoach = [];

let AllCoaches = [];

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
    AllCoaches.push(result.result);
    result.result.forEach(item => {
        let child;
        if (child = /Юніори/.test(item.name_who_is_trained)) {
            childrenGroupCoach.push(item);
        }
    });
    result.result.forEach(item => {
        let tin;
        if (tin = /Підлітки/.test(item.name_who_is_trained)) {
            teenagerGroupCoach.push(item);
        }
    });
    result.result.forEach(item => {
        let adult;
        if (adult = /Дорослі/.test(item.name_who_is_trained)) {
            adultGroupCoach.push(item);
        }
    });
}

class PayTraining extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            selectedCoachChild: 0,
            selectedCoachTin: 0,
            selectedCoachAdult: 0

        };

        this.changeCoachChild = this.changeCoachChild.bind(this);
        this.changeCoachTin = this.changeCoachTin.bind(this);
        this.changeCoachAdult = this.changeCoachAdult.bind(this);
        this.clearState = this.clearState.bind(this);
        this.openSelectList = this.openSelectList.bind(this);
        this.submitTrainingForm = this.submitTrainingForm.bind(this);
    }
    submitTrainingForm(e) {
        e.preventDefault();

        let nameCoach = e.currentTarget[0].value;

        /*-----client info------*/

        let name = e.currentTarget[2].value;
        let surname = e.currentTarget[3].value;
        let age = e.currentTarget[4].value;
        let city = e.currentTarget[5].value;
        let phone = e.currentTarget[6].value;
        let email = e.currentTarget[7].value;

        let searchId = AllCoaches[0].filter(item => {
            return item.name === nameCoach;
        });
        let id_coach = searchId[0].coach_id;
        let name_group = searchId[0].name_who_is_trained;

        let result = Number(searchId[0].amount_places_in_group - 1);

        let exportData = {
            'id': id_coach,
            'amount_places': result,
            'coach_name': nameCoach,
            'name_group': name_group,
            'name': name,
            'surname': surname,
            'age': age,
            'city': city,
            'phone': phone,
            'email': email
        };

        if (result < 0) {
            $('.result-container').text('Вибачте, набір групи вже завершився ');
            $('.result-container').toggleClass('error');

            setTimeout(function () {

                $('.result-container').removeClass('error');
                $('.result-container').text('');
            }, 3000);

            return false;
        } else if (name === "" || surname === "" || age === "" || phone === "" || email === "" || city === "") {
            $('.result-container').text('Заповніть форму');
            $('.result-container').toggleClass('error');

            setTimeout(function () {

                $('.result-container').removeClass('error');
                $('.result-container').text('');
            }, 3000);

            return false;
        } else {
            $.ajax({
                method: 'POST',
                url: '/formPayTrainingExportData',
                data: JSON.stringify(exportData),
                contentType: "application/json; charset=utf-8",
                cache: false,
                success: function (result) {

                    let promise = new Promise(function (success, error) {
                        $('.result-container').text('Дані успішно відправлені, всі подальші інструкції відправлені вам на пошту');
                        $('.result-container').toggleClass('success');
                        success('good');
                    });

                    let promise2 = promise.then(function (mes) {
                        console.log(mes);
                        return new Promise(function (success, error) {
                            setTimeout(function () {
                                $('.result-container').removeClass('success');
                                $('.result-container').text('');
                                success('done');
                            }, 1500);
                        });
                    });

                    promise2.then(function (mes) {
                        location.reload();
                    });
                },
                error: function (error) {
                    $('.result-container').text('Помилка відправки даних, провірте правильність оформлення заявки');
                    $('.result-container').toggleClass('error');

                    setTimeout(function () {

                        $('.result-container').removeClass('error');
                        $('.result-container').text('');
                    }, 4000);
                }
            });
        }
    }

    clearState(e) {
        this.setState({
            selectedCoachChild: 0,
            selectedCoachTin: 0,
            selectedCoachAdult: 0
        });
        let closeList = e.currentTarget.attributes[0].value;

        $('.' + closeList).css('display', 'none');
    }

    changeCoachChild(e) {
        let coachName = e.currentTarget.childNodes[1].innerHTML; //selected coach
        let places = AllCoaches[0].filter(item => {
            return item.name === coachName;
        });

        this.setState({
            selectedCoachChild: places[0].amount_places_in_group
        });
        document.getElementById('select1').value = coachName;
        /*  $('#select1').val(coachName);*/
        $('.coach_list').css('display', 'none');
    }
    changeCoachTin(e) {
        let coachName = e.currentTarget.childNodes[1].innerHTML; //selected coach
        let places = AllCoaches[0].filter(item => {
            return item.name === coachName;
        });

        this.setState({
            selectedCoachTin: places[0].amount_places_in_group
        });

        document.getElementById('select2').value = coachName;
        /*  $('#select1').val(coachName);*/
        $('.coach_list').css('display', 'none');
    }
    changeCoachAdult(e) {
        let coachName = e.currentTarget.childNodes[1].innerHTML; //selected coach
        let places = AllCoaches[0].filter(item => {
            return item.name === coachName;
        });

        this.setState({
            selectedCoachAdult: places[0].amount_places_in_group
        });

        document.getElementById('select3').value = coachName;
        /*  $('#select1').val(coachName);*/
        $('.coach_list').css('display', 'none');
    }

    openSelectList(e) {
        let selectName = e.currentTarget.parentElement.parentElement.nextSibling.attributes[0].value;
        $('.' + selectName).css('display', 'block');
    }

    render() {
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
                    { className: 'pay_training_main_container' },
                    React.createElement(
                        'h1',
                        { className: 'pay_training-main-name' },
                        '\u0417\u0430\u043F\u0438\u0441\u0430\u0442\u0438\u0441\u044F \u043D\u0430 \u0442\u0440\u0435\u043D\u0443\u0432\u0430\u043D\u043D\u044F'
                    ),
                    React.createElement(
                        'h2',
                        { className: 'pay_training_check_name' },
                        '\u0429\u043E\u0431 \u043F\u043E\u0442\u0440\u0430\u043F\u0438\u0442\u0438 \u043D\u0430 \u0442\u0440\u0435\u043D\u0443\u0432\u0430\u043D\u043D\u044F \u0432 \u043A\u043E\u043C\u0430\u043D\u0434\u0443 \u0437\u0430\u043F\u043E\u0432\u043D\u0456\u0442\u044C \u0444\u043E\u0440\u043C\u0443 \u044F\u043A\u0430 \u0432\u0456\u0434\u043F\u043E\u0432\u0456\u0434\u0430\u0454 \u0432\u0430\u0448\u0456\u0439 \u043A\u0430\u0442\u0435\u0433\u043E\u0440\u0456\u0457'
                    ),
                    React.createElement(
                        'div',
                        { className: 'pay_training_open_forms_main_container container ' },
                        React.createElement(
                            'div',
                            { className: 'row' },
                            React.createElement(
                                'div',
                                { className: 'col-md-4 p_training_first_form_container' },
                                React.createElement(
                                    'h3',
                                    { className: 'p_training_open_form_name' },
                                    childrenGroupCoach[0].name_who_is_trained
                                ),
                                React.createElement('img', { src: '../img/child.jpg', height: '300px', width: '300px', alt: '', className: 'p_training_open_first_form_img' }),
                                React.createElement(
                                    'p',
                                    { className: 'p_training_open_first_form_button_container' },
                                    React.createElement(
                                        'button',
                                        { className: 'p_training_button btn btn-primary', 'data-toggle': 'modal', 'data-target': '#first-form-modal' },
                                        '\u0417\u0430\u043F\u0438\u0441\u0430\u0442\u0438\u0441\u044F'
                                    )
                                )
                            ),
                            React.createElement(
                                'div',
                                { className: 'col-md-4 p_training_second_form_container' },
                                React.createElement(
                                    'h3',
                                    { className: 'p_training_open_form_name' },
                                    teenagerGroupCoach[0].name_who_is_trained
                                ),
                                React.createElement('img', { src: '../img/tin.jpg', height: '300px', width: '300px', alt: '', className: 'p_training_open_second_form_img' }),
                                React.createElement(
                                    'p',
                                    { className: 'p_training_open_second_form_button_container' },
                                    React.createElement(
                                        'button',
                                        { className: 'p_training_button btn btn-primary', 'data-toggle': 'modal', 'data-target': '#second-form-modal' },
                                        '\u0417\u0430\u043F\u0438\u0441\u0430\u0442\u0438\u0441\u044F'
                                    )
                                )
                            ),
                            React.createElement(
                                'div',
                                { className: 'col-md-4 p_training_third_form_container' },
                                React.createElement(
                                    'h3',
                                    { className: 'p_training_open_form_name' },
                                    adultGroupCoach[0].name_who_is_trained
                                ),
                                React.createElement('img', { src: '../img/adult.jpg', height: '300px', width: '300px', alt: '', className: 'p_training_open_third_form_img' }),
                                React.createElement(
                                    'p',
                                    { className: 'p_training_open_third_form_button_container' },
                                    React.createElement(
                                        'button',
                                        { className: 'p_training_button btn btn-primary', 'data-toggle': 'modal', 'data-target': '#third-form-modal' },
                                        '\u0417\u0430\u043F\u0438\u0441\u0430\u0442\u0438\u0441\u044F'
                                    )
                                )
                            )
                        )
                    ),
                    React.createElement('span', null)
                )
            ),
            React.createElement(
                'div',
                { className: 'modal fade', id: 'first-form-modal', tabIndex: '-1', role: 'dialog', 'aria-labelledby': 'formModalLabel' },
                React.createElement(
                    'div',
                    { className: 'modal-dialog' },
                    React.createElement(
                        'div',
                        { id: 'modal', className: 'modal-content container pay_training_main_forms_container ' },
                        React.createElement(
                            'div',
                            { className: 'row' },
                            React.createElement(
                                'div',
                                { className: 'col-md-12 col-sm-12 col-xs-12 ' },
                                React.createElement(
                                    'h1',
                                    { className: 'age-category' },
                                    '\u0412\u0456\u043A\u043E\u0432\u0430 \u043A\u0430\u0442\u0435\u0433\u043E\u0440\u0456\u044F: ',
                                    childrenGroupCoach[0].name_who_is_trained
                                ),
                                React.createElement('div', { className: 'result-container' }),
                                React.createElement(
                                    'form',
                                    { onSubmit: this.submitTrainingForm, action: '/formPayTrainingExportData', method: 'post', className: 'modal-go-to-training-form' },
                                    React.createElement(
                                        'p',
                                        { className: 'form_check_coach_name' },
                                        '\u041E\u0431\u0435\u0440\u0456\u0442\u044C \u0442\u0440\u0435\u043D\u0435\u0440\u0430 ',
                                        React.createElement(
                                            'span',
                                            { className: 'needs' },
                                            '*'
                                        )
                                    ),
                                    React.createElement(
                                        'div',
                                        { className: 'list_container' },
                                        React.createElement(
                                            'div',
                                            { className: 'input-group' },
                                            React.createElement('input', { type: 'text', defaultValue: childrenGroupCoach[0].name, readOnly: true, id: 'select1', className: 'choice-coach-form form-control form-control-2' }),
                                            React.createElement(
                                                'span',
                                                { className: 'input-group-btn' },
                                                React.createElement(
                                                    'button',
                                                    { onClick: this.openSelectList, className: 'open-list-but btn btn-default', type: 'button' },
                                                    '\u25BC'
                                                )
                                            )
                                        ),
                                        React.createElement(
                                            'ul',
                                            { className: 'coach_list ' },
                                            childrenGroupCoach.map((item, i) => React.createElement(
                                                'li',
                                                { key: i, onClick: this.changeCoachChild, className: ' form-control element-select-list' },
                                                React.createElement(
                                                    'div',
                                                    { className: 'face-coach' },
                                                    React.createElement('img', { src: item.face_coach, alt: '', className: "img-face-coach face" + item.coach_id })
                                                ),
                                                React.createElement(
                                                    'div',
                                                    { className: 'list-coach-name-container' },
                                                    item.name
                                                )
                                            ))
                                        )
                                    ),
                                    React.createElement(
                                        'p',
                                        { className: 'amount_places_in_group' },
                                        this.state.selectedCoachChild !== 0 ? React.createElement(
                                            'span',
                                            null,
                                            '\u0417\u0430\u043B\u0438\u0448\u0438\u043B\u043E\u0441\u044C \u043C\u0456\u0441\u0446\u044C: ',
                                            this.state.selectedCoachChild
                                        ) : React.createElement('span', null)
                                    ),
                                    React.createElement('input', { type: 'text', name: 'name', className: 'form-control  form-control-2', placeholder: '\u0406\u043C\'\u044F' }),
                                    React.createElement('input', { type: 'text', name: 'surname', className: 'form-control  form-control-2', placeholder: '\u041F\u0440\u0456\u0437\u0432\u0438\u0449\u0435' }),
                                    React.createElement('input', { type: 'text', name: 'age', className: 'form-control  form-control-2', placeholder: '\u0412\u0456\u043A' }),
                                    React.createElement('input', { type: 'text', name: 'city', className: 'form-control  form-control-2', placeholder: '\u041C\u0456\u0441\u0442\u043E' }),
                                    React.createElement('input', { type: 'text', name: 'phone', className: 'form-control  form-control-2', placeholder: '\u0422\u0435\u043B\u0435\u0444\u043E\u043D' }),
                                    React.createElement('input', { type: 'text', name: 'email', className: 'form-control  form-control-2', placeholder: 'Email' }),
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
            ),
            React.createElement(
                'div',
                { className: 'modal fade', id: 'second-form-modal', tabIndex: '-1', role: 'dialog', 'aria-labelledby': 'formModalLabel' },
                React.createElement(
                    'div',
                    { className: 'modal-dialog' },
                    React.createElement(
                        'div',
                        { className: 'modal-content container pay_training_main_forms_container ' },
                        React.createElement(
                            'div',
                            { className: 'row' },
                            React.createElement(
                                'div',
                                { className: 'col-md-12 col-sm-12 col-xs-12 ' },
                                React.createElement(
                                    'h1',
                                    { className: 'age-category' },
                                    '\u0412\u0456\u043A\u043E\u0432\u0430 \u043A\u0430\u0442\u0435\u0433\u043E\u0440\u0456\u044F: ',
                                    teenagerGroupCoach[0].name_who_is_trained
                                ),
                                React.createElement('div', { className: 'result-container' }),
                                React.createElement(
                                    'form',
                                    { onSubmit: this.submitTrainingForm, action: '/formPayTrainingExportData', method: 'post', className: 'modal-go-to-training-form' },
                                    React.createElement(
                                        'p',
                                        { className: 'form_check_coach_name' },
                                        '\u041E\u0431\u0435\u0440\u0456\u0442\u044C \u0442\u0440\u0435\u043D\u0435\u0440\u0430',
                                        React.createElement(
                                            'span',
                                            { className: 'needs' },
                                            '*'
                                        )
                                    ),
                                    React.createElement(
                                        'div',
                                        { className: 'list_container' },
                                        React.createElement(
                                            'div',
                                            { className: 'input-group' },
                                            React.createElement('input', { type: 'text', defaultValue: teenagerGroupCoach[0].name, readOnly: true, id: 'select2', className: 'choice-coach-form form-control form-control-2' }),
                                            React.createElement(
                                                'span',
                                                { className: 'input-group-btn' },
                                                React.createElement(
                                                    'button',
                                                    { onClick: this.openSelectList, className: 'open-list-but btn btn-default', type: 'button' },
                                                    '\u25BC'
                                                )
                                            )
                                        ),
                                        React.createElement(
                                            'ul',
                                            { className: 'coach_list ' },
                                            teenagerGroupCoach.map((item, i) => React.createElement(
                                                'li',
                                                { key: i, onClick: this.changeCoachTin, className: ' form-control element-select-list' },
                                                React.createElement(
                                                    'div',
                                                    { className: 'face-coach' },
                                                    React.createElement('img', { src: item.face_coach, alt: '', className: "img-face-coach face" + item.coach_id })
                                                ),
                                                React.createElement(
                                                    'div',
                                                    { className: 'list-coach-name-container' },
                                                    item.name
                                                )
                                            ))
                                        )
                                    ),
                                    React.createElement(
                                        'p',
                                        { className: 'amount_places_in_group' },
                                        this.state.selectedCoachTin !== 0 ? React.createElement(
                                            'span',
                                            null,
                                            '\u0417\u0430\u043B\u0438\u0448\u0438\u043B\u043E\u0441\u044C \u043C\u0456\u0441\u0446\u044C: ',
                                            this.state.selectedCoachTin
                                        ) : React.createElement('span', null)
                                    ),
                                    React.createElement('input', { type: 'text', name: 'name', className: 'form-control  form-control-2', placeholder: '\u0406\u043C\'\u044F' }),
                                    React.createElement('input', { type: 'text', name: 'surname', className: 'form-control  form-control-2', placeholder: '\u041F\u0440\u0456\u0437\u0432\u0438\u0449\u0435' }),
                                    React.createElement('input', { type: 'text', name: 'age', className: 'form-control  form-control-2', placeholder: '\u0412\u0456\u043A' }),
                                    React.createElement('input', { type: 'text', name: 'city', className: 'form-control  form-control-2', placeholder: '\u041C\u0456\u0441\u0442\u043E' }),
                                    React.createElement('input', { type: 'text', name: 'phone', className: 'form-control  form-control-2', placeholder: '\u0422\u0435\u043B\u0435\u0444\u043E\u043D' }),
                                    React.createElement('input', { type: 'text', name: 'email', className: 'form-control  form-control-2', placeholder: 'Email' }),
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
            ),
            React.createElement(
                'div',
                { className: 'modal fade', id: 'third-form-modal', tabIndex: '-1', role: 'dialog', 'aria-labelledby': 'formModalLabel' },
                React.createElement(
                    'div',
                    { className: 'modal-dialog' },
                    React.createElement(
                        'div',
                        { className: 'modal-content container pay_training_main_forms_container ' },
                        React.createElement(
                            'div',
                            { className: 'row' },
                            React.createElement(
                                'div',
                                { className: 'col-md-12 col-sm-12 col-xs-12 ' },
                                React.createElement(
                                    'h1',
                                    { className: 'age-category' },
                                    '\u0412\u0456\u043A\u043E\u0432\u0430 \u043A\u0430\u0442\u0435\u0433\u043E\u0440\u0456\u044F: ',
                                    adultGroupCoach[0].name_who_is_trained
                                ),
                                React.createElement('div', { className: 'result-container' }),
                                React.createElement(
                                    'form',
                                    { onSubmit: this.submitTrainingForm, action: '/formPayTrainingExportData', method: 'post', className: 'modal-go-to-training-form' },
                                    React.createElement(
                                        'p',
                                        { className: 'form_check_coach_name' },
                                        '\u041E\u0431\u0435\u0440\u0456\u0442\u044C \u0442\u0440\u0435\u043D\u0435\u0440\u0430 ',
                                        React.createElement(
                                            'span',
                                            { className: 'needs' },
                                            '*'
                                        )
                                    ),
                                    React.createElement(
                                        'div',
                                        { className: 'list_container' },
                                        React.createElement(
                                            'div',
                                            { className: 'input-group' },
                                            React.createElement('input', { type: 'text', defaultValue: adultGroupCoach[0].name, readOnly: true, id: 'select3', className: 'choice-coach-form form-control form-control-2' }),
                                            React.createElement(
                                                'span',
                                                { className: 'input-group-btn' },
                                                React.createElement(
                                                    'button',
                                                    { onClick: this.openSelectList, className: 'open-list-but btn btn-default', type: 'button' },
                                                    '\u25BC'
                                                )
                                            )
                                        ),
                                        React.createElement(
                                            'ul',
                                            { className: 'coach_list ' },
                                            adultGroupCoach.map((item, i) => React.createElement(
                                                'li',
                                                { key: i, onClick: this.changeCoachAdult, className: ' form-control element-select-list' },
                                                React.createElement(
                                                    'div',
                                                    { className: 'face-coach' },
                                                    React.createElement('img', { src: item.face_coach, alt: '', className: "img-face-coach face" + item.coach_id })
                                                ),
                                                React.createElement(
                                                    'div',
                                                    { className: 'list-coach-name-container' },
                                                    item.name
                                                )
                                            ))
                                        )
                                    ),
                                    React.createElement(
                                        'p',
                                        { className: 'amount_places_in_group' },
                                        this.state.selectedCoachAdult !== 0 ? React.createElement(
                                            'span',
                                            null,
                                            '\u0417\u0430\u043B\u0438\u0448\u0438\u043B\u043E\u0441\u044C \u043C\u0456\u0441\u0446\u044C: ',
                                            this.state.selectedCoachAdult
                                        ) : React.createElement('span', null)
                                    ),
                                    React.createElement('input', { type: 'text', name: 'name', className: 'form-control  form-control-2', placeholder: '\u0406\u043C\'\u044F' }),
                                    React.createElement('input', { type: 'text', name: 'surname', className: 'form-control  form-control-2', placeholder: '\u041F\u0440\u0456\u0437\u0432\u0438\u0449\u0435' }),
                                    React.createElement('input', { type: 'text', name: 'age', className: 'form-control  form-control-2', placeholder: '\u0412\u0456\u043A' }),
                                    React.createElement('input', { type: 'text', name: 'city', className: 'form-control  form-control-2', placeholder: '\u041C\u0456\u0441\u0442\u043E' }),
                                    React.createElement('input', { type: 'text', name: 'phone', className: 'form-control  form-control-2', placeholder: '\u0422\u0435\u043B\u0435\u0444\u043E\u043D' }),
                                    React.createElement('input', { type: 'text', name: 'email', className: 'form-control  form-control-2', placeholder: 'Email' }),
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

module.exports.PayTraining = PayTraining;
