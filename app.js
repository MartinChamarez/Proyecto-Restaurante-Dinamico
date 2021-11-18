const express = require('express');
const path = require('path');       
//const info = require('./tarjetasJSON.json');

const app = express();

app.set("views", path.join(__dirname,"views"));             
app.set('view engine', 'ejs');                            
app.use(express.static(path.join(__dirname,"public")))

app.get('/',(req, res)=>{
    res.render ("index");
})

app.get('/pages/pizza.ejs',(req,res)=>{
    res.render('../views/pages/pizza.ejs');
});

app.get('/pages/hamburguesa.ejs',(req,res)=>{
    res.render('../views/pages/hamburguesa.ejs');
});

app.get('/pages/canes.ejs',(req,res)=>{
    res.render('../views/pages/canes.ejs');
});

app.get('/pages/pastas.ejs',(req,res)=>{
    res.render('../views/pages/pastas.ejs');
});

app.get('/pages/sandwich.ejs',(req,res)=>{
    res.render('../views/pages/sandwich.ejs');
});

app.get('/pages/bebibas.ejs',(req,res)=>{
    res.render('../views/pages/bebibas.ejs');
});

app.get('/views/index.ejs',(req,res)=>{
    res.render('../views/index.ejs');
});

app.get('/pages/carrito.ejs',(req,res)=>{
    res.render('../views/pages/carrito.ejs');
});


app.use(express.json());

app.listen(3000,()=>{
    console.log("Corriendo por el puerto 3000");
})