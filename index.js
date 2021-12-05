/*
 * Title: Uptime Monitoring Application
 * Description: A RESTFul API to monitor up to down time of user defined links
 * Author: Asif Hasan Jahid
 * Date: 22/11/2021
 */

// dependencise
const http = require('http');
const { handleReqRes } = require('./helpers/handleReqRes');
const environment = require('./helpers/environments');
const data = require('./lib/data');

// app object - module scaffolding
const app = {};

// testin file system
data.delete('test', 'newFile', (err) => {
    console.log(err);
});

// create server
app.createServer = () => {
    const server = http.createServer(app.handleReqRes);
    server.listen(environment.port, () => {
        console.log(`listening to port ${environment.port}`);
    });
};

// handle Request Response
app.handleReqRes = handleReqRes;

// start the server
app.createServer();
