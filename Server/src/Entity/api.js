const validators = require('./../Helpers/validators');
const constants = require('./../Helpers/constants');
const printer = require('./../Helpers/printer');
const database = require('./../Services/databaseService');

class Api {
    constructor(token) {
        this._token = validators.validateString(token) ? token : false;
    }

    /**
     * Method to check is the Token valid or not.
     * @returns {Promise<Boolean>}: true if valid, else false.
     */
    isValidToken() {
        return new Promise((resolve, reject) => {
            database.runSp(constants.SP_VALIDATE_TOKEN, [this._token]).then(_resultSet => {
                try {
                    const result = _resultSet[0][0];
                    if (result[constants.TOKEN_ID] > 0) {
                        resolve(true);
                    } else {
                        reject(false);
                    }
                } catch (e) {
                    reject(false);
                }
            }).catch(err => {
                printer.printError(err);
                reject(err);
            });
        });
    }
}

module.exports = Api;