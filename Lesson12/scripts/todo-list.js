const todoArray = [{
  name: 'game',
  dueDate: '01-09-2003'
}];

renderTodoList();
document.querySelector('.js-add-button')
  .addEventListener('click', () => {
    pushTodo();
  });

function renderTodoList(){
  let todoListHTML = '';

  todoArray.forEach((todoObject, index) => {
    
    const { name,dueDate } = todoObject;
    const html = `
    <div class="js-name">
      ${name}
    </div>
    <div class="js-dueDate">
      ${dueDate}
    </div>
    <button class="js-delete-button js-delete-todo-button"
    >Delete</button>
    `;
    todoListHTML += html; 
  })
  
  document.querySelector('.js-todo-list')
      .innerHTML = todoListHTML;

  document.querySelectorAll('.js-delete-todo-button')
    .forEach((deleteButton, index)=> {
      deleteButton.addEventListener('click', () => {
        todoArray.splice(index, 1);
      renderTodoList();
      })
    })
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