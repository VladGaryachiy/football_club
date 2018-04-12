let React = require('react');
let ReactDOM = require('react-dom');

let Main = require('./main_component').Main;

ReactDOM.render(React.createElement(Main, null), document.getElementById('content'));
