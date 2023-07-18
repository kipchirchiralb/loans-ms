const express = require("express");
const mysql = require("mysql");
const conn = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "lms",
});
const app = express();

app.get("/", (req, res) => {
  // members list
  conn.query("SELECT * FROM members", (dberr, data) => {
    if (dberr) {
      res.send("Database Error occured");
    } else {
      console.log(data);
      res.render("home.ejs", { members: data });
    }
  });
});

app.get("/loans", (req, res) => {
  // all loans list
  console.log("clall back called!!");
  res.render("loans.ejs");
});

app.get("/loan/memberid", (req, res) => {
  // all loans
  res.render("loan.ejs");
});
app.get("/payments/memberid", (req, res) => {
  // all loans
  res.render("pay.ejs");
});

app.listen(3000, () => console.log("App running and listening on port 3000"));
