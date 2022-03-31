const http = require("http");
const express = require("express");
const cors = require("cors");
// const bodyParser = require("body-parser"); //! 최신 버전에서는 express 미들웨어로 내장되어 있으므로 설치 하지않아도 된다.
// const jsonParser = bodyParser.json() //! bodyParser 와 함께 사용되며 req.body 에 클라이언트로 부터 받은 데이터가 JSON형태로 들어가게 된다. (역시 위의 이유로 사용되지 않는다.)
const cookieParser = require("cookieParser");
const indexRouter = require("./indexRouter");

const app = express();
const port = 4000;

const server = http.createServer((req, res) => {
  app.use(cors()); // 모든 cors 허용
  app.use(express.json()); // bodyParser 대신하는 express 미들웨어
  app.use(express.urlencoded({ extended: false })); // false로 하게되면 queryString 사용, qs 라이브러리를 사용한다면 true
  app.use(cookieParser()); // 쿠키에 쉽게 접근가능하거나 다양한 메소들사용이 가능 req.cookies 에 쿠키가 담긴다
  app.use(express.static(path.join(__dirname, "public"))); // 정적 파일을 설정한 경로에서 접근가능하게 하는 미들웨어

  app.use("/", indexRouter);
});

server.listen(port, () => {
  console.log(`listen on ${port}`);
});
