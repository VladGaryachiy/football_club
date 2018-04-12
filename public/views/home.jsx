let React = require('react');
let ReactDOM = require('react-dom');






class Home extends React.Component{
    constructor(props){
        super(props);

    }

    render() {
        return (
            <div className="container home-page-main-container">
                <div className="row">
                    <h1>HOME PAGE</h1>
                </div>
            </div>
        )
    }
}


module.exports.Home = Home;