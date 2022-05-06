import mysql from "mysql";

const connection = mysql.createConnection({
  database: "portfolio-contact",
  user: "root",
  password: "",
  host: "localhost",
  port: 3306,
});

connection.connect();

function asyncMySQL(query) {
  return new Promise((resolve, reject) => {
    connection.query(query, (err, results) => {
      if (err) {
        reject();
      }
      resolve(results);
    });
  });
}
export default asyncMySQL;
