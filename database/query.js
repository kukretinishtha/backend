const db = require('../model');

module.exports = function createUser(username, email, password) {
    try {
        db.user.create({ username: username, email: email, password: password});
        return({"status": "success", "message": "User created successfully", "statusCode": 200});
    } catch (error) {
        return({"status": "failure", "message": error, "statusCode": 500});
    }
}
