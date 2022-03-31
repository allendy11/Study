const http = require("http");
const fs = require("fs");

const port = 4000;
const header = defaultCorsHeader;
header["Content-Type"] = "application/json";
const server = http.createServer((req, res) => {
  if (req.method === "OPTIONS") {
    res.writeHead(header);
    res.end();
  }
  //! localData.txt는 각 객체 형태의 데이터를 담고 있는 배열을 저장한다고 가정
  if (req.method === "GET") {
    // localData.txt 파일을 읽어와서 파싱후 클라이언트에 전달
    let localData = JSON.parse(fs.readFileSync("localData.txt", "utf8"));
    res.writeHead(header);
    res.end(localData);
  }
  if (req.method === "POST") {
    // 클라이언트로부터 받은 데이터를 localData에 저장
    res
      .on("data", (chunk) => {
        let data = JSON.parse(chunk); // 클라이언트로 부터 받은 문자열은 JSON 문자열이기 때문에 데이터를 다루기 위해서는 파싱작업 필요
        let localData = JSON.parse(fs.readFileSync("localData.txt", "utf8")); // localData를 불러와서 파싱후 데이터를 푸시 -> 다시 덮어씀
        localData.push(data);
        fs.writeFileSync("localData.txt", "utf8");
      })
      .on("end", () => {
        console.log("complete");
      });
  }
});
server.listen(port, () => {
  console.log(`listen on ${port}`);
});
const defaultCorsHeader = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Accept",
  "Access-Control-Max-Age": 10,
};
