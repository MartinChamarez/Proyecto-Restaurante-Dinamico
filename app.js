const express = require('express');
const app = express();
const routes = require('./routes/paginaRoutes');
const path = require('path');  
const dataBaseConnection = require('./config/dataBase');
const port = process.env.PORT || 3000;

dataBaseConnection.connect();

app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.set("views", path.join(__dirname,"views"));             
app.set('view engine', 'ejs');                            
app.use(express.static(path.join(__dirname,"public")))

//rutas para data base
app.use("",routes)

app.listen(port,()=>{
    console.log("Corriendo por el puerto " + port);
})