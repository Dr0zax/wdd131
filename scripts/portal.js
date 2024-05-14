const copyright_year = document.querySelector("#year");

copyright_year.textContent = new Date().getFullYear();

const themeSelector = document.querySelector("#theme-selector");
if (themeSelector.value === "dark") {
    document.body.classList.add("dark");
} else {
    document.body.classList.remove("dark");
}


function changeTheme() {
    if (themeSelector.value === "dark") {
        document.body.classList.add("dark");
    } else {
        document.body.classList.remove("dark");
    }
}

themeSelector.addEventListener("change", changeTheme)