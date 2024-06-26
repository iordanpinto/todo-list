document.addEventListener("DOMContentLoaded", () => {
  const taskInput = document.getElementById("new-task-input");
  const taskList = document.getElementById("taskList");
  const addTaskButton = document.getElementById("addTask");

  
  addTaskButton.addEventListener("click", (event) => {
    event.preventDefault();
    const task = taskInput.value;
    addTask(task);
  });

  function addTask(task) {
    const listItem = document.createElement("li");
    listItem.innerHTML =
      `

      <span>${task}</span> <button class="delete-button">x</button>
      <button class="completed-button">✓</button>`;


    taskList.appendChild(listItem);

    const deleteButton = listItem.querySelector(".delete-button");
    deleteButton.addEventListener("click", () => {
      listItem.remove();
    });

    const completedButton = listItem.querySelector(".completed-button");
    completedButton.addEventListener("click", () => {
      listItem.classList.toggle("completed");
    });
  }
});
