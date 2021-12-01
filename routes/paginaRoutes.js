const express = require('express');

const routes= express.Router();

const {
    renderHome,
    renderBebidas,
    renderCarnes,
    renderHamburguesa,
    renderPastas,
    renderPizza,
    renderSandwich,
    renderCarrito} = require('../controllers/appControllers')

routes.get('/',renderHome);

routes.get('/bebidas',renderBebidas);

routes.get("/carnes", renderCarnes);

routes.get("/hamburguesa", renderHamburguesa);

routes.get("/pastas", renderPastas);

routes.get("/pizza", renderPizza);

routes.get("/sandwich", renderSandwich);

routes.get('/carrito',renderCarrito);

module.exports = routes;
