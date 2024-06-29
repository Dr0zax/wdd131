import { recipes } from "./recipes.mjs";
import { recipeTemplate } from "./templates.js";

const searchBar = document.querySelector("#search-box");
const searchBttn = document.querySelector("#search-button");

function renderRecipes(recipesList) {
    document.querySelector("#recipes").innerHTML = "";
    recipesList.forEach((recipe) => {
        document.querySelector("#recipes").insertAdjacentHTML('beforeend', recipeTemplate(recipe));
    })
}

function getRandomRecipe() {
    const randomNum = Math.floor(Math.random()*recipes.length);
    const randomRecipe = recipes[randomNum];
    return randomRecipe;
}

function init() {
    const randomRecipe = getRandomRecipe();
    renderRecipes([randomRecipe]);
}

function filterRecipes(query) {
    return recipes.filter((recipe) => 
        recipe.name.toLowerCase().includes(query.toLowerCase()) 
        || recipe.tags.find((tags) => tags.toLowerCase().includes(query.toLowerCase()))
    )
}

function searchHandler(query) {
    const filteredRecipes = filterRecipes(query);
    renderRecipes(filteredRecipes);
}

searchBar.addEventListener("keyup", (event) => {
    event.preventDefault();
    if (event.key === "Enter") {
        searchBttn.click();
        event.currentTarget.blur();
    }
})

searchBttn.addEventListener("click", (event) => {
    event.preventDefault();
    searchHandler(searchBar.value);
    searchBar.value = '';
})

window.onload = init;   