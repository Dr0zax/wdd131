import { recipes } from "./recipes.mjs";

const searchBar = document.querySelector("#search-box");
const searchBttn = document.querySelector("#search-button");

const recipeTemplate = (recipe) => {
    let tags = recipe.tags.map((tag) => `<li>${tag}</li>`).join("");

    let ratings = [
        `<span aria-hidden="true" class="icon-star-empty">☆</span>`,
        `<span aria-hidden="true" class="icon-star-empty">☆</span>`,
        `<span aria-hidden="true" class="icon-star-empty">☆</span>`,
        `<span aria-hidden="true" class="icon-star-empty">☆</span>`,
        `<span aria-hidden="true" class="icon-star-empty">☆</span>`
    ]

    for (let i = 0; i < recipe.rating; i++) {
        ratings[i] = `<span aria-hidden="true" class="icon-star">⭐</span>`
    }

    return `<figure class="recipe">
	<img src=${recipe.image} alt=${recipe.name} />
	<figcaption>
		<ul class="recipe__tags">
			${tags}
		</ul>
		<h2><a href="#">${recipe.name}</a></h2>
		<p class="recipe__ratings">
			<span
				class="rating"
				role="img"
				aria-label="Rating: ${recipe.rating} out of 5 stars"
			>
                ${ratings.join('')}
			</span>
		</p>
		<p class="recipe__description">
            ${recipe.description}
		</p>
</figcaption>
</figure>`;
}

function renderRecipes(recipesList) {
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

function search(value) {
    if (value !== '') {

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

window.onload = init;   