let React = require('react');
let ReactDOM = require('react-dom');

class Home extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return React.createElement(
            'div',
            { className: 'container home-page-main-container' },
            React.createElement(
                'div',
                { className: 'row' },
                React.createElement(
                    'h1',
                    null,
                    'HOME PAGE'
                )
            )
        );
    }
}

module.exports.Home = Home;
