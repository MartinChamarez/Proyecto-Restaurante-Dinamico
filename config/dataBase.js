const mysql = require('mysql2');

const dataBaseConnection=mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'productos' //Nombre de Data Base
});

dataBaseConnection.connect((error)=>{
    if(error){
        console.log(error);
    }else{
        console.log("Server conectado a DB")
    }
});

module.exports = dataBaseConnection;
