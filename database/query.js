module.exports = {
    "userQuery": {
        "getUser": `db.users.get(${data.username}, ${data.email}, ${data.password})`,
        "createUser" : `db.users.create(${data.username}, ${data.email}, ${data.password})`,
        "updateUser" : `db.users.update(${data.username}, ${data.email}, ${data.password})`,
        "deleteUser" : `db.users.delete(${data.username}, ${data.email}, ${data.password})`,
    }
}
