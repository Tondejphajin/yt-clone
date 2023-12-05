import express from "express";
import Ffmpeg from "fluent-ffmpeg";

const app = express();
app.use(express.json());

app.get("/ping", (req, res) => {
  res.send("pong");
});

app.post("/process", (req, res) => {
  const inputFilePath = req.body.inputFilePath;
  const outputFilePath = req.body.outputFilePath;

  if (!inputFilePath || !outputFilePath) {
    res.status(400).send({ error: "missing file path" });
  }

  Ffmpeg(inputFilePath)
    .outputOption("-vf", "scale=-1:360")
    .on("end", () => {
      res.status(200).send("Processing finished successfully.");
    })
    .on("error", (error) => {
      console.log(`An error occurred: ${error}`);
      res.status(500).send({ error: `internal error: ${error}` });
    })
    .save(outputFilePath);
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
