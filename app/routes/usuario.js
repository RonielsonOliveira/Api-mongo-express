const controller = require("../controller/usuarios");

module.exports = function(app){
    app.post ("/api/usuarios", controller.inserirUsuario);
    app.get ("/api/usuarios", controller.listarUsuarios);
    app.get("/api/usuarios/:id", controller.buscarUsuarioPorId);
    app.get("/api/usuarios/:id/posts", controller.buscarPostPorIdDoUsuario);
    app.delete("/api/usuarios/:id", controller.removerUsuario);
}