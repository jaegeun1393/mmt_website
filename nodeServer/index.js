const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const fileupload = require("express-fileupload");

app.use(fileupload());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public/"));

app.post("/", (req, res) => {
  const newpath = __dirname + "/public/files/";
  const file = req.files.file;
  const filename = file.name;
  const pathForClient = `files/${filename}`;

  let save = `${newpath}${filename}`;
  file.mv(save, (err) => {
    if (err) {
      return res.status(500).send({ message: "File upload failed", code: 200, save });
    }
    return res.status(200).json({
      data: pathForClient,
    });
  });
});

app.listen(5000, () => {
  console.log("connected");
});
