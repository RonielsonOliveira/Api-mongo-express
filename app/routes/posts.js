const controller = require("../controller/posts");

module.exports = function(app){
   
    app.post("/api/posts", controller.inserirPost);
    app.get("/api/posts", controller.listarPosts);
    app.get("/api/post/:id" , controller.buscarPostPorId);
    app.get("/api/posts/:id/comentarios", controller.buscarComentariosPorIdPost);
    app.delete("/api/post/:id", controller.removerPost);

   

}