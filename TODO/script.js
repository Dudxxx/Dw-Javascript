document.getElementById('btn').addEventListener('click', function() {
    const taskInput = document.getElementById('criar');
    const taskText = taskInput.value.trim();

    if (taskText !== '') {
        // Get the placeholder container and images
        const placeholder = document.getElementById('placeholder');
        const clipboard = document.getElementById('clipboard');
        const noTasks = document.getElementById('no-tasks');

        // Apply the hidden class to the images to trigger the animation
        if (clipboard) clipboard.classList.add('hidden');
        if (noTasks) noTasks.classList.add('hidden');

        // Remove the placeholder after the animation completes
        setTimeout(() => {
            if (placeholder) placeholder.remove();
        }, 1000); // Duration of the animation (1s)

        // Create a new task element
        const task = document.createElement('div');
        task.className = 'task';

        const taskContent = document.createElement('span');
        taskContent.textContent = taskText;
        task.appendChild(taskContent);

        // Create complete button
        const completeButton = document.createElement('button');
        completeButton.textContent = 'Concluir';
        completeButton.addEventListener('click', function() {
            task.classList.toggle('complete');
        });
        task.appendChild(completeButton);

        // Create delete button
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Deletar';
        deleteButton.addEventListener('click', function() {
            task.remove();
        });
        task.appendChild(deleteButton);

        // Append the new task to the central container
        document.querySelector('.central').appendChild(task);

        // Clear the input field
        taskInput.value = '';
    }
});
