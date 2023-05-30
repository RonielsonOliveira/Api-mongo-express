const comentario = require("../models/comentario");
const Comentario = require("../models/comentario");
const view  = require ("../view/comentario");



module.exports.inserirComentarioNoPost = function (req, res){
        let id_usuario = req.body.id_usuario;
        let texto = req.body.texto;
        let id_post = req.body.id_post;
        let promise =  Comentario.create({texto: texto, id_post:id_post, id_usuario:id_usuario});
        promise.then(function(comentario){
            res.status(201).json(view.render(comentario));
        }).catch(function(error){
            res.status(500).json({mensagem:"erro na requisicao!!"});
        })
    }

module.exports.listarComentarios = function(req, res){
        let promisse = Comentario.find().exec();
        promisse.then(function(comentarios){
            res.status(200).json(view.renderMany(comentarios));
        }).catch(function(error){
            res.status(500).json({mensagem:"Error"});
        })
    }

    
module.exports.removerComentario = function (req, res){
    let id = req.params.id;
    let promise = Comentario.deleteOne({_id:id});
    promise.then(function(comentario){
        res.status(200).json({mensagem:"Comentario deletado"})
    }).catch(function(error){
        res.status(404).json({mensagem:"Comentario nao encontrado"});
    });
}