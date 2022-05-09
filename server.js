// import dotenv from "dotenv";
import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import { router } from "./routes.js";

// dotenv.config();
const app = express();

app.use(bodyParser.json());
app.use(cors());
app.use(express.static("public"));

app.get("/", (req, res) => {
  console.log("server speaking");
}); //why do I need this here?

app.use("/", router);

const port = process.env.PORT || 6001;

app.listen(port, () => {
  console.log(`server is running on port: ${port}`);
});

// NEEDS:
// auto-emailer
// fix .env

// FRONT NEEDS:
// message sent confirmation
