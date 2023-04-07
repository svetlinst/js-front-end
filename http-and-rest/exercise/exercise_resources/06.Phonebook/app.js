function attachEvents() {
    const loadButton = document.getElementById("btnLoad");
    const phonebookList = document.getElementById("phonebook");
    const personInput = document.getElementById("person");
    const phoneInput = document.getElementById("phone");
    const createButton = document.getElementById("btnCreate");

    const BASE_URL = "http://localhost:3030/jsonstore/phonebook/";

    loadButton.addEventListener("click", loadPhonebookHandler);
    createButton.addEventListener("click", createRecord);

    function createRecord(e) {
        const person = personInput.value;
        const phone = phoneInput.value;

        data = {
            person: person,
            phone: phone,
        };

        fetch(BASE_URL, {
            method: "post",
            headers: { "Content-type": "application/json" },
            body: JSON.stringify(data),
        })
            .then((res) => res.json())
            .then(() => {
                loadPhonebookHandler();
                personInput.value = "";
                phoneInput.value = "";
            })
            .catch((err) => console.log(err));
    }

    async function deleteItem(e) {
        const id = this.id;
        const httpHeaders = {
            method: "DELETE",
        };

        fetch(`${BASE_URL}${id}`, httpHeaders)
            .then((res) => res.json())
            .then(loadPhonebookHandler)
            .catch((err) => console.log(err));
    }

    async function loadPhonebookHandler() {
        try {
            const response = await fetch(BASE_URL);
            let phonebook = await response.json();
            phonebook = Object.values(phonebook);
            phonebookList.innerHTML = "";

            for (const { person, phone, _id} of phonebook) {
                const item = document.createElement("li");
                const deleteButton = document.createElement("button");

                deleteButton.textContent = "Delete";
                deleteButton.id = _id;

                deleteButton.addEventListener("click", deleteItem);

                item.innerHTML = `${person}: ${phone}`;

                item.appendChild(deleteButton);
                phonebookList.appendChild(item);
            }
        } catch (error) {
            console.log(error);
        }
    }
}

attachEvents();
