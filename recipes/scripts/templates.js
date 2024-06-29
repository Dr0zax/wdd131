
const tagsTemplate = (tags) => {
    return tags.map((tag) => `<li>${tag}</li>`).join("");
}

const ratingTemplate = (rating) => {
    let ratings = [
        `<span aria-hidden="true" class="icon-star-empty">☆</span>`,
        `<span aria-hidden="true" class="icon-star-empty">☆</span>`,
        `<span aria-hidden="true" class="icon-star-empty">☆</span>`,
        `<span aria-hidden="true" class="icon-star-empty">☆</span>`,
        `<span aria-hidden="true" class="icon-star-empty">☆</span>`
    ]
    
    for (let i = 0; i < rating; i++) {
        ratings[i] = `<span aria-hidden="true" class="icon-star">⭐</span>`
    }
    
    return ratings
}

export const recipeTemplate = (recipe) => {
    let tags = tagsTemplate(recipe.tags);

    let ratings = ratingTemplate(recipe.rating).join("");

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
                ${ratings}
			</span>
		</p>
		<p class="recipe__description">
            ${recipe.description}
		</p>
</figcaption>
</figure>`;
}