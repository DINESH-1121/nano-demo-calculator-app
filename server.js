const express = require("express");
const app = express();

const PORT = process.env.PORT || 8080;

const baseUrl = "/calculator";

app.use(express.json());

const baseRouter = express.Router();

baseRouter.get("/greeting", (req, res) => {
  res.status(200);
  return res.send("Hello world!");
});

baseRouter.post("/add", (req, res) => {
    console.log(req.body.first);
    console.log(req.body.second);
    const first = req.body.first;
    const second = req.body.second;
    const result = first + second;
    res.status(200);
    res.json({ result: result });
  //   res.status(200);
  //   res.json({ result: null });
});

baseRouter.post("/subtract", (req, res) => {
    const first = req.body.first;
    const second = req.body.second;
    const result = first - second;

    res.status(200);
  res.json({ result: result });
});

app.use(baseUrl, baseRouter);
app.listen(PORT, () => {
  console.log("Server running at PORT", PORT);
});
