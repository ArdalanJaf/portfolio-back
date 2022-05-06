import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import asyncMySQL from "./mySQL/connection.js";

const app = express();

app.use(bodyParser.json());
app.use(cors());
app.use(express.static("public"));

app.post("/", (req, res) => {
  console.log(req.body);
});

async function getData() {
  const results = await asyncMySQL(`SELECT * FROM emails`);
  console.log(results[0]);
}
getData();

const port = process.env.PORT || 6001;

app.listen(port, () => {
  console.log(`server is running on port: ${port}`);
});
