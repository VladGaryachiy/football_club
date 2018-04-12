let React = require('react');
let ReactDOM = require('react-dom');

class Videos extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return React.createElement(
            'h1',
            null,
            'VIDEOS PAGE'
        );
    }
}

module.exports.Videos = Videos;
