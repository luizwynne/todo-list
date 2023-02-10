const { check, validationResult } = require('express-validator');

// validacao de item correto para criacao de item na lista
exports.validateCreateTodo = [

    check('description').not().isEmpty().isLength({ min: 3 }),

    (req, res, next) => {

        const errors = validationResult(req);

        if (!errors.isEmpty()){
            return res.status(422).json({errors: errors.array()});
        }
          
        next();
    }
    
]

// validacao de payload correto para atualizacao de item na lista
exports.validateUpdateTodo = [

  check('description').not().isEmpty().isLength({ min: 3 }),

  (req, res, next) => {

      const errors = validationResult(req);

      if (!errors.isEmpty()){
        return res.status(422).json({errors: errors.array()});
      }
        
      next();
  }

]