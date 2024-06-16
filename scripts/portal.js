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

const dropdown = document.querySelector(".dropdown");
const dropdown_content = dropdown.querySelector(".dropdown-content");
const dropdown_button = dropdown.querySelector(".dropbtn");
let is_mobile = false
let dropdown_open = false

window.addEventListener("resize", () => {
    if (window.innerWidth <= 700) {
        is_mobile = true
    } else {
        is_mobile = false
    }
})

window.onload = () => {
    if (window.innerWidth <= 700) {
        is_mobile = true
    } else {
        is_mobile = false
    }
}

dropdown_button.addEventListener("click", () => {
    if (is_mobile) {
        if (dropdown_open) {
            dropdown_open = false
            dropdown_content.classList.add("hide")
            dropdown_button.classList.remove("clicked")
        } else {
            dropdown_open = true
            dropdown_content.classList.remove("hide")
            dropdown_button.classList.add("clicked")
        }
    }
})