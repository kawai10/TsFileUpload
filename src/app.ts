import express from "express";

const app = express();

app.use("/", (req, res) => {
  res.send("welcome");
});

app.listen(8080);
