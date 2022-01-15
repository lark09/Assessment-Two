var Todo = require('../models/todo');

module.exports = {
  index,
  create,
  delete: deleteTodo,
};


function deleteTodo(req, res) { 
  Todo.deleteOne(req.params.id);
  res.redirect('/todos');
}

function create(req, res) {
  Todo.create(req.body.todo);
  res.redirect('/todos');
}



function index(req, res) {
  res.render('todos/index', {
    todos: Todo.getAll(),
  });
}

