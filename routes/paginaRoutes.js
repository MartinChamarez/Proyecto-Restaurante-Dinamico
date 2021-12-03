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
    renderMenu
    
} = require('../controllers/appControllers')

routes.get('/',renderHome);

routes.get('./menu/bebidas',renderBebidas);

routes.get("./menu/carnes", renderCarnes);

routes.get("./menu/hamburguesa", renderHamburguesa);

routes.get("./menu/pastas", renderPastas);

routes.get("./menu/pizza", renderPizza);

routes.get("./menu/sandwich", renderSandwich);

routes.get("./menu", renderMenu);

module.exports = routes;
