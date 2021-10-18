function validatePassword(Password) {
    if (!Password) {
        return({"status": "failure", "error": "Password cannot be empty. Please enter the password."})
    } else if (typeof Password != "string") {
        return({"status": "failure", "error": "Password must be a string"})
    } else if (Password.length < 5 || Password.length >12) {
        return({"status": "failure", "error": "Password length should be between 5 and 12 characters"})
    } else {
        return({"status": "success", "msg": "Password is OK"})
    }
  }