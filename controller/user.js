const db = require("../model"); 

const getUserData = (data) => {
    console.log(data.username, data.email, data.password);
    return({"message": "fetched user data successfully"})
}

const createUser = (data) => {
    return db.users.create({ userName: data.username, email: data.email, password: data.password})
    // .then(() => {
    //     console.log("inside then()");
    //     return({"message":"User created successfully"});
    //     })
    // .catch((error) => {
    //     console.log("inside error", `${typeof(error.message)}`);
    //     ret                  urn(error.message);
    // });
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