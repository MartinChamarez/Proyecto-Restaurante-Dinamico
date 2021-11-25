const express = require('express');
const app = express();
const routes = require('./routes/paginaRoutes');
const path = require('path');  
const dataBaseConnection = require('./config/dataBase');

dataBaseConnection.connect();

app.use(express.json());


app.set("views", path.join(__dirname,"views"));             
app.set('view engine', 'ejs');                            
app.use(express.static(path.join(__dirname,"public")))

//rutas para data base
app.use("/",routes)

app.listen(3000,()=>{
    console.log("Corriendo por el puerto 3000");
})