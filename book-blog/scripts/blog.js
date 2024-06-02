const articles = [
	{
		id: 1,
		title: "Ender\'s Game",
		date: 'January 15, 1985',
		description:
			'Ender\'s Game is a 1985 military science fiction novel by American author Orson Scott Card. Set at an unspecified date in Earth\'s future, the novel presents an imperiled humankind after two conflicts with an insectoid alien species they dub \"the buggers\".',
		imgSrc: 'https://m.media-amazon.com/images/I/91DCtJSKcKL._SL1500_.jpg',
		imgAlt: 'Book cover for Enders Game',
		ages: '13-14',
		genre: 'Sci-Fi',
		stars: '8/10'
	},
	{
		id: 2,
		title: 'Fabelhaven',
		date: 'June 14, 2006',
		description:
			'For centuries, mystical creatures of all description were gathered to a hidden refuge called Fablehaven to prevent their extinction. The sanctuary is one of the last strongholds of true magic. Enchanting? Absolutely. Exciting? You bet. Safe? Well, actually, quite the opposite . . . Kendra and her brother, Seth, have no idea their grandfather is the current caretaker of Fablehaven. Inside the gated woods, ancient laws keep order among greedy trolls, mischievous satyrs, plotting witches, spiteful imps, and jealous fairies. However, when the rules get broken, powerful forces of evil are unleashed, forcing Kendra and Seth to face the greatest challenge of their lives, to save their family, Fablehaven, and perhaps even the world.',
		imgSrc:
			'https://m.media-amazon.com/images/I/81-CHrH4mCL._SY425_.jpg',
		imgAlt: 'Book cover for Fabelhaven',
		ages: '8+',
		genre: 'Fantasy',
		stars: '9/10'
	},
	{
		id: 3,
		title: 'Alcatraz vs the Evil Librarians',
		date: 'October 1, 2007',
		description: 'On his 13th birthday, Alcatraz, a foster child, gets a bag of sand in the mail which purports to be his “inheritance” sent from his father and mother. The Librarians, of course, immediately steal the bag of sand from him. This sparks a chain of events which leads Alcatraz to realize that his family is part of a group of freedom fighters who resist the Evil Librarians—the secret cult who actually rule the world. Alcatraz’s grandfather shows up and tows him off to infiltrate the downtown library to steal back the mystical bag of sand. The ensuing story involves talking dinosaurs, sentient romance novels, and a dungeon-like labyrinth hiding beneath the innocent-looking downtown library. With a seductive mix of offbeat humor, high adventure, and endearing characterization, this is a fantasy that will appeal to all lovers of the fantastical.',
		imgSrc: "https://m.media-amazon.com/images/I/81Zfucd2l1L._SL1500_.jpg",
		imgAlt: 'Book cover for Alcatraz vs the Evil Librarians',
		ages: '8-13',
		genre: 'Fantasy',
		stars: '8/10'
	}
];

const catalog = document.querySelector('#catalog')

const article_template = (bookTitle, bookDescription, publish_date, ageRange, genre, rating, bookImage, imgAlt) => {
	return `<section class="book">
	<section class="book-details">
	  <h2>${bookTitle}</h2>
	  <p>${publish_date}</p>
	  <p>${ageRange}</p>
	  <p>${genre}</p>
	  <p>${rating}</p>
	</section>
	<section class="book-image-container">
	  <section class="book-image">
		<img src="${bookImage}" alt="${imgAlt}" />
	  </section>
	  <p class="book-description">
		${bookDescription}
	  </p>
	</section>
  </section>`
}

articles.forEach(article => {
	catalog.innerHTML += article_template(
		article.title,
		article.description,
		article.date,
		article.ages,
		article.genre,
		article.stars,
		article.imgSrc,
		article.imgAlt
	)
})