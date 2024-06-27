import { recipes } from "./recipes.mjs";

const searchBar = document.querySelector("#search-box");
const searchBttn = document.querySelector("#search-button");

function search(value) {
    if (value !== '') {
        console.log(recipes.filter((recipe) => recipe.name.toLowerCase().includes(value.toLowerCase())));
    }
}

searchBar.addEventListener("keyup", (event) => {
    if (event.key === "Enter") {
        searchBttn.click();
        event.currentTarget.blur();
    }
})

searchBttn.addEventListener("click", (e) => {
    search(searchBar.value);
    searchBar.value = "";
})