function attachEvents() {
    const refreshButton = document.getElementById("refresh");
    const submitButton = document.getElementById("submit");
    const messagesArea = document.getElementById("messages");
    const BASE_URL = "http://localhost:3030/jsonstore/messenger";

    const getMessages = async () => {
        try {
            const request = await fetch(BASE_URL);
            const data = request.json();
            return data;
        } catch (error) {
            console.log(error);
        }
    };

    const refreshMessages = async (e) => {
        const messages = await getMessages();
        messagesArea.innerHTML = "";

        let output = [];
        for (m in messages) {
            const name = messages[m].author;
            const content = messages[m].content;
            output.push(`${name}: ${content}`);
        }
        messagesArea.textContent = output.join('\n');
    };

    const postMessage = async (e) => {
        const name = document.querySelector(
            '#controls div input[name="author"]'
        ).value;
        const content = document.querySelector(
            '#controls div input[name="content"]'
        ).value;
        const data = {
            author: name,
            content: content,
        };

        fetch(BASE_URL, {
            method: 'post',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify(data)
        });
    };

    refreshButton.addEventListener("click", refreshMessages);
    submitButton.addEventListener("click", postMessage);
}

attachEvents();
