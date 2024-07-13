document.addEventListener("DOMContentLoaded", function () {
    // Get references to relevant elements
    const tasksList = document.getElementById("tasks");
    const newTaskInput = document.getElementById("newTask");
    const dueDateInput = document.getElementById("due-date");
    const addTaskButton = document.getElementById("addTask");

    // Initialize an empty array to store tasks
    const tasks = [];

    // Function to add a new task
    function addTask() {
        const taskText = newTaskInput.value.trim();
        const dueDate = dueDateInput.value.trim();

        if (taskText) {
            // Create a new task object
            const task = {
                text: taskText,
                date: dueDate,
                completed: false,
            };

            // Add the task to the tasks array
            tasks.push(task);

            // Clear input fields
            newTaskInput.value = "";
            dueDateInput.value = "";

            // Update the tasks list display
            displayTasks();
        }
    }

    // Function to display tasks in the list
    function displayTasks() {
        tasksList.innerHTML = ""; // Clear existing tasks
        tasks.forEach((task, index) => {
            const listItem = document.createElement("li");
            listItem.textContent = `▶    ${task.text} [     Due   : ${task.date}  ]`;
        
            // Add a delete button for each task
            const deleteButton = document.createElement("button");
            deleteButton.textContent = "❌";
            deleteButton.classList.add("delete-btn"); 
            deleteButton.addEventListener("click", () => deleteTask(index));
            listItem.appendChild(deleteButton);
        
            tasksList.appendChild(listItem);
        });
    }

    // Function to delete a task
    function deleteTask(index) {
        tasks.splice(index, 1); // Remove the task at the specified index
        displayTasks(); // Update the tasks list display
    }

    // Event listener for the "Add Task" button
    addTaskButton.addEventListener("click", addTask);

    // Initial display of tasks
    displayTasks();
});
