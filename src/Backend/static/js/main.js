const express = require("express");
const multer = require("multer");

const app = express();

const upload = multer();

app.post("/src/uploads", upload.any(), (req, res) => {
  console.log(req.files);
  res.setHeader("Access-Control-Allowe-Origin", "*");
  res.end("Done.");
});

app.listen(3000, () => {
   console.log('Server UP and run awaying')
})