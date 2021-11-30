/*
 * Title: Sample Handler
 * Description: Sample Handler
 * Author: Asif Hasan Jahid
 * Date: 22/11/2021
 */

// module scaffolding
const handler = {};

handler.sampleHandler = (requestProperties, callback) => {
    console.log(requestProperties);
    callback(200, {
        message: 'This is a sample url',
    });
};
module.exports = handler;
