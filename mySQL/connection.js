import mysql from "mysql";

const connection = mysql.createConnection({
  database: "portfolio-contact",
  user: "root",
  password: "",
  host: "localhost",
  port: "3306",
});
// still not detecting env...
// console.log(process.env);

connection.connect();

function pConnection(query) {
  return new Promise((resolve, reject) => {
    connection.query(query, (err, results) => {
      if (err) {
        console.log("SQL rejected request: " + err);
        reject();
      }
      resolve(results);
    });
  });
}
export default pConnection;
