// TODO
function attachEvents() {
    const BASE_URL = "http://localhost:3030/jsonstore/tasks/";
    const loadBtn = document.getElementById("load-button");
    const addButton = document.getElementById("add-button");
    const toDoList = document.getElementById("todo-list");
    const titleEl = document.getElementById("title");

    function createCustomElement(
        tag,
        textContent = "",
        attrs = {},
        curValue = ""
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

        if (curValue) {
            el.value = curValue;
        }
        return el;
    }

    function createNewToDo(e) {
        e.preventDefault();

        const name = titleEl.value;
        const data = {
            name: name,
        };
        const httpHeaders = {
            method: "POST",
            headers: { "Content-type": "application/json" },
            body: JSON.stringify(data),
        };
        fetch(BASE_URL, httpHeaders)
            .then((res) => res.json())
            .then(() => {
                loadAllTaks();
                titleEl.value = "";
            });
    }

    function deleteRecord(id) {
        const httpHeaders = {
            method: "DELETE",
        };

        fetch(`${BASE_URL}${id}`, httpHeaders)
            .then((res) => res.json())
            .then(() => loadAllTaks());
    }

    function editRecord(id, name) {
        const data = {
            name: name
        };

        const httpHeaders = {
            method: "PATCH",
            header: { "Content-type": "application/json" },
            body: JSON.stringify(data),
        };

        fetch(`${BASE_URL}${id}`, httpHeaders)
            .then((res) => res.json())
            .then(() => loadAllTaks());
    }

    async function deleteBtnEvent(e) {
        e.preventDefault();
        deleteRecord(this.id);
    }

    async function editBtnEvent(e) {
        e.preventDefault();
        // console.log(e.currentTarget.textContent);

        if (e.currentTarget.textContent === "Edit") {
            e.currentTarget.textContent = "Submit";
            const span = e.currentTarget.parentElement.querySelector("span");
            const inputEl = document.createElement("input");
            inputEl.value = span.textContent;
            span.parentNode.replaceChild(inputEl, span);
        } else {
            const inputEl = e.currentTarget.parentElement.querySelector("input");
            console.log(inputEl.value);
            editRecord(this.id, inputEl.value);
            e.currentTarget.textContent = "Edit";            
            const newSpan = document.createElement("span");
            newSpan.textContent = inputEl.value;
            inputEl.parentNode.replaceChild(newSpan, inputEl);
        }

        // this.textContent = 'Edit';
    }

    async function loadAllTaks() {
        toDoList.innerHTML = "";

        try {
            const res = await fetch(BASE_URL);
            const data = await res.json();

            for (const task in data) {
                const liItem = createCustomElement("li");
                const spEl = createCustomElement(
                    "span",
                    (textContent = data[task].name)
                );

                const removeBtn = createCustomElement(
                    "button",
                    "Remove",
                    (attrs = { id: data[task]._id })
                );
                removeBtn.addEventListener("click", deleteBtnEvent);

                const editBtn = createCustomElement(
                    "button",
                    "Edit",
                    (attrs = { id: data[task]._id })
                );
                editBtn.addEventListener("click", editBtnEvent);

                liItem.appendChild(spEl);
                liItem.appendChild(removeBtn);
                liItem.appendChild(editBtn);
                toDoList.appendChild(liItem);
            }
        } catch (err) {
            console.log(err);
        }
    }

    async function loadBtnEvent(e) {
        e.preventDefault();
        await loadAllTaks();
    }

    loadBtn.addEventListener("click", loadBtnEvent);
    addButton.addEventListener("click", createNewToDo);
}

attachEvents();
