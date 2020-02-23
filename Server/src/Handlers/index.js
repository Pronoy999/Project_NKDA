const constants = require('./../Helpers/constants');
const printer = require('./../Helpers/printer');

const users = require('./user');

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
/**
 * Handler for users request.
 * @param dataObject
 * @returns {Promise<unknown>}
 */
handlerObj.users = (dataObject) => {
    return new Promise((resolve, reject) => {
        let promise;
        switch (dataObject.path) {
            case "users":
                promise = users.users(dataObject);
                break;
        }
        promise.then(response => {
            resolve(response);
        }).catch(err => {
            reject(err);
        });
    });
};
/**
 * Exporting the Module.
 */
module.exports = handlerObj;