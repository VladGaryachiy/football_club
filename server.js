let express = require('express');
let bodyParser = require('body-parser');
let server = express();
let path = require('path');


server.use(express.static('public'));
server.use(bodyParser.urlencoded({extended:true}));
server.use(bodyParser.json());



server.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'public/index.html'))
});

server.listen(6100,'localhost');