const express = require("express");
const router = express.Router();
const { getComments, getUserComments, postComment } = require("../controllers");
router.get("/", getComments);
router.post("/", postComment);

module.exports = router;
