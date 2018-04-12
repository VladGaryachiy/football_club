let React = require('react');
let ReactDOM = require('react-dom');

class PayTraining extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return React.createElement(
            'h1',
            null,
            'PAY TRAINING PAGE'
        );
    }
}

module.exports.PayTraining = PayTraining;
