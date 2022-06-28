const express = require("express");
const router = express.Router(); 

router.get("/", (req, res) => {
  res.send({ data: "Here is your data" });
});

router.post("/", (req, res) => {
  res.send({ data: "Comments Created" });
});

router.put("/", (req, res) => {
  res.send({ data: "Comments Updated" });
});

router.delete("/", (req, res) => {
  res.send({ data: "Comments deleted :(" });
});

export default router;