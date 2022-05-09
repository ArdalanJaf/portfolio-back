import queries from "./mySQL/queries.js";
import pConnection from "./mySQL/connection.js";
import express from "express";
import { isJoiErrors } from "./joiValidator.js";
export const router = express.Router();

router.post("/messaging", async (req, res) => {
  try {
    const isJoiErrorsResults = await isJoiErrors(req.body);

    if (isJoiErrorsResults === false) {
      const { email, name, message } = req.body;

      // 1. Store data in SQL database.
      await pConnection(queries.addEmail(email));
      let results = await pConnection(queries.getEmailId(email));
      let email_id = results[0].id;
      await pConnection(queries.addName(name, email_id));
      await pConnection(queries.addMessage(message, email_id));

      // 2. Email message to me.

      // 3. Tell front-end it worked.
      res.send({ status: 1 });
    } else {
      console.log("err recieved");
      // Send validation-errors to front-end.
      res.send({ status: 1, joiErrors: isJoiErrorsResults });
    }
  } catch (error) {
    res.send({ status: 0 });
  }
});

// const obj = {
//   email: "test@4.44444",
//   name: "t4st",
//   message: "yo, whats up 44444",
// };

// const test = async (obj) => {
//   let results = await pConnection(queries.addEmail(obj.email));
//   let email_id = results.insertId;
//   await pConnection(queries.addName(obj.name, email_id));
//   await pConnection(queries.addMessage(obj.message, email_id));
// };

// test(obj);
