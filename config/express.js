const express = require ('express');
const bodyParser = require('body-Parser');
const routerUsuarios = require ("../app/routes/usuario");
const routerPosts = require ("../app/routes/posts");
const routerComentarios = require("../app/routes/comentario");
const { modelNames } = require('mongoose');

module.exports = function (){
    const app = express();
    
    app.set("port", 3000);
    app.use(express.static("./public"));
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: false}));
    routerPosts(app);
    routerUsuarios(app);
    routerComentarios(app);
    return app;
};