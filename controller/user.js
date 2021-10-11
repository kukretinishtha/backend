const db = require("../model"); 

const getUserData = (data) => {
    console.log(data.username, data.email, data.password);
    return({"message": "fetched user data successfully"})
}

const createUser = (data) => {
    console.log(data.username, data.email, data.password);
    try {
        db.sequelize.sync().then(db.users.create({
            username: data.username,
            email:data.email,
            password:data.password
        }))
        .complete(function(err, createUser) {
            if (err) {
                console.log(error)
                return({"message":"couldnt create user"});
            } else {
                return({"message": "user created successfully"})
            }
          })
        return({"message": "user created successfully"})
    } catch (error) {
        console.log(error)
        return({"message":"couldnt create user"});
    }
}

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