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



class Main extends React.Component{
    constructor(props){
        super(props);

    }

    render() {
        return (
            <React.Fragment>
              <BrowserRouter>
                <div className="container-fluid main-container-for-all">
                    <div className="row">

                        <div className="col-md-1 col-xs-21 col-sm-1 navbar-container">
                            {/*----NAVBAR----*/}
                            <Navbar/>
                        </div>

                        <div className="col-md-11 col-xs-11 col-sm-11 content-container">
                            <div className="main-container-for-pages">

                                    {/*ALL PAGES*/}
                                    <Route exact path = "/" component={Home}/>
                                    <Route exact path = "/video" component={Videos}/>
                                    <Route exact path = "/contacts" component={Contacts}/>
                                    <Route exact path = "/pay-training" component={PayTraining}/>
                                    <Route exact path = "/coaches" component={Coaches}/>

                            </div>
                        </div>
                    </div>
                </div>
              </BrowserRouter>
            </React.Fragment>
        )
    }
}


module.exports.Main = Main;