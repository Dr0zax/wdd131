const newParagraph = document.createElement("p");
newParagraph.textContent = "this was created with JavaScript";
document.body.appendChild(newParagraph);

const newImg = document.createElement("img");
newImg.src = "https://picsum.photos/200";
newImg.alt = "placeholder image";
document.body.appendChild(newImg);

const newDiv = document.createElement("div");
newDiv.innerHTML = "<ul><li>one</li><li>two</li><li>three</li></ul>";
document.body.appendChild(newDiv);

const newSection = document.createElement("section");
newSection.innerHTML = "<h2>DOM Basics</h2><p>This was added with javaScript</p>";
document.body.appendChild(newSection);