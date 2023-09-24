const todoArray = [{
  name: 'game',
  dueDate: '01-09-2003'
}];

renderTodoList();

function renderTodoList(){
  let todoListHTML = '';

  todoArray.forEach(function(todoObject, index){
    
    const { name,dueDate } = todoObject;
    const html = `
    <div class="js-name">
      ${name}
    </div>
    <div class="js-dueDate">
      ${dueDate}
    </div>
    <button class="js-delete-button" onclick="
      todoArray.splice(${index}, 1);
      renderTodoList();
    ">Delete</button>
    `;
    todoListHTML += html; 
  })
  
  document.querySelector('.js-todo-list')
      .innerHTML = todoListHTML;
}

function pushTodo(){
  const inputElement = document.querySelector('.input-todo');
  const inputDuedateElement = document.querySelector('.js-dueDate');
  const name = inputElement.value
  const dueDate = inputDuedateElement.value
  todoArray.push(
    {name: name,
     dueDate: dueDate}
    );
  console.log(todoArray);
  inputElement.value = '';
  inputDuedateElement.value = '';
  renderTodoList();
}