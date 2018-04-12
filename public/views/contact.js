let React = require('react');
let ReactDOM = require('react-dom');

class Contacts extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return React.createElement(
            'h1',
            null,
            'CONTACT PAGE'
        );
    }
}

module.exports.Contacts = Contacts;
