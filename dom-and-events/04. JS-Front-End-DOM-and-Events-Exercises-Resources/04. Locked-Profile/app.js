function lockedProfile() {
    const profileElements = document.querySelectorAll(".profile");

    for (const profile of profileElements) {
        const showMoreButton = profile.querySelector("button");

        showMoreButton.addEventListener("click", (e) => {
            let lockedValue = profile.querySelector(
                "input[type=radio]:checked"
            ).value;

            if (lockedValue == "unlock") {
                if (showMoreButton.textContent == "Show more") {
                    showMoreButton.textContent = "Hide it";

                    const hiddenElements = profile.querySelector("div");
                    hiddenElements.style.display = "block";
                } else {
                    showMoreButton.textContent = "Show more";
                    const hiddenElements = profile.querySelector("div");
                    hiddenElements.style.display = "none";
                }
            }
        });
    }
}
