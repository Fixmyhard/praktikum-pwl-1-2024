const todoForm = document.getElementById('todo-form');
const todoInput = document.getElementById('todo-input');
const todoList = document.getElementById('todo-list');

todoForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const todoText = todoInput.value.trim();
    if (!todoText) return;

    const todoItem = document.createElement('li');
    todoItem.className = 'flex items-center justify-between bg-white p-2 rounded shadow';

    todoItem.innerHTML = `
        <input type="checkbox" class="mr-2" onchange="this.nextElementSibling.classList.toggle('line-through', this.checked)">
        <span class="flex-grow">${todoText}</span>
        <button class="ml-2 p-1 bg-red-500 text-white rounded" onclick="this.parentElement.remove()">Delete</button>
    `;

    todoList.appendChild(todoItem);
    todoInput.value = '';
});
