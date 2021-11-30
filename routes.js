/*
 * Title: Routes
 * Description: Application Routes
 * Author: Asif Hasan Jahid
 * Date: 22/11/2021
 */

// dependencis
const { sampleHandler } = require('./handlers/routeHandlers/sampleHandler');

const routes = {
    sample: sampleHandler,
};
module.exports = routes;
