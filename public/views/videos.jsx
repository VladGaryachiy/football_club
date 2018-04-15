let React = require('react');
let ReactDOM = require('react-dom');


let allVideos = [];

(function () {
    $.ajax({
        url:'/ClubVideos',
        method:'GET',
        contentType: "application/json; charset=utf-8",
        cache: false,
        async: false,
        success: function (result) {
            videosParser(result);
        },
        error: function (error) {
            return error;
        }
    });

})();


function videosParser(result) {
    for(let i = 0; i< result.result.length; i++){
        allVideos.push(result.result[i])
    }
}



class Videos extends React.Component{
    constructor(props){
        super(props);

    }
    componentDidMount(){
        let elements = document.querySelectorAll('.video-box');

        for(let i = 0; i < elements.length; i++){
            for(let j = 0; j < allVideos.length; j++){
                if(i === j){
                    elements[i].innerHTML = allVideos[j].link;
                }
            }
        }
    }
    render() {
        let test = Number(allVideos[0].link);
        return (
           <div className="videos-main-container">
               <h1 className="videos-main-name">Відеоархів</h1>

               <div className="all-videos-container">
                   {
                       allVideos.map((item,i)=>
                           <div className="element-video" key={i}>
                               <h3 className="name-video">{item.name_video}</h3>
                               <div className="video-box">

                               </div>
                           </div>

                       )
                   }
               </div>
           </div>
        )
    }
}


module.exports.Videos = Videos;