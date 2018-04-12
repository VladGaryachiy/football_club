let React = require('react');
let ReactDOM = require('react-dom');
let BrowserRouter = require('react-router-dom').BrowserRouter;
let Route = require('react-router-dom').Route;
let Link = require('react-router-dom').Link;
let Switch = require('react-router-dom').Switch;

/*----------components------------*/
let Navbar = require('./components/navbar').Navbar;

/*---------pages----------*/

let Home = require('./home').Home;
let Videos = require('./videos').Videos;
let Contacts = require('./contact').Contacts;
let PayTraining = require('./pay_training').PayTraining;
let Coaches = require('./coaches').Coaches;

class Main extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return React.createElement(
            React.Fragment,
            null,
            React.createElement(
                BrowserRouter,
                null,
                React.createElement(
                    'div',
                    { className: 'container-fluid main-container-for-all' },
                    React.createElement(
                        'div',
                        { className: 'row' },
                        React.createElement(
                            'div',
                            { className: 'col-md-1 col-xs-21 col-sm-1 navbar-container' },
                            React.createElement(Navbar, null)
                        ),
                        React.createElement(
                            'div',
                            { className: 'col-md-11 col-xs-11 col-sm-11 content-container' },
                            React.createElement(
                                'div',
                                { className: 'main-container-for-pages' },
                                React.createElement(Route, { exact: true, path: '/', component: Home }),
                                React.createElement(Route, { exact: true, path: '/video', component: Videos }),
                                React.createElement(Route, { exact: true, path: '/contacts', component: Contacts }),
                                React.createElement(Route, { exact: true, path: '/pay-training', component: PayTraining }),
                                React.createElement(Route, { exact: true, path: '/coaches', component: Coaches })
                            )
                        )
                    )
                )
            )
        );
    }
}

module.exports.Main = Main;
