import mysql from 'mysql';

const con = mysql.createConnection({
  host: process.env.DATABASE_HOST,
  user: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  database : 'eris'
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Database Connected!");
});

export default con;