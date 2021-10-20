const validateEmail = require("../validation/emailValidation");
const validatePassword = require("../validation/passwordValidation");
const validateUsername = require("../validation/usernameValidation");
const query = require("../database/query");

const getUserData = (data) => {
    return({"data":data,"message": "fetched user data successfully"})
}

const createUser = (data) => {
    console.log(data);
    res = {};
    var username = data.username;
    var email = data.email;
    var password = data.password;
    email = validateEmail(email);
    username = validateUsername(username);
    password = validatePassword(password);
    res.email = email;
    res.username = username;
    res.password = password;
    if (res.email.status == "failure" || res.username.status == "failure" || res.password.status == "failure") {
        res.status_code = 403;
        return res;
    } else {
        
    }

};


const updateUser = (data) => {
    return({"data":data,"message": "updated user successfully"})
}

const fixUser = (req, res) => {
    return({"data":data,"message": "fixed user successfully"})
}

const deleteUser = (req, res) => {
    return({"data":data,"message": "deleted user successfully"})
}

module.exports = [getUserData, createUser, updateUser, fixUser, deleteUser];