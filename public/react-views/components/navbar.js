let React = require('react');

class Navbar extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return React.createElement(
            'h1',
            null,
            'NAVBAR'
        );
    }
}

module.exports.Navbar = Navbar;
