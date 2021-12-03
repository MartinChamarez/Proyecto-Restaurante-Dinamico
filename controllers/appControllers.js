
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
            res.render("./pages/menu",{data})
        }
    });
};

const renderCarnes =(req, res)=>{
    dataBaseConnection.query("SELECT * FROM carnes",(error, data)=>{
        if (error) {
            console.log(error)
        } else {
            
            res.render("./pages/menu", {data})
        }
    });
};

const renderHamburguesa =(req, res)=>{
    dataBaseConnection.query("SELECT * FROM hamburguesa",(error, data)=>{
        if (error) {
            console.log(error)
        } else {
            
            res.render("./pages/menu", {data})
        }
    });
};

const renderPastas =(req, res)=>{
    dataBaseConnection.query("SELECT * FROM pastas",(error, data)=>{
        if (error) {
            console.log(error)
        } else {
            
            res.render("./pages/menu", {data})
        }
    });
};

const renderPizza =(req, res)=>{
    dataBaseConnection.query("SELECT * FROM pizza",(error, data)=>{
        if (error) {
            console.log(error)
        } else {
            
            res.render("./pages/menu", {data})
        }
    });
};

const renderSandwich =(req, res)=>{
    dataBaseConnection.query("SELECT * FROM sandwich",(error, data)=>{
        if (error) {
            console.log(error)
        } else {
            
            res.render("./pages/menu", {data})
        }
    });
};

const renderMenu =(req, res)=>{
    dataBaseConnection.query("SELECT * FROM tarjetas",(error, data)=>{
        if (error) {
            console.log(error)
        } else {
            
            res.render("./pages/menu", {data})
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
    renderSandwich,
    renderMenu

};

