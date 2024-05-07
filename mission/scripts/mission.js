const themeSelector = document.getElementById("theme-selector")

function changeTheme() {
    if (themeSelector.value === "dark") {
        document.body.classList.add("dark");
    } else {
        document.body.classList.remove("dark");
    }
}

themeSelector.addEventListener('click', changeTheme);