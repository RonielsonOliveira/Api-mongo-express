const usuario = require("../models/usuario");
const Usuario = require("../models/usuario");
const view = require("../view/usuarios");;
const post = require("../models/post");
const postView = require("../view/post");

module.exports.listarUsuarios = function(req, res){
    let promise = Usuario.find().exec();
    promise.then(function(usuarios){
        res.status(200).json(view.renderMany(usuarios));
    }).catch(function(error){
        res.status(500).json({mensagem:"Error"});
    })
}

module.exports.inserirUsuario = function(req, res){
    let usuario = req.body;
    console.log(usuario)
    let promise = Usuario.create(usuario);
    promise.then(function(usuario){
        res.status(201).json(view.render(usuario));
    }).catch(function(error){
        res.status(400).json({mensagem:"erro na requisisao nao funcionou"})
    })
}

module.exports.buscarUsuarioPorId = function(req, res){
    let id = req.params.id;
    let promise = usuario.findById(id).exec();
    promise.then(function(usuario){
        res.status(200).json(view.render(usuario));
    }).catch(function(error){
        res.status(404).json({mensagem:"Usuario nao encontrado"});
    })
}
module.exports.buscarPostPorIdDoUsuario = function(req, res){
        let id = req.params.id;
        let promise = post.find({id_usuario:id}).populate("post").exec();
        promise.then(function(posts){
            res.status(200).json(postView.renderMany(posts));
        }).catch(function(error){
            res.status(500).json({mensagem:"Nao funcionou"});
        });

}
module.exports.removerUsuario = function(req, res){
    let id = req.params.id;
    let promise = Usuario.deleteOne({_id:id});
    promise.then(function(usuario){
        res.status(200).json({mensagem:"Usuario deletado"});
    }).catch(function(error){
        res.status(404).json({mensagem:"Usuario nao encontrado"});
    });
}