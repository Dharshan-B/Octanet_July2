function addTask() {
    const taskInput = document.getElementById('new-task');
    const taskList = document.getElementById('task-list');

    if (taskInput.value.trim() === '') {
        alert('Please enter a task.');
        return;
    }

    const li = document.createElement('li');
    li.innerHTML = `
        ${taskInput.value}
        <button class="delete" onclick="deleteTask(this)">Delete</button>
    `;
    taskList.appendChild(li);

    taskInput.value = '';
}

function deleteTask(button) {
    const li = button.parentElement;
    li.remove();
}
