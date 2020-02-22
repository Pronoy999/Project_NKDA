const constants = require('./../Helpers/constants');
const printer = require('./../Helpers/printer');
const validator = require('./../Helpers/validators');
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
/**
 * The default handler for invalid path.
 * @param dataObject: The request object.
 * @returns {Promise<Array>}: Response Object and code.
 */
handlerObj.notFound = (dataObject) => {
    return new Promise((resolve, reject) => {
        resolve([constants.INVALID_PATH, constants.HTTP_NOT_FOUND_CODE]);
    });
};
handlerObj.users = (dataObject) => {
    return new Promise((resolve, reject) => {
        const apiToken = dataObject.queryString[constants.API_TOKEN_KEY];
        validator.validateToken(apiToken).then(() => {

        }).catch(err => {

        });
    });
};
/**
 * Exporting the Module.
 */
module.exports = handlerObj;