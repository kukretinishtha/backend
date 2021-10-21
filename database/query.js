const db = require('../model');

module.exports = function createUser(username, email, password) {
    // console.log("inside create user try block");
    // console.log(username, email, password);
    db.users.create({userName: username, email: email, password: password})
    .then(user => {
        // console.log(user);
        // return(user);
        return({"status": "success", "message": "User created successfully", "userid":user.id, "statusCode": 200}); 
        })
    .catch (error => {
        // console.log("inside user creation error")
        return({"status": "failure", "message": error, "statusCode": 500});
    })
}



// Create a new user
// User.create({ firstName: "Jane", lastName: "Doe" }).then(jane => {
//     console.log("Jane's auto-generated ID:", jane.id);
//   });
