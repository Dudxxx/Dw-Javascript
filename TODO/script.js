document.getElementById('btn').addEventListener('click', function() {
    const taskInput = document.getElementById('criar');
    const taskText = taskInput.value.trim();

    if (taskText !== '') {
        const placeholder = document.getElementById('placeholder');
        const clipboard = document.getElementById('clipboard');
        const noTasks = document.getElementById('no-tasks');

        if (clipboard) clipboard.classList.add('hidden');
        if (noTasks) noTasks.classList.add('hidden');

    
        setTimeout(() => {
            if (placeholder) placeholder.remove();
        }, 1000); 

        const task = document.createElement('div');
        task.className = 'task';

        const taskContent = document.createElement('span');
        taskContent.textContent = taskText;
        task.appendChild(taskContent);

        const completeButton = document.createElement('button');
        completeButton.textContent = 'Concluir';
        completeButton.addEventListener('click', function() {
            task.classList.toggle('complete');
        });
        task.appendChild(completeButton);

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Deletar';
        deleteButton.addEventListener('click', function() {
            task.remove();
        });
        task.appendChild(deleteButton);

        document.querySelector('.central').appendChild(task);

        taskInput.value = '';
    }
});