function solve() {
    document.querySelector("#searchBtn").addEventListener("click", onClick);

    function onClick() {
        const rowsElement = document.querySelectorAll("tbody tr");
        const lookup = document
            .getElementById("searchField")
            .value.toLowerCase();

        for (const row of rowsElement) {
            row.classList.remove("select");
            for (const td of row.querySelectorAll("td")) {
                if (td.textContent.toLowerCase().indexOf(lookup) > -1) {
                    row.classList.add("select");
                    break;
                }
            }
        }

        document.getElementById("searchField").value = null;
    }
}
