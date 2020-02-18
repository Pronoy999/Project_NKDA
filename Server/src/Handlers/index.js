const constants = require('./../Helpers/constants');
const handlerObj = {};
/**
 * Handler to test the API.
 * @param dataObject: The Request Object.
 * @returns {Promise<Array>}
 */
handlerObj.ping = (dataObject) => {
    return new Promise((resolve) => {
        resolve([constants.WELCOME_MESSAGE, constants.HTTP_SUCCESS]);
    });
};
module.exports = handlerObj;