const responseGenerator = require('./../../src/Services/responseGenerator');
const constants = require('./../../src/Helpers/constants');
test("Should return valid Error Response", () => {
    expect(responseGenerator.generateErrorResponse("Error", constants.ERROR_LEVEL_2,
        constants.INVALID_PATH))
        .toStrictEqual([
            404,
            {
                "error": "Invalid Path",
                "error_level": "2",
                "res": "Error"
            }
        ]);
});