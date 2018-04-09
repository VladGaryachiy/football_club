let React = require('react');
let ReactDOM = require('react-dom');

/*----------components------------*/

let Navbar = require('./components/navbar').Navbar;

class Main extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return React.createElement(
            React.Fragment,
            null,
            React.createElement(Navbar, null)
        );
    }
}

module.exports.Main = Main;
