const mysql = require("mysql2");

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "gestion_enseignants"
});

db.connect((err)=>{
  if(err){
    console.log(err);
  }else{
    console.log("Connexion MySQL réussie");
  }
});

module.exports = db;