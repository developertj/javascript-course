const todoArray = [];

renderTodoList();

function renderTodoList(){
  let todoListHTML = '';

  for(let i = 0; i < todoArray.length; i++){
    const todo = todoArray[i];
    const html = `<p>${todo}</p>`;
    todoListHTML += html;
    document.querySelector('.js-todo-list')
      .innerHTML = todoListHTML;
  }
  console.log(todoListHTML);
}

    function pushTodo(){
      const inputElement = document.querySelector('.input-todo')
      todoArray.push(inputElement.value);
      console.log(todoArray);
      inputElement.value = '';
      renderTodoList();
    }