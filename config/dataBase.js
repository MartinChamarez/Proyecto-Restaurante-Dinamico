const mysql = require('mysql2');

const dataBaseConnection=mysql.createConnection({
    host: 'bp9hcyenvt8pxa1tixbh-mysql.services.clever-cloud.com',
    user: 'ugwutpqdi3gbjc0o',
    database: 'bp9hcyenvt8pxa1tixbh',
    password: 'FkH00NYOoxcuO2jxQ3fZ'
});

dataBaseConnection.connect((error)=>{
    if(error){
        console.log(error);
    }else{
        console.log("Server conectado a DB")
    }
});

module.exports = dataBaseConnection;
