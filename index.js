const taskInput = document.querySelector("#task-input");
const taskList = document.querySelector(".task-list");

taskInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    addTask();
  }
});

function addTask() {
  const taskText = taskInput.value;

  // checking for not empty
  if (taskText === "") {
    alert("please Enter Text");
    return;
  }

  // create a new li element for task
  const li = document.createElement("li");
  li.classList.add("li");

  // hold the text
  const taskContent = document.createElement("span");
  taskContent.textContent = taskText;

  // create a delete button
  const dltBtn = document.createElement("button");
  dltBtn.classList.add("dlt-btn");
  dltBtn.innerHTML = '<i class="fa-solid fa-xmark"></i>';

  // delete task
  dltBtn.addEventListener("click", () => {
    li.remove();
  });
  li.addEventListener("click", function(){
    this.classList.toggle("checked")
  })

  // Append task content and delete -------
  li.appendChild(taskContent);
  li.appendChild(dltBtn);

  taskList.insertBefore(li, taskList.firstChild);

  taskInput.value = "";
}

