const todoTitle = document.querySelector('.app-text');
const addTodoButton = document.querySelector('.click-botton');
const todoList = document.querySelector('.show-list');
const iconheart = document.createElement('icon-h');

function removeTodo(event) {
  event.target.parentNode.remove();
}
function liketodo() {
    function addliketodo() {
        value+=1;
        shownumber.innerHTML = `Like :  ${value}`;
    }
  let value = 0;
  const shownumber = document.createElement('text');

  const todo = document.createElement('div');
  todo.classList.add('todo');

  const text = document.createElement('text');
  text.innerHTML = todoTitle.value;

  const button1 = document.createElement('button');
  button1.type = 'button';
  button1.classList.add('addlike-todo');
  button1.innerHTML = 'LIKE';
  button1.addEventListener('click', addliketodo);
  
  const button2 = document.createElement('button');
  button2.type = 'button';
  button2.classList.add('delete-todo');
  button2.innerHTML = 'DELETE';
  button2.addEventListener('click', removeTodo);
  
  todo.append(text, button1, button2, shownumber);

  todoList.prepend(todo);
}

addTodoButton.addEventListener('click', liketodo);