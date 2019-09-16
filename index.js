	//dependencies
const express = require("express");
const bodyParser = require("body-parser");

//initialization-boilerplate
const app = express();
app.use(bodyParser.json());

//custom initialization
const port = 3002;
const ipAddress = "0.0.0.0";
const users = { jubi: "jubi", pritam: "12345" };

//listen to defined address
app.listen(port, ipAddress, () =>
  console.log(`Login app listening on ${ipAddress}:${port}!`)
);

//serve assets folder
app.use(express.static("assets"));

//routing index.html file to path '/'
app.get("/", (req, res) => {
  res.sendFile("assets/index.html");
});

//listening to login post request
app.post("/loginApi", (req, res) => {
  if (req.body.username && Object.keys(users).includes(req.body.username)) {
    if (users[req.body.username] == req.body.password) {
      res.json({ status: "success" });
      return;
    }
  }
  res.json({ status: "denied" });
});
