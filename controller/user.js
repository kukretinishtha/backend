const db = require("../model"); 


const getUserData = (data) => {
    return({"data":data,"message": "fetched user data successfully"})
}

const createUser = (data) => {
    return({"data":data,"message": "created user successfully"})
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