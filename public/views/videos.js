let React = require('react');
let ReactDOM = require('react-dom');

let allVideos = [];

(function () {
    $.ajax({
        url: '/ClubVideos',
        method: 'GET',
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
    for (let i = 0; i < result.result.length; i++) {
        allVideos.push(result.result[i]);
    }
}

class Videos extends React.Component {
    constructor(props) {
        super(props);
    }
    componentDidMount() {
        let elements = document.querySelectorAll('.video-box');

        for (let i = 0; i < elements.length; i++) {
            for (let j = 0; j < allVideos.length; j++) {
                if (i === j) {
                    elements[i].innerHTML = allVideos[j].link;
                }
            }
        }
    }
    render() {
        let test = Number(allVideos[0].link);
        return React.createElement(
            'div',
            { className: 'videos-main-container' },
            React.createElement(
                'h1',
                { className: 'videos-main-name' },
                '\u0412\u0456\u0434\u0435\u043E\u0430\u0440\u0445\u0456\u0432'
            ),
            React.createElement(
                'div',
                { className: 'all-videos-container' },
                allVideos.map((item, i) => React.createElement(
                    'div',
                    { className: 'element-video', key: i },
                    React.createElement(
                        'h3',
                        { className: 'name-video' },
                        item.name_video
                    ),
                    React.createElement('div', { className: 'video-box' })
                ))
            )
        );
    }
}

module.exports.Videos = Videos;
