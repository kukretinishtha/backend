const db = require("../model"); 


const getUserData = (data) => {
    console.log(data.username, data.email, data.password);
    return({"message": "fetched user data successfully"})
}

const createUser = (data) => {

};


const updateUser = (data) => {
    return({"message": "user updated successfully"})
}

const fixUser = (req, res) => {
    return({"message": "user fixed successfully"})
}

const deleteUser = (req, res) => {
    return({"message": "user deleted successfully"})
}

module.exports = [getUserData, createUser, updateUser, fixUser, deleteUser];