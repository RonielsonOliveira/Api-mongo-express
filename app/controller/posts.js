const post = require("../models/post");
const Post = require("../models/post");
const view = require("../view/post");

const usuario = require("../models/usuario");
const comentario = require("../models/comentario");
const viewComentario = require("..//view/comentario")
module.exports.inserirPost = function(req, res){
    let id_usuario = req.body.id_usuario;
    let texto = req.body.texto;
    let likes = req.body.likes;
    let promise = Post.create({texto: texto,likes: likes, id_usuario:id_usuario});
    promise.then(function(post){
        res.status(201).json(view.render(post));
    }).catch(function(error){
        res.status(500).json({mensagem: "erro na requisicao nao funcionou!!"});
    })
    
}

module.exports.listarPosts = function(req, res){
    let promise = post.find().exec();
    promise.then(function(posts){
        res.status(200).json(view.renderMany(posts));

    }).catch(function(error){
        res.status(500).json({mensagem:"Error"});
    })
}

module.exports.buscarPostPorId = function(req, res){
    let id = req.params.id;
    let promise = Post.findById(id).exec();
    promise.then(function(post){
        res.status(200).json(view.render(post));
    }).catch(function(error){
        res.status(404).json({mensagem:"Post nao encontrado"});
    })
}

module.exports.buscarComentariosPorIdPost = function(req,res){
    let id = req.params.id;
    let promise = comentario.find({id_post:id}).populate("comentario").exec();
    promise.then(function(comentarios){
        res.status(200).json(viewComentario.renderMany(comentarios));
    }).catch(function(error){
        res.status(500).json({mensagem:"Error"});
    });

}

module.exports.removerPost = function(req,res){
    let id = req.params.id;
    let promise = Post.deleteOne({_id:id});
    promise.then(function(post){
        res.status(200).json({mensagem:"Post deletado"});
    }).catch(function(error){
        res.status(404).json({mensagem:"Post nao encontrado"});
    });
}