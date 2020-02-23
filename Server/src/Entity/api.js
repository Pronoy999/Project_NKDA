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
            const query = "CALL " + constants.SP_VALIDATE_TOKEN + "('" + this._token + "')";
            database.runSp(constants.SP_VALIDATE_TOKEN,[this._token]).then(_resultSet => {
                const result = _resultSet[0][0][0];
                printer.printLog(result[0][constants.TOKEN_ID]);
                if (result[constants.TOKEN_ID] > 0) {
                    resolve(true);
                } else {
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