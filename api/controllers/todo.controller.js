const Todo = require('../model/Todo');

// listar todos os items
exports.findAll = (req,res) => {
    Todo.findAll().then(todos => {
        res.status(200).json(todos);
    });
}

// criar novo item
exports.create = async (req, res) => {

    try{

        await Todo.create({  
            description: req.body.description,
            isDone: false
        }).then(todo => {    
            res.status(200).json({
                'todo': todo,
                'message' : 'Item da lista adicionado com sucesso'
            });
        });
    }catch (error) {
        console.log(error);
        res.send({ code: 500, failed: "Algum erro ocorreu em sua requisiçao"});
    }
       
}

// atualizar item existente
exports.update = async (req, res) => {

    try{
        const todo = await Todo.findByPk(req.params.id);

        if(!todo){
            res.status(400).json({
                'message': `Item nao encontrado`
            });
        }
        
        todo.update(
            {description: req.body.description},
            { where: {id: req.params.id} }

        ).then((todo) => {
            res.status(200).json({
                'todo': todo,
                'message': `Item da lista editado com sucesso editado com sucesso`
            });
        })

    }catch (error) {
        console.log(error);
        res.send({ code: 500, failed: "Algum erro ocorreu em sua requisiçao"});
    }
    
}


// marcar item como completo
exports.complete = async (req, res) => {

    try{
        const todo = await Todo.findByPk(req.params.id);

        if(!todo){
            res.status(400).json({
                'message': `Item nao encontrado`
            });
        }
        
        todo.update(
            {isDone: !todo.isDone},
            { where: {id: req.params.id} }

        ).then((todo) => {
            res.status(200).json({
                'todo': todo,
                'message': `Item da lista completado com sucesso`
            });
        })

    }catch (error) {
        console.log(error);
        res.send({ code: 500, failed: "Algum erro ocorreu em sua requisiçao"});
    }

}

