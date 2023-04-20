// TODO:
function attachEvents() {
    const BASE_URL = "http://localhost:3030/jsonstore/tasks/";
    const loadBtn = document.getElementById("load-board-btn");
    const todoTasks = document.querySelector("#todo-section ul");
    const inProgressTasks = document.querySelector("#in-progress-section ul");
    const codeReviewTasks = document.querySelector("#code-review-section ul");
    const doneTasks = document.querySelector("#done-section ul");
    const createTaskBtn = document.getElementById("create-task-btn");
    const titleElement = document.getElementById("title");
    const descriptionElement = document.getElementById("description");

    function createCustomElement(
        tag,
        textContent = "",
        attrs = {},
        classes = []
    ) {
        const el = document.createElement(tag);

        if (textContent) {
            el.textContent = textContent;
        }

        if (attrs) {
            for ([k, v] of Object.entries(attrs)) {
                el.setAttribute(k, v);
            }
        }

        if (classes) {
            for (const x of classes) {
                el.classList.add(x);
            }
        }
        return el;
    }

    const listMapper = {
        ToDo: todoTasks,
        "In Progress": inProgressTasks,
        "Code Review": codeReviewTasks,
        Done: doneTasks,
    };

    const buttonMapper = {
        ToDo: "Move to In Progress",
        "In Progress": "Move to Code Review",
        "Code Review": "Move to Done",
        Done: "Close",
    };

    const updateStatusMapper = {
        ToDo: "In Progress",
        "In Progress": "Code Review",
        "Code Review": "Done",
    };

    function getAllTasks() {
        fetch(BASE_URL)
            .then(res => res.json())
            .then(data => {

                const lists = Object.values(listMapper);
                lists.forEach((x) => (x.innerHTML = ""));

                for (const x of Object.values(data)) {
                    const list = listMapper[x.status];
                    const liItems = createCustomElement(
                        "li",
                        (textContent = ""),
                        (attrs = {}),
                        (classes = ["task"])
                    );
                    const heading = createCustomElement(
                        "h3",
                        (textContent = x.title),
                        (attrs = {}),
                        (classes = [])
                    );
                    const desc = createCustomElement(
                        "p",
                        (textContent = x.description),
                        (attrs = {}),
                        (classes = [])
                    );
                    const btn = createCustomElement(
                        "button",
                        (textContent = buttonMapper[x.status]),
                        (attrs = { id: x._id }),
                        (classes = [])
                    );
    
                    if (x.status !== "Done") {
                        btn.addEventListener("click", editBtnEvent);
                    } else {
                        btn.addEventListener("click", deleteBtnEvent);
                    }
    
                    liItems.appendChild(heading);
                    liItems.appendChild(desc);
                    liItems.appendChild(btn);
    
                    list.appendChild(liItems);
                }
            })
            .catch(err => console.log(err));
    }

    function deleteRecord(id) {
        const httpHeaders = {
            method: "DELETE",
        };

        fetch(`${BASE_URL}${id}`, httpHeaders)
            .then((res) => res.json())
            .then(() => getAllTasks())
            .catch((err) => console.log(err));
    }

    function createNewTaskEvent(e) {
        e.preventDefault();
        createNewTask();
    }

    function createNewTask() {
        const title = titleElement.value;
        const description = descriptionElement.value;
        const status = "ToDo";

        const data = {
            title: title,
            description: description,
            status: status,
        };

        titleElement.value = "";
        descriptionElement.value = "";

        const httpHeaders = {
            method: "POST",
            headers: { "Content-type": "application/json" },
            body: JSON.stringify(data),
        };

        fetch(BASE_URL, httpHeaders)
            .then(res => res.json())
            .then(() => getAllTasks())
            .catch(err => console.log(err));
    }

    function loadTasksEvent(e) {
        e.preventDefault();
        getAllTasks();
    }

    function updateStatus(id) {
        fetch(`${BASE_URL}${id}`)
            .then((res) => res.json())
            .then((data) => {
                const currentStatus = data.status;
                const newStatus = updateStatusMapper[currentStatus];

                const req = {
                    status: newStatus,
                };

                const httpHeaders = {
                    method: "PATCH",
                    header: { "Content-type": "application/json" },
                    body: JSON.stringify(req),
                };

                return fetch(`${BASE_URL}${id}`, httpHeaders);
            })
            .then((res) => res.json())
            .then(() => getAllTasks())
            .catch((err) => console.log(err));
    }

    function editBtnEvent(e) {
        updateStatus(e.currentTarget.id);
    }

    function deleteBtnEvent(e) {
        e.preventDefault();
        deleteRecord(this.id);
    }

    createTaskBtn.addEventListener("click", createNewTaskEvent);
    loadBtn.addEventListener("click", loadTasksEvent);
}

attachEvents();