const todos = [
    {id: 123455, todo: 'Walk Fish'},
    {id: 655432, todo: 'Milk Oats'},
    {id: 139007, todo: 'sweep grass'}
  ];

  module.exports = {
    getAll,
    create,
    deleteOne,
  };
  
  function create(todo){
    console.log(todo, "<--todo", todos)
    todos.push({todo, id:Date.now() % 10000000});
  }

  function deleteOne(id){
    const idx = todos.findIndex(todo => todo.id === parseInt(id));
    todos.splice(idx, 1);
}

  function getAll() {
    return todos;
  }
  
  
