// Seleção de elementos
const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const taskList = document.getElementById('taskList');

// Array para armazenar as tarefas
let tasks = [];

// Adiciona uma tarefa
function addTask() {
    const taskDescription = taskInput.value.trim();
    
    if (taskDescription === '') return; // Validação para não adicionar tarefas em branco

    const newTask = {
        description: taskDescription,
        completed: false
    };

    tasks.push(newTask);
    renderTasks();
    taskInput.value = ''; // Limpa o campo de input
}

// Renderiza as tarefas na lista
function renderTasks() {
    taskList.innerHTML = '';

    tasks.forEach((task, index) => {
        const li = document.createElement('li');
        li.className = `task-item ${task.completed ? 'completed' : ''}`;

        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.className = 'checkbox';
        checkbox.checked = task.completed;
        checkbox.onclick = () => toggleCompleteTask(index);

        const descriptionSpan = document.createElement('span');
        descriptionSpan.className = 'description';
        descriptionSpan.textContent = task.description;

        const removeBtn = document.createElement('button');
        removeBtn.textContent = 'x'; // Altera para "x"
        removeBtn.className = 'btn remove';
        removeBtn.onclick = () => removeTask(index);

        li.appendChild(checkbox);
        li.appendChild(descriptionSpan);
        li.appendChild(removeBtn);
        taskList.appendChild(li);
    });
}

// Alterna o estado de completada de uma tarefa
function toggleCompleteTask(index) {
    tasks[index].completed = !tasks[index].completed;
    renderTasks();
}

// Remove uma tarefa da lista
function removeTask(index) {
    tasks.splice(index, 1);
    renderTasks();
}

// Evento para adicionar tarefa ao clicar no botão
addTaskBtn.onclick = addTask;

// Evento para adicionar tarefa ao pressionar "Enter"
taskInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        addTask();
    }
});
