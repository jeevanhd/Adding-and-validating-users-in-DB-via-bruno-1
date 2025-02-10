const express = require("express");
const { resolve } = require("path");
const connectDb = require("./de");
const cors = require("cors");
const { route } = require("./Route/route");

const app = express();
const port = 3010;

app.use(express.static("static"));
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.sendFile(resolve(__dirname, "pages/index.html"));
});

app.use("/user", route);

app.listen(port, () => {
  connectDb();
  console.log(`Example app listening at http://localhost:${port}`);
});
