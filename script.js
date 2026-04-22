function addTask() {
    const input = document.getElementById("taskInput");
    const taskText = input.value.trim();
    
    if (!taskText) return;
    
    const li = document.createElement("li");
    
    const span = document.createElement("span");
    span.textContent = taskText;
    
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.className = "deleteBtn";
    
    li.appendChild(span);
    li.appendChild(deleteBtn);
    
    document.getElementById("taskList").appendChild(li);
    
    input.value = "";
    saveTasks();
}

function saveTasks() {
    const listItems = document.querySelectorAll("#taskList li");
    let tasks = [];

    listItems.forEach(li => {
        const text = li.querySelector("span").textContent;
        const completed = li.querySelector("span").style.textDecoration.includes("line-through");

        tasks.push({ text, completed });
    });

    localStorage.setItem("tasks", JSON.stringify(tasks));
}

function loadTasks() {
    const tasks = JSON.parse(localStorage.getItem("tasks")) || [];

    const taskList = document.getElementById("taskList");
    taskList.innerHTML = "";

    tasks.forEach(task => {
        const li = document.createElement("li");

        const span = document.createElement("span");
        span.textContent = task.text;

        if (task.completed) {
            span.style.textDecoration = "line-through";
        }

        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Delete";
        deleteBtn.className = "deleteBtn";

        li.appendChild(span);
        li.appendChild(deleteBtn);

        taskList.appendChild(li);
    });
}

// Event delegation – ഒരു listener മതി എല്ലാറ്റിനും
document.getElementById("taskList").addEventListener("click", function(e) {
    // Delete ചെയ്യാൻ
    if (e.target.classList.contains("deleteBtn")) {
        e.target.closest("li").remove();
        saveTasks();
        return;
    }
    
    // Strike / unstrike ചെയ്യാൻ
    if (e.target.tagName === "SPAN") {
        const current = e.target.style.textDecoration;
        e.target.style.textDecoration = 
            current.includes("line-through") ? "none" : "line-through";
        saveTasks();
    }
});

// പേജ് ലോഡ് ആകുമ്പോൾ tasks കൊണ്ടുവരിക
loadTasks();