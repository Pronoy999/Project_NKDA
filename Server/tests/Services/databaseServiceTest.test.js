const database = require('./../../src/Services/databaseService');

test('should reject if queries is not an array', () => {
    return database.query("").then(_resultSet => {
        expect(_resultSet).toBe([]);
    }).catch(err => {
        expect(err).toBe("NOT AN ARRAY.");
    });
});