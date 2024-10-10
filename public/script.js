// script.js

// Show a confirmation dialog when deleting a task
const deleteButtons = document.querySelectorAll('.delete-btn');

deleteButtons.forEach(button => {
    button.addEventListener('click', function (event) {
        const confirmed = confirm("Are you sure you want to delete this task?");
        if (!confirmed) {
            event.preventDefault();  // Prevent form submission if not confirmed
        }
    });
});

// Show an alert when a new task is added
const form = document.querySelector('form');
form.addEventListener('submit', function() {
    const taskInput = document.querySelector('input[name="newTask"]');
    if (taskInput.value) {
        alert(`Task "${taskInput.value}" added!`);
    }
});
