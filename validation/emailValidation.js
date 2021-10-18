function validateEmail(email) {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (!Password) {
    return({"status": "failure", "error": "Email cannot be empty. Please enter the password."})
  } else if (email != "string") {
    return({"status": "failure", "error": "Email must be a string"})
  } else if (re.test(String(email).toLowerCase()) == false) {
    return({"status": "failure", "error": "Email must be in @xyz.abc format like nishtha@aaiena.com"})
  } else {
    return({"status": "success", "msg": "Email is OK"})
  }
} 
