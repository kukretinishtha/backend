module.exports = function validateUsername(username) {
  console.log(username);
  if (!username) {
    // console.log("not username");
    return({"status": "failure", "error": "Username cannot be empty. Please enter the password."})
  } else if (typeof username != "string") {
    // console.log("not a string");
    return({"status": "failure", "error": "Username must be a string"})
  } else {
    // console.log("username ok");
    return({"status": "success", "msg": "Username is OK"})
  }
}