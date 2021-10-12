const express = require('express');
const router = express.Router();

const [getUserData, createUser, updateUser, fixUser, deleteUser] = require("../controller/user")

router.get('/userdata', (req, res) => {
  try {
    data = req.body;
    result = getUserData(data);
    res.status(200).send(result);
  } catch (error) {
    res.status(500).send({msg : "Something Went wrong", "error":error})
  }
});
router.post('/createuser', (req, res) => {
  try {
    data = req.body;
    // result = createUser(data);
    // console.log(result);
    res.status(200).send(createUser(data));
  } catch (error) {
    res.status(500).send("Something Went wrong", error)
  }
});
router.put('/updateuser', (req, res) => {
  try {
    res.status(200).send(updateUser(data));
  } catch (error) {
    res.status(500).send("Something Went wrong", error)
  }
});
router.patch('/fixuser', (req, res) => {
  try {
    res.status(200).send(fixUser(data));
  } catch (error) {
    res.status(500).send("Something Went wrong", error)
  }
});
router.delete('/deleteuser', (req, res) => {
  try {
    res.status(200).send(deleteUser(data));
  } catch (error) {
    res.status(500).send("Something Went wrong", error)
  }
})

module.exports = router;