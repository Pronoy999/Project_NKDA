const constants = require('./../Helpers/constants');
const printer = require('./../Helpers/printer');
const Api = require('./../Entity/api');
const handlerObj = {};
/**
 * Handler to test the API.
 * @param dataObject: The Request Object.
 * @returns {Promise<Array>}
 */
handlerObj.ping = (dataObject) => {
    return new Promise((resolve) => {
        const api = new Api(dataObject.queryString[constants.API_TOKEN_KEY]);
        api.isValidToken().then(() => {
            printer.printHighlightedLog("Valid Token.");
        }).catch(err => {
            printer.printError("Invalid Token.");
            printer.printError(err);
        });
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
module.exports = handlerObj;