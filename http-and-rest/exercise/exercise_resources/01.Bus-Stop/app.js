function getInfo() {
    const BASE_URL = "http://localhost:3030/jsonstore/bus/businfo/";

    const bustStopId = document.getElementById("stopId").value;
    const stopName = document.getElementById("stopName");
    const busesElement = document.getElementById("buses");


    busesElement.innerHTML = '';
    fetch(`${BASE_URL}${bustStopId}`)
        .then((res) => {
            return res.json();
        })
        .then((data) => {
            stopName.textContent = data.name;
            Object.entries(data.buses).forEach((x) => {
                const newEl = document.createElement("li");
                newEl.textContent = `Bus ${x[0]} arrives in ${x[1]} minutes`;
                busesElement.appendChild(newEl);
            });
        })
        .catch((err) => {
            stopName.textContent = "Error";
        });
}
