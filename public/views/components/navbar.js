let React = require('react');
let Link = require('react-router-dom').Link;

class Navbar extends React.Component {
    constructor(props) {
        super(props);

        this.NavigationUp = this.NavigationUp.bind(this);
        this.NavigationOut = this.NavigationOut.bind(this);
        this.UpScroll = this.UpScroll.bind(this);
    }

    NavigationUp(event) {

        let el = event.currentTarget.parentElement.nextSibling.attributes[1].name;

        $('[' + el + ']').animate({
            width: "250px",
            opacity: 1

        }, 200, function () {
            console.log(el);
        });
    }

    NavigationOut(event) {
        let el = event.currentTarget.parentElement.nextSibling.attributes[1].name;
        $('[' + el + ']').animate({
            width: 0,
            opacity: 0
        }, 200);
    }
    UpScroll() {
        window.scrollTo(0, 0);
    }
    render() {
        return React.createElement(
            'div',
            { className: 'navbar-container-main' },
            React.createElement(
                'table',
                { className: 'navbar-table' },
                React.createElement(
                    'tbody',
                    { className: 'menu-links-container' },
                    React.createElement(
                        'tr',
                        null,
                        React.createElement(
                            'td',
                            { style: { verticalAlign: 'middle' } },
                            React.createElement(
                                'ul',
                                { className: 'menu-links-container' },
                                React.createElement(
                                    'li',
                                    { className: 'navbar-element first-element', onClick: this.UpScroll },
                                    React.createElement(
                                        Link,
                                        { to: '/', id: 'data-name-zero' },
                                        React.createElement(
                                            'span',
                                            { className: 'navbar-ico' },
                                            React.createElement('i', { onMouseOver: this.NavigationUp, onMouseOut: this.NavigationOut, className: 'fa fa-home' })
                                        ),
                                        React.createElement(
                                            'span',
                                            { className: 'part-name', 'data-name-zero': true },
                                            '\u0413\u043E\u043B\u043E\u0432\u043D\u0430'
                                        )
                                    )
                                ),
                                React.createElement(
                                    'li',
                                    { className: 'navbar-element', onClick: this.UpScroll },
                                    React.createElement(
                                        Link,
                                        { to: '/video', id: 'data-name-one' },
                                        React.createElement(
                                            'span',
                                            { className: 'navbar-ico' },
                                            React.createElement('i', { onMouseOver: this.NavigationUp, onMouseOut: this.NavigationOut, className: 'glyphicon glyphicon-facetime-video' })
                                        ),
                                        React.createElement(
                                            'span',
                                            { className: 'part-name', 'data-name-one': true },
                                            '\u0412\u0456\u0434\u0435\u043E\u0430\u0440\u0445\u0456\u0432'
                                        )
                                    )
                                ),
                                React.createElement(
                                    'li',
                                    { className: 'navbar-element', onClick: this.UpScroll },
                                    React.createElement(
                                        Link,
                                        { to: '/contacts', id: 'data-name-two' },
                                        React.createElement(
                                            'span',
                                            { className: 'navbar-ico' },
                                            React.createElement('i', { onMouseOver: this.NavigationUp, onMouseOut: this.NavigationOut, className: 'fa fa-phone' })
                                        ),
                                        React.createElement(
                                            'span',
                                            { className: 'part-name', 'data-name-two': true },
                                            '\u041A\u043E\u043D\u0442\u0430\u043A\u0442\u0438'
                                        )
                                    )
                                ),
                                React.createElement(
                                    'li',
                                    { className: 'navbar-element', onClick: this.UpScroll },
                                    React.createElement(
                                        Link,
                                        { to: '/pay-training', id: 'data-name-three' },
                                        React.createElement(
                                            'span',
                                            { className: 'navbar-ico' },
                                            React.createElement('i', { onMouseOver: this.NavigationUp, onMouseOut: this.NavigationOut, className: 'fa fa-futbol-o' })
                                        ),
                                        React.createElement(
                                            'span',
                                            { className: 'part-name', 'data-name-three': true },
                                            '\u0417\u0430\u043F\u0438\u0441\u0430\u0442\u0438\u0441\u044F \u043D\u0430 \u0442\u0440\u0435\u043D\u0443\u0432\u0430\u043D\u043D\u044F'
                                        )
                                    )
                                ),
                                React.createElement(
                                    'li',
                                    { className: 'navbar-element', onClick: this.UpScroll },
                                    React.createElement(
                                        Link,
                                        { to: '/coaches', id: 'data-name-four' },
                                        React.createElement(
                                            'span',
                                            { className: 'navbar-ico' },
                                            React.createElement('i', { onMouseOver: this.NavigationUp, onMouseOut: this.NavigationOut, className: 'fa fa-users' })
                                        ),
                                        React.createElement(
                                            'span',
                                            { className: 'part-name', 'data-name-four': true },
                                            '\u0422\u0440\u0435\u043D\u0435\u0440\u0441\u044C\u043A\u0438\u0439 \u0441\u043A\u043B\u0430\u0434'
                                        )
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

module.exports.Navbar = Navbar;
