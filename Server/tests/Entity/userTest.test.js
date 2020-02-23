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
test("Should get the data of a user", () => {
    const user = new User(-1, "Pronoy", "", "mukherjee@yahoo.in");
    user.getUserDetails().then(userDetails => {
        console.log(userDetails);
        expect(userDetails).toBeInstanceOf(Array);
    }).catch(err => {
        expect(err).toBeInstanceOf(Promise);
    })
});