const constants = require('./../Helpers/constants');
const printer = require('./../Helpers/printer');
const validator = require('./../Helpers/validators');
const database = require('./../Services/databaseService');

class User {
    /**
     * _userId
     * _firstName
     * _lastName
     * _email
     * @param userId
     * @param firstName
     * @param lastName
     * @param email
     */
    constructor(userId, firstName, lastName, email) {
        this._userId = validator.validateNumber(userId) ? userId : false;
        this._firstName = validator.validateString(firstName) ? firstName : false;
        this._lastName = validator.validateString(lastName) ? lastName : false;
        this._email = validator.validateEmail(email) ? email : false;
    }

    /**
     * Method to create the user id.
     * @param password: The password of the user.
     * @param role: The role of the user.
     * @returns {Promise<Error,Number>}: If success then user id else error.
     */
    createUser(password, role) {
        return new Promise((resolve, reject) => {
            database.runSp(constants.SP_CREATE_USER, [this._firstName, this._lastName, this._email,
                role, password]).then(_resultSet => {
                const result = _resultSet[0][0][0];
                this._userId = result[constants.USER_ID];
                resolve(this._userId);
            }).catch(err => {
                printer.printError(err);
                reject(err);
            });
        });
    }

    /**
     * Method to get the user details.
     * You can either get the user details by userID, firstName, lastName or email.
     * @returns {Promise<unknown>}
     */
    getUserDetails() {
        return new Promise((resolve, reject) => {
            database.runSp(constants.SP_GET_USER_DETAILS, [validator.validateEmail(this._email) ? this._email : "",
                    validator.validateString(this._firstName) ? this._firstName : "", validator.validateString(this._lastName) ? this._lastName : ""],
                [validator.validateNumber(this._userId) ? this._userId : 0])
                .then(_resultSet => {
                    const result = _resultSet[0];
                    resolve(result);
                }).catch(err => {
                printer.printError(err);
                reject(err);
            });
        });
    }
}

/**
 * exporting the class.
 * @type {User}
 */
module.exports = User;