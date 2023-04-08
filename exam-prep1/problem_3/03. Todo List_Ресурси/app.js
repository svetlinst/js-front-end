// TODO
function attachEvents() {
  const BASE_URL = 'http://localhost:3030/jsonstore/tasks/';
  const loadBtn = document.getElementById('load-button');
  const toDoList = document.getElementById('todo-list');

  function createCustomElement(tag, textContent='', attrs={}){
    const el = document.createElement(tag);
    el.textContent = textContent;
    if (attrs) {
        for ([k, v] of Object.entries(attrs)) {
            el.setAttribute(k, v);
        }
    }
    return el;
  }

  async function loadAllTaks(e) {
    const res = await fetch(BASE_URL);
    const data = await res.json();
    
    for (const task in data) {
        const liItem = createCustomElement('li');
        const spEl = createCustomElement('span', textContent=data[task].name);
        const removeBtn = createCustomElement('button', 'Remove');
        const editBtn = createCustomElement('button', 'Edit');

        liItem.appendChild(spEl);
        liItem.appendChild(removeBtn);
        liItem.appendChild(editBtn);
        toDoList.appendChild(liItem);
    }
  }

}

loadBtn.addEventListener('click', loadAllTaks);


attachEvents();
