let React = require('react');
let ReactDOM = require('react-dom');

/*----------components------------*/

let Navbar = require('./components/navbar').Navbar;



class Main extends React.Component{
    constructor(props){
        super(props);

    }

    render() {
        return (
            <React.Fragment>
                {/*----NAVBAR----*/}
              <Navbar/>









            </React.Fragment>
        )
    }
}


module.exports.Main = Main;