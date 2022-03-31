const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  console.log(req.headers);
  console.log(req.cookies);
  res.sendStatus(200);
});
router.post("/", (req, res) => {
  console.log(req.body); // 클라이언트에서 보낸 데이터가 담긴다.
  let data = req.body;
  res.sendStatus(200);
  res.send(data); // res.status(200).send(data) 합쳐서 쓸수있다.
});
module.exports = router;
