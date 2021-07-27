const express = require('express')
const cors = require('cors')
const app = express()
const mysql = require('mysql');


app.use(
  cors({
    origin: ["http://localhost:3000"],
    methods: ["GET", "POST"],
    credentials: true,
  })
);

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true }));


// Database Connection in MySql
var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '',
    database : 'eternity'
  });

  connection.connect();

  app.get("/users/get", (req, res) => {
    connection.query(`SELECT * FROM  users ORDER BY ID DESC`, (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    });
  });
  
  //  Card value input
    app.post("/users/insert", (req, res) => {
        const account = req.body.account;
        const username = req.body.username;
        const email = req.body.email;
        const biography = req.body.biography;
        connection.query("SELECT  account FROM users WHERE  account = '"+ account +"'", function(err, result){
          if(result.length === 1){
            let data = [username , email, biography, account];
            let QueryData = `UPDATE  users SET  UserName = ? ,Email = ?, Biography =  ? WHERE account = ?`;
              connection.query(QueryData, data, function ( err , result) {
              console.log(err)
              })
          }else{   
            let QueryData = "INSERT INTO `users`( `Account`,`UserName` ,`Email`, `Biography`) VALUES (?,?,?,?)"
              connection.query(QueryData, [account , username , email, biography], function ( err , result) {
               console.log(err)
            })
          }
        })
        }
    )

  app.listen(3001, () => {
    console.log(`Example app listening at http://localhost:3001`)
  });