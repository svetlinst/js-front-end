window.addEventListener("load", solve);

function solve() {
  const publishBtn = document.querySelector('.button-section input[type=button]');
  const firstNameEl = document.getElementById('first-name');
  const lastNameEl = document.getElementById('last-name');
  const ageEl = document.getElementById('age');
  const genreEl = document.getElementById('genre');
  const titleEl = document.getElementById('story-title');
  const storyEl = document.getElementById('story');
  const textInputs = document.querySelectorAll('input[type=text]');
  const previewList = document.getElementById('preview-list');
  const mainEl = document.getElementById('main');

  const inputFields = {
    firstName: document.querySelector('#first-name'),
    lastName: document.querySelector('#last-name'),
    age: document.querySelector('#age'),
    title: document.querySelector('#story-title'),
    genre: document.querySelector('#genre'),
    story: document.querySelector('#story'),
}

  function validateInputFileds(d) {
    d.every(item => item.value.trim().length !== 0)
  }

  function createElementWithText(tag, text, cls){
    const el = document.createElement(tag);
    el.textContent = text;

    if(cls){
      el.classList.add(cls);
    }

    return el;
  }

  function cleanup() {
    textInputs.forEach(x => x.value='');
    storyEl.value = '';
  }

  function addStory(e) {
    e.preventDefault()
    const firstName = firstNameEl.value;
    const lastName = lastNameEl.value;
    const age = ageEl.value;
    const genre = genreEl.value;
    const title = titleEl.value;
    const story = storyEl.value;

    // validate
    // const data = Object.values(inputFields)
    // if (!validateInputFileds(data)) {
    //   return
    // }


    cleanup();
    const liItem = document.createElement('li');
    liItem.classList.add('story-info');
    const article = document.createElement('article');
    liItem.appendChild(article);

    article.appendChild(createElementWithText('h4', `Name: ${firstName} ${lastName}`));
    article.appendChild(createElementWithText('p', `Age: ${age}`));
    article.appendChild(createElementWithText('p', `Title: ${title}`));
    article.appendChild(createElementWithText('p', `Genre: ${genre}`));
    article.appendChild(createElementWithText('p', `${story}`));
    previewList.appendChild(liItem);
    const saveBtn = createElementWithText('button', 'Save Story', 'save-btn');
    const editBtn = createElementWithText('button', 'Edit Story', 'edit-btn');
    const deleteBtn = createElementWithText('button', 'Delete Story', 'delete-btn');


    liItem.appendChild(saveBtn);
    liItem.appendChild(editBtn);
    liItem.appendChild(deleteBtn);

    editBtn.addEventListener('click', (e)=> {
      const parentLi = e.currentTarget.parentElement;
      const article = parentLi.querySelector('article');
      const name = article.querySelector('h4').textContent.substring(6);
      const tokens = name.split(' ');
      const age = Number(article.querySelector('p:nth-of-type(1)').textContent.substring(5));
      const genre = article.querySelector('p:nth-of-type(3)').textContent.substring(7);
      const title = article.querySelector('p:nth-of-type(2)').textContent.substring(7);
      const story = article.querySelector('p:nth-of-type(4)').textContent;

      firstNameEl.value = tokens[0];
      lastNameEl.value = tokens[1];
      ageEl.value = age;
      genreEl.value = genre;
      titleEl.value = title;
      storyEl.value = story;

      publishBtn.disabled = false;
      const buttons = previewList.querySelectorAll('button');
      buttons.forEach(x => x.disabled = true);
    })

    deleteBtn.addEventListener('click', (e) => {
      const parentLi = e.currentTarget.parentElement;
      previewList.removeChild(parentLi);
      publishBtn.disabled = false;
    })

    saveBtn.addEventListener('click', (e) => {
      mainEl.innerHTML = '';
      mainEl.appendChild(createElementWithText('h1', 'Your scary story is saved!'));
    })

    e.currentTarget.disabled = true;
  }

  publishBtn.addEventListener('click', addStory);

}
