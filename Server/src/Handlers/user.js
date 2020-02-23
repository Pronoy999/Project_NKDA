const printer = require('./../Helpers/printer');
const constants = require('./../Helpers/constants');
const responseGenerator = require('./../Services/responseGenerator');
const validators = require('./../Helpers/validators');

const User = require('./../Entity/user');

const usersObj = {};
/**
 * handler to handle the basic User requests.
 * @param dataObject: The request Object
 * @returns {Promise<Array>}: The array containing the response code and the response object.
 */
usersObj.users = (dataObject) => {
    return new Promise((resolve, reject) => {
        const method = dataObject.method;
        if (method === constants.HTTP_POST) {
            const firstName = validators.validateString(dataObject.postData[constants.USER_FIRST_NAME]) ?
                dataObject.postData[constants.USER_FIRST_NAME] : false;
            const lastName = validators.validateString(dataObject.postData[constants.USER_LAST_NAME]) ?
                dataObject.postData[constants.USER_LAST_NAME] : false;
            const emailId = validators.validateEmail(dataObject.postData[constants.USER_EMAIL_ID]) ?
                dataObject.postData[constants.USER_EMAIL_ID] : false;
            const roleId = validators.validateString(dataObject.postData[constants.USER_ROLE_ID]) &&
            (dataObject.postData[constants.USER_ROLE_ID] === constants.USER_ROLE_ADMIN ||
                dataObject.postData[constants.USER_ROLE_ID] === constants.USER_ROLE_USER) ?
                dataObject.postData[constants.USER_ROLE_ID] : constants.USER_ROLE_USER;
            const password = validators.validateString(dataObject.postData[constants.USER_PASSWORD]) ?
                dataObject.postData[constants.USER_PASSWORD] : false;
            if (firstName && lastName && emailId && roleId && password) {
                const user = new User("", firstName, lastName, emailId);
                user.createUser(password, roleId).then(userId => {
                    const response = responseGenerator.generateResponse(userId, constants.RESPONSE_SUCESS_LEVEL_1);
                    resolve(response);
                }).catch(err => {
                    printer.printError(err);
                    const response = responseGenerator.generateErrorResponse(constants.ERROR_MESSAGE, constants.ERROR_LEVEL_3,
                        constants.INTERNAL_SERVER_ERROR_MESSAGE);
                    reject(response);
                });
            } else {
                reject(responseGenerator.generateErrorResponse(constants.ERROR_MESSAGE, constants.ERROR_LEVEL_1,
                    constants.INSUFFICIENT_DATA_MESSAGE));
            }
        } else if (method === constants.HTTP_GET) {
            const firstName = validators.validateString(dataObject.queryString[constants.USER_FIRST_NAME]) ?
                dataObject.queryString[constants.USER_FIRST_NAME] : false;
            const lastName = validators.validateString(dataObject.queryString[constants.USER_LAST_NAME]) ?
                dataObject.queryString[constants.USER_LAST_NAME] : false;
            const emailId = validators.validateEmail(dataObject.queryString[constants.USER_EMAIL_ID]) ?
                dataObject.queryString[constants.USER_EMAIL_ID] : false;
            const userId = validators.validateNumber(dataObject.queryString[constants.USER_ID]) ?
                dataObject.queryString[constants.USER_ID] : false;
            if (firstName || lastName || emailId || userId) {
                const user = new User(userId, firstName, lastName, emailId);
                user.getUserDetails().then(userDetails => {
                    const response = responseGenerator.generateResponse(userDetails, constants.RESPONSE_SUCESS_LEVEL_1);
                    resolve(response);
                }).catch(err => {
                    printer.printError(err);
                    const response = responseGenerator.generateErrorResponse(constants.ERROR_MESSAGE, constants.ERROR_LEVEL_3,
                        constants.INTERNAL_SERVER_ERROR_MESSAGE);
                    reject(response);
                });
            } else {
                reject(responseGenerator.generateErrorResponse(constants.ERROR_MESSAGE, constants.ERROR_LEVEL_1,
                    constants.INSUFFICIENT_DATA_MESSAGE));
            }
        } else {
            const response = responseGenerator.generateErrorResponse(constants.ERROR_MESSAGE, constants.ERROR_LEVEL_1,
                constants.INVALID_METHOD_MESSAGE);
            resolve(response);
        }
    });
};
/**
 * Exporting the users.
 */
module.exports = usersObj;