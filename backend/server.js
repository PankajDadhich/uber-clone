const http = require("http");
const app = require("./app");
const server = http.createServer(app);
const Prot = process.env.PORT || 3000;

server.listen(Prot, () => {
  console.log(`server is running on ${Prot}`);
});
