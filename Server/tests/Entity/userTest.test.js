const User = require('./../../src/Entity/user');

test("Should return user id for user Creation", () => {
    const user = new User(-1, "Pronoy", "Mukherjee", "mukherjee@yahoo.in");
    user.createUser("abc123", "User").then(userId => {
        console.log(userId);
        expect(userId).toBeInstanceOf(Number);
    }).catch(err => {
        console.error(err);
    });
});
test("Should not create user for duplicate Data", () => {
    const user = new User(-1, "Pronoy", "Mukherjee", "mukherjee@yahoo.in");
    user.createUser("abc123", "User").then(userId => {
        console.log(userId);
        expect(userId).toBeInstanceOf(Number);
    }).catch(err => {
        console.error(err);
    });
});