const express = require('express')
const Routes = require("./routes/index");

const app = express();
const port = 8000;

app.use("/", Routes)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`)
});