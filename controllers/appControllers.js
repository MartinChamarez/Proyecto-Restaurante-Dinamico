
const dataBaseConnection = require('../config/dataBase');


const renderHome =(req, res)=>{
    dataBaseConnection.query("SELECT * FROM tarjetas",(error,data)=>{
        if (error) {
            console.log(error)
        } else {
            res.render("./index",{data})
        }
    });
};

const renderBebidas = (req, res) => {

    dataBaseConnection.query("SELECT * FROM bebidas",(error,data)=>{
        if (error) {
            console.log(error)
        } else {
            res.render("./pages/bebidas",{data})
        }
    });
};

const renderCarnes =(req, res)=>{
    dataBaseConnection.query("SELECT * FROM carnes",(error, data)=>{
        if (error) {
            console.log(error)
        } else {
            
            res.render("./pages/carnes", {data})
        }
    });
};

const renderHamburguesa =(req, res)=>{
    dataBaseConnection.query("SELECT * FROM hamburguesa",(error, data)=>{
        if (error) {
            console.log(error)
        } else {
            
            res.render("./pages/hamburguesa", {data})
        }
    });
};

const renderPastas =(req, res)=>{
    dataBaseConnection.query("SELECT * FROM pastas",(error, data)=>{
        if (error) {
            console.log(error)
        } else {
            
            res.render("./pages/pastas", {data})
        }
    });
};

const renderPizza =(req, res)=>{
    dataBaseConnection.query("SELECT * FROM pizza",(error, data)=>{
        if (error) {
            console.log(error)
        } else {
            
            res.render("./pages/pizza", {data})
        }
    });
};

const renderSandwich =(req, res)=>{
    dataBaseConnection.query("SELECT * FROM sandwich",(error, data)=>{
        if (error) {
            console.log(error)
        } else {
            
            res.render("./pages/sandwich", {data})
        }
    });
};

module.exports = {
    renderHome,
    renderBebidas,
    renderCarnes,
    renderHamburguesa,
    renderPastas,
    renderPizza,
    renderSandwich

};

