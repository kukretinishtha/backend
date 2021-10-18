function validateUsername(username) {
  if (!username) {
    return({"status": "failure", "error": "Username cannot be empty. Please enter the password."})
  } else if (typeof username != "string") {
    return({"status": "failure", "error": "Username must be a string"})
  } else {
    return({"status": "success", "msg": "Username is OK"})
  }
}