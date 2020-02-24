const constants = require('./../Helpers/constants');
const printer = require('./../Helpers/printer');
const validators = require('./../Helpers/validators');
const database = require('./../Services/databaseService');

class Toilet {
    /**
     * _toiletId
     * _toiletName
     * _address
     * _totalSeats
     * @param toiletId
     * @param toiletName
     * @param address
     * @param totalSeats
     */
    constructor(toiletId, toiletName, address, totalSeats) {
        this._toiletId = validators.validateNumber(toiletId) ? toiletId : -1;
        this._toiletName = validators.validateString(toiletName) ? toiletName : "";
        this._address = validators.validateString(address) ? address : "";
        this._totalSeats = validators.validateNumber(totalSeats) ? totalSeats : 1;
    }

    /**
     * Method to create the toilet.
     * @returns {Promise<Number>}: toiletId if create, else ERROR.
     */
    createToilet(technicianId, userId) {
        return new Promise((resolve, reject) => {
            database.runSp(constants.SP_CREATE_TOILET, [this._toiletName, this._address],
                [this._totalSeats, technicianId, userId]).then(_resultSet => {
                const result = _resultSet[0][0];
                this._toiletId = result[constants.TOILET_ID];
                resolve(this._toiletId);
            }).catch(err => {
                printer.printError(err);
                reject(err);
            });
        });
    }
}

module.exports = Toilet;