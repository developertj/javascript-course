const todoArray = [];
    function pushTodo(){
      const inputElement = document.querySelector('.input-todo')
      todoArray.push(inputElement.value);
      console.log(todoArray);
      inputElement.value = '';
    }