let React = require('react');
let ReactDOM = require('react-dom');

let Tween = require('rc-tween-one/lib/TweenOne');
let ScrollOverPack = require('rc-scroll-anim/lib/ScrollOverPack');






class Home extends React.Component{
    constructor(props){
        super(props);

    }

    render() {
        return (
            <React.Fragment>
                <div className="home-page-main-container">
                    <h1 className="home-main-name">Київська футбольна школа <span className="school-bold-name">«ДЮСШ-15»</span></h1>
                </div>
                <div className="about-school-main-container">
                    <div className="about-school-main-name">
                        Про нас
                    </div>
                    <div className="about-school container">
                        <div className="row">
                            <ScrollOverPack>
                                <Tween
                                    animation={{
                                        type: 'from',
                                        ease: 'easeOutQuart',
                                        opacity: 0 ,
                                        translateY: '300px',
                                        duration:900,
                                    }}
                                >
                                    <div className="col-md-6 col-sm-6 col-xs-6 text-container">
                                        <p className="about-school-text">
                                            ДЮСШ  №15 м. Київ - це державний позашкільний навчальний заклад спортивного профілю, заснований в
                                            1992 році. Головний адміністративний корпус знаходиться за адресою: м.Київ, вул. Якубовського, 7-А.В ДЮСШ-15 проводиться підготовка з футболу.
                                            Підтримання та експлуатація спортивної бази здійснюється за рахунок фінансування школи з бюджету Голосіївського району м.
                                            Києва, надходжень з оренди нежитлових приміщень та благодійних внесків спонсорів. Останнім часом державне фінансування спорту вкрай нестабільне,
                                            що ускладнює підготовку спортсменів. Спортивні зали СШ № 220, № 227 та № 260 використовуються для тренувань дітей, юнаків та молоді узимку.
                                            Школа має у своєму розпорядженні гуртожиток, де мешкають діти з інших регіонів України.
                                        </p>
                                    </div>
                                    <div className="col-md-6 col-sm-6 col-xs-6 img-container-about-school">
                                        <img src="../img/logo-test.png" alt="" className="home-main-logo"/>
                                    </div>
                                </Tween>
                            </ScrollOverPack>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            <ScrollOverPack>
                                <Tween
                                    animation={{
                                        type: 'from',
                                        ease: 'easeOutQuart',
                                        opacity: 0 ,
                                        translateY: '300px',
                                        duration:900,
                                    }}
                                >
                                    <div className="col-md-12 col-sm-12 col-xs-12" >
                                        <p className="why-me-school-main-name">
                                            Чому саме ми?
                                        </p>
                                    </div>
                                    <h1 className="our-main-mission">
                                        Наша головна мета - розвиток дитячого та юнацького футболу, а також підготовка молодих футболістів.
                                    </h1>

                                    <div className="col-md-3  col-sm-6 col-xs-6 features-part">
                                        <div className="features-container-img">
                                            <img src="../img/coach.jpg" alt="" className="features-img"/>
                                        </div>
                                        <p className="name-features">
                                            Досвідчені тренери
                                        </p>
                                        <p className="about-features">
                                            Ми використовуемо сучасні методи організації тренувального процесу і подготовки дітей.
                                        </p>
                                    </div>
                                    <div className="col-md-3 col-sm-6 col-xs-6 features-part">
                                        <div className="features-container-img">
                                            <img src="../img/competition.jpg" alt="" className="features-img"/>
                                        </div>
                                        <p className="name-features">
                                            Участь у змаганнях
                                        </p>
                                        <p className="about-features">
                                            Наші команди постійно беруть участь у змаганнях різного рівня як в Україні, так і за кордоном.
                                        </p>
                                    </div>
                                    <div className="col-md-3 col-sm-6 col-xs-6 features-part">
                                        <div className="features-container-img">
                                            <img src="../img/tactic.jpg" alt="" className="features-img"/>
                                        </div>
                                        <p className="name-features">
                                            Тактична підготовка
                                        </p>
                                        <p className="about-features">
                                            Ми навчаємо дітей футбольної тактики, вчимо розуміти і читати гру.
                                        </p>
                                    </div>
                                    <div className="col-md-3 col-sm-6 col-xs-6 features-part">
                                        <div className="features-container-img">
                                            <img src="../img/individual.jpg" alt="" className="features-img"/>
                                        </div>
                                        <p className="name-features">
                                            Індивідуальний підхід
                                        </p>
                                        <p className="about-features">
                                            Намагаємося створити комфортні умови тренувань для кожної дитини.
                                            Враховуємо навантаження в школі та інших секціях.
                                        </p>
                                    </div>

                                </Tween>
                            </ScrollOverPack>

                        </div>
                    </div>
                </div>
            </React.Fragment>

        )
    }
}


module.exports.Home = Home;