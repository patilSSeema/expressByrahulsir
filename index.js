//confiure express
import express from "express";
const app = express();

app.get("/", (req, res) => {
  res.status(404).send("hello from express using get");
});

app.listen(3000, () => {
  console.log("server started on port 3000");
});
