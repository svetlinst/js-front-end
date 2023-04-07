function solve() {
    const departBtn = document.getElementById("depart");
    const arriveBtn = document.getElementById("arrive");
    const apiURL = "http://localhost:3030/jsonstore/bus/schedule/";
    

    const info = document.querySelector('.info')

    let [departId, departLocation] = ["depot", null];

    function depart() {
        fetch(`${apiURL}${departId}`)
            .then((res) => res.json())
            .then((data) => {
                departLocation = data["name"];

                info.textContent = `Next stop ${departLocation}`;
                departId = data["next"];
                departBtn.disabled = true;
                arriveBtn.disabled = false;
            })
            .catch();
    }

    async function arrive() {
        info.textContent = `Arriving at ${departLocation}`;
        departBtn.disabled = false;
        arriveBtn.disabled = true;
    }

    return {
        depart,
        arrive,
    };
}

let result = solve();
