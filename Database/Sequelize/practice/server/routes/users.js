var express = require("express");
var router = express.Router();
const { addUser, getUserComments } = require("../controllers");
/* GET users listing. */
router.post("/", addUser);
router.get("/:id", getUserComments);
module.exports = router;
