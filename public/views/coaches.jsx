let React = require('react');
let ReactDOM = require('react-dom');

let Tween = require('rc-tween-one/lib/TweenOne');
let ScrollOverPack = require('rc-scroll-anim/lib/ScrollOverPack');


let CoachesInfo  = [];

(function () {
    $.ajax({
        url:'/CoachesData',
        method:'GET',
        contentType: "application/json; charset=utf-8",
        cache: false,
        async: false,
        success: function (result) {
            dataParser(result);
        },
        error: function (error) {
            return error;
        }
    });

})();


 function dataParser (result) {
     for(let i = 0; i< result.result.length; i++){
         CoachesInfo.push(result.result[i])
     }
 }


class Coaches extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            coachInfo : [{
                name:'',
                surname:'',
                father_name:'',
                age:'',
                biography:'',
                coach_img:'',
                name_sport_title:'',
                name_who_is_trained:''
            }]
        };

        this.CoachInfo = this.CoachInfo.bind(this);

    }

    CoachInfo(e) {
        let searchCoach = e.currentTarget.attributes[1].nodeValue;
        let foundCoach = CoachesInfo.filter(item => {
            return item.name === searchCoach;
        });

        this.setState({
            coachInfo:foundCoach
        })
    }

    render() {
        let allInfoCoach = this.state.coachInfo[0];
        return (
            <React.Fragment>
                <Tween
                    animation={{
                        type: 'from',
                        ease: 'easeOutQuart',
                        opacity: 0 ,
                        translateY: '300px',
                        duration:900,
                    }}>

                    <div className="coaches-main-container">
                        <h1 className="coaches-main-name">Тренерський склад</h1>
                        <div className="container  coaches-cart-container">
                            <div className="row">
                                {
                                    CoachesInfo.map((item,i) =>
                                        <div className="col-md-4 col-sm-6 col-xs-6 cart-coach" key={i}>
                                            <div className="coaches-img-container">
                                                <img src={item.coach_img} className={"coach-cart-img coach_img" + i} alt=""/>
                                            </div>
                                            <div className="coaches-name-container">
                                                <h3 className="coaches-full-name ">{item.surname} {item.name} {item.father_name}</h3>
                                            </div>
                                            <div className="button-read-more-info-coaches-container">
                                                <button onClick={this.CoachInfo} className="read-more-about-coach btn btn-primary" data-name={item.name} data-toggle="modal" data-target="#formModal">Читати більше</button>
                                            </div>
                                        </div>
                                    )
                                }
                            </div>
                        </div>
                    </div>
                </Tween>
                <div className="modal fade" id="formModal" tabIndex="-1" role="dialog" aria-labelledby="formModalLabel">
                    <div className="modal-dialog">
                        <div className="modal-content container  coach-about-main-container-in-modal">
                            <div className="row">
                                <div className="col-md-12 col-sm-12 col-xs-12 modal-img-container">
                                    <img src={allInfoCoach.coach_img} alt="" className={"modal-img individual-img-coach-id_"+allInfoCoach.coach_id}/>
                                    <div className="modal-characteristic-container">
                                        <h1 className="modal-coach-surname">
                                            {allInfoCoach.surname}
                                        </h1>
                                        <div className="name_surname_container">
                                            <h2 className="modal-coach-name-and-father_name">
                                                {allInfoCoach.name} &nbsp;
                                                {allInfoCoach.father_name}
                                            </h2>
                                        </div>
                                        <p className="line"></p>
                                        <div className="other_characteristic_container">
                                            <h3 className="modal-coach-age">
                                                Вік: {allInfoCoach.age}
                                            </h3>
                                            <h3 className="modal-coach-sport-title">
                                                Спортивне звання: {allInfoCoach.name_sport_title}
                                            </h3>
                                            <h3 className="modal-coach-who-is-trained">
                                                Кого тренує: {allInfoCoach.name_who_is_trained}
                                            </h3>
                                        </div>
                                        <p className="line"></p>

                                    </div>
                                    <p className="modal-coach-biography">
                                        {allInfoCoach.biography}
                                    </p>
                                </div>

                            </div>
                            <button type="button" className="btn btn-default exit" data-dismiss="modal">Вийти</button>
                        </div>
                    </div>
                </div>

            </React.Fragment>

        )
    }
}


module.exports.Coaches = Coaches;