async function attachEvents() {
    const BASE_URL = "http://localhost:3030/jsonstore/collections/students";
    const tableBody = document.querySelector("tbody");
    const firstNameEl = document.querySelector(
        '.inputs input[name="firstName"'
    );
    const lastNameEl = document.querySelector('.inputs input[name="lastName"');
    const facultyNumberEl = document.querySelector(
        '.inputs input[name="facultyNumber"'
    );
    const gradeEl = document.querySelector('.inputs input[name="grade"');
    const submitBtn = document.getElementById("submit");
    const inputElements = document.querySelectorAll("input");

    function checkCorrectInputs() {
        for (const item of inputElements) {
            if (!item.value.trim()) {
                return false;
            }
        }
        return true;
    }

    function createElementWithContent(tag, content) {
        const el = document.createElement(tag);
        el.textContent = content;
        return el;
    }

    async function loadStudents() {
        tableBody.innerHTML = "";
        try {
            const res = await fetch(BASE_URL);
            const data = await res.json();
            console.log(firstNameEl);

            for (x in data) {
                const row = document.createElement("tr");
                row.appendChild(
                    createElementWithContent("td", data[x].firstName)
                );
                row.appendChild(
                    createElementWithContent("td", data[x].lastName)
                );
                row.appendChild(
                    createElementWithContent("td", data[x].facultyNumber)
                );
                row.appendChild(createElementWithContent("td", data[x].grade));
                tableBody.appendChild(row);
            }
        } catch (err) {
            console.log(err);
        }
    }

    async function createStudent() {
      if (!checkCorrectInputs()){
        return
      }

        try {
            const firstName = firstNameEl.value;
            const lastName = lastNameEl.value;
            const facultyNumber = facultyNumberEl.value;
            const grade = gradeEl.value;

            const data = {
                firstName: firstName,
                lastName: lastName,
                facultyNumber: facultyNumber,
                grade: grade,
            };

            const httpHeaders = {
                method: "POST",
                headers: { "Content-type": "application/json" },
                body: JSON.stringify(data),
            };

            await fetch(BASE_URL, httpHeaders);
            await loadStudents();
            inputElements.forEach((x) => (x.value = ""));
        } catch (err) {
            console.log(err);
        }
    }

    submitBtn.addEventListener("click", createStudent);

    await loadStudents();
}

attachEvents();
