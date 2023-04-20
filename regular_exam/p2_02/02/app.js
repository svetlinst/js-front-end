window.addEventListener('load', solve);

function solve() {

    const inputEls = {
        titleElement: document.getElementById('title'),
        descElement: document.getElementById('description'),
        labelElement: document.getElementById('label'),
        pointsElement: document.getElementById('points'),
        assigneeElement: document.getElementById('assignee')
    }

    const createTaskBtn = document.getElementById('create-task-btn');
    const deleteTaskBtn = document.getElementById('delete-task-btn');
    const tasksSection = document.getElementById('tasks-section');
    const taskIdElement = document.getElementById('task-id');

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

    function validateInputElements() {
        for (const el of Object.values(inputEls)) {
            if(el.value.trim().length === 0) {
                return false;
            }
        }
        return true;
    }

    function getArticlesCount() {
        const cnt = tasksSection.querySelectorAll('article').length;
        return cnt;
    }

    const featureMapper = {
        'Feature': 'feature',
        'Low Priority Bug': 'low-priority',
        'High Priority Bug': 'high-priority'
    }

    const iconMapper = {
        'Feature': '&#8865;',
        'Low Priority Bug': '&#9737;',
        'High Priority Bug': '&#9888;'
    }

    const iconMapperReversed = {
        '&#8865;': 'Feature',
        '&#9737;': 'Low Priority Bug',
        '&#9888;': 'High Priority Bug'
    }

    function clearInputFields() {
        for (const el of Object.values(inputEls)) {
            el.value = '';
        }
    }

    function changeToDisabled (change) {
        for (const el of Object.values(inputEls)) {
            el.disabled = change;
        }
    }

    function deleteTaskEvent(e) {
        const article = e.currentTarget.parentNode.parentNode;
        let feature = article.querySelector('.task-card-label').textContent;
        feature = feature.substring(0, feature.length-2);

        const title = article.querySelector('.task-card-title').textContent;
        const description = article.querySelector('.task-card-description').textContent;
        let points = article.querySelector('.task-card-points').textContent;
        points = points.split(' ')[2];
        let assignee = article.querySelector('.task-card-assignee').textContent;
        assignee = assignee.substring(13,assignee.length-3);

        inputEls.titleElement.value = title;
        inputEls.descElement.value = description;
        inputEls.labelElement.value = feature;
        inputEls.pointsElement.value = points;
        inputEls.assigneeElement.value = assignee;

        deleteTaskBtn.disabled = false;
        createTaskBtn.disabled = true;
        changeToDisabled(true);
        taskIdElement.value = article.id;
    }

    function removeTaskEvent(e) {
        const taskId = taskIdElement.value;
        const articleToDel = document.getElementById(taskId);
        tasksSection.removeChild(articleToDel);

        updateTotalSprintPoints(-Number(inputEls.pointsElement.value));

        changeToDisabled(false);
        clearInputFields();
        deleteTaskBtn.disabled = true;
        createTaskBtn.disabled = false;        
    }

    deleteTaskBtn.addEventListener('click', removeTaskEvent)

    function updateTotalSprintPoints(changePoints) {
        const totalSprintPoints = document.getElementById('total-sprint-points');
        let curPoints = totalSprintPoints.textContent;
        curPoints = curPoints.split(' ')[2];
        curPoints = curPoints.replace('pts', '');
        curPoints = Number(curPoints);
        curPoints += changePoints;
        totalSprintPoints.textContent = `Total points ${curPoints}pts`;
    }

    createTaskBtn.addEventListener('click', (e) => {
        if (!validateInputElements()) {
            return;
        }

        const articleNumber = getArticlesCount() + 1;
        const article = createCustomElement('article', textContent='', attrs={id: `task-${articleNumber}`}, classes=['task-card']);

        const featureClass = featureMapper[textContent=inputEls.labelElement.value];
        const featureIcon = iconMapper[textContent=inputEls.labelElement.value];

        const featureDiv = createCustomElement('div', textContent='', attrs={}, classes=['task-card-label', featureClass]);
        featureDiv.innerHTML = `${textContent=inputEls.labelElement.value} ${featureIcon}`;
        const titleH3 = createCustomElement('h3', textContent=inputEls.titleElement.value, attrs={}, classes=['task-card-title']);
        const descriptionP = createCustomElement('p', textContent=inputEls.descElement.value, attrs={}, classes=['task-card-description']);
        const pointsDiv = createCustomElement('div', `Estimated at ${textContent=inputEls.pointsElement.value} pts`, attrs={}, classes=['task-card-points']);
        const assigneeDiv = createCustomElement('div', `Assigned to: ${textContent=inputEls.assigneeElement.value} pts`, attrs={}, classes=['task-card-assignee']);

        const actionsDiv = createCustomElement('div', textContent='', attrs={}, classes=['task-card-actions']);
        const actBtn = createCustomElement('button', textContent='Delete', attrs={}, classes=[]);
        actBtn.addEventListener('click', deleteTaskEvent);
        actionsDiv.appendChild(actBtn);

        article.appendChild(featureDiv);
        article.appendChild(titleH3);
        article.appendChild(descriptionP);
        article.appendChild(pointsDiv);
        article.appendChild(assigneeDiv);
        article.appendChild(actionsDiv);

        tasksSection.appendChild(article);

        updateTotalSprintPoints(Number(inputEls.pointsElement.value));
        clearInputFields();

    })


}