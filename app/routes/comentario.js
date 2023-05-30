const controller = require ("../controller/comentarios")

module.exports = function (app){
    app.post ("/api/comentarios", controller.inserirComentarioNoPost);
    app.get("/api/comentarios", controller.listarComentarios);
    app.delete("/api/comentarios/:id",controller.removerComentario);


}