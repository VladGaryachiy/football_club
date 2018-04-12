let React = require('react');
let Link = require('react-router-dom').Link;






class Navbar extends React.Component{
    constructor(props){
        super(props);

        this.NavigationUp = this.NavigationUp.bind(this);
        this.NavigationOut = this.NavigationOut.bind(this);
        this.UpScroll = this.UpScroll.bind(this);
    }

    NavigationUp(event){

        let el = event.currentTarget.parentElement.nextSibling.attributes[1].name;

        $('['+el+']').animate({
            width: "250px",
            opacity:1

        },200,function () {
            console.log(el)
        });
    }

    NavigationOut(event){
        let el = event.currentTarget.parentElement.nextSibling.attributes[1].name;
        $('['+el+']').animate({
            width: 0,
            opacity:0
        },200);
    }
    UpScroll() {
        window.scrollTo(0, 0);
    }
    render(){
        return(
            <div className="navbar-container-main">
               <table  className="navbar-table">
                   <tbody className="menu-links-container">
                    <tr>
                        <td style={{verticalAlign:'middle'}}>
                            <ul className="menu-links-container">
                                <li className="navbar-element first-element"  onClick={this.UpScroll}>
                                    {/*головна*/}
                                    <Link to="/"  id="data-name-zero" >
                                        <span className="navbar-ico">
                                            <i onMouseOver={this.NavigationUp} onMouseOut={this.NavigationOut} className="fa fa-home"></i>
                                        </span>
                                        <span className="part-name" data-name-zero>Головна</span>
                                    </Link>
                                </li>
                                <li className="navbar-element"   onClick={this.UpScroll}>
                                    {/*відеоархів*/}
                                    <Link to="/video"  id="data-name-one">
                                        <span className="navbar-ico">
                                            <i onMouseOver={this.NavigationUp} onMouseOut={this.NavigationOut} className="glyphicon glyphicon-facetime-video"></i>
                                        </span>
                                        <span className="part-name" data-name-one>Відеоархів</span>
                                    </Link>
                                </li>
                                <li className="navbar-element"   onClick={this.UpScroll}>
                                    {/*контакти*/}
                                    <Link to="/contacts"  id="data-name-two">
                                        <span className="navbar-ico">
                                             <i onMouseOver={this.NavigationUp} onMouseOut={this.NavigationOut} className="fa fa-phone"></i>
                                         </span>
                                        <span className="part-name" data-name-two>Контакти</span>
                                    </Link>
                                </li>
                                <li className="navbar-element"   onClick={this.UpScroll}>
                                    {/*платні послуги*/}
                                    <Link to="/pay-training"  id="data-name-three">
                                        <span className="navbar-ico">
                                            <i onMouseOver={this.NavigationUp} onMouseOut={this.NavigationOut} className="fa fa-credit-card"></i>
                                        </span>
                                        <span className="part-name" data-name-three>Платні послуги</span>
                                    </Link>
                                </li>
                                <li className="navbar-element"   onClick={this.UpScroll}>
                                    {/*тренерський склад*/}
                                    <Link to="/coaches"  id="data-name-four">
                                        <span className="navbar-ico">
                                            <i onMouseOver={this.NavigationUp} onMouseOut={this.NavigationOut} className="fa fa-users"></i>
                                        </span>
                                        <span className="part-name" data-name-four>Тренерський склад</span>
                                    </Link>
                                </li>
                            </ul>
                        </td>
                    </tr>
                   </tbody>
               </table>
            </div>
        )
    }
}



module.exports.Navbar = Navbar;