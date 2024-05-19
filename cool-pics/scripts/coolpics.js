imgHolder = document.querySelector(".gallery")

copyrightYear = document.querySelector("#year");
copyrightYear.textContent = new Date().getFullYear();

menuButton = document.querySelector(".menu-bttn");
navBar = document.querySelector(".menu");

menuHidden = false;

menuButton.addEventListener("click", () => {
    if (menuHidden) {
        navBar.classList.remove("hide");
    } else {
        navBar.classList.add("hide");
    }
    menuHidden = !menuHidden;
})

window.addEventListener("resize", () => {
    if (window.innerWidth > 1000) {
        navBar.classList.remove("hide");
        menuHidden = false;
    } else {
        navBar.classList.add("hide");
        menuHidden = true;
    }
})

function viewTemplate(imgPath, imgAltText) {
    return `<div class="viewer">
        <button class="close-bttn">X</button>
        <img class="viewer-img" src="${imgPath}" alt="${imgAltText}">
    </div>`;
}

imgHolder.addEventListener("click", (event) => {
    target = event.target;

    if (target.classList.contains("gallery-img")) {
        imgSrc = target.getAttribute("src");
        fileName = imgSrc.split("-")[0];
        imgAltText = target.getAttribute("alt");
        newImg = `${fileName}-full.jpeg`;

        modalStr = viewTemplate(newImg, imgAltText)
        document.body.insertAdjacentHTML('afterbegin', modalStr)

        closeBttn = document.querySelector(".close-bttn");
        modal = document.querySelector(".viewer");
        closeBttn.addEventListener("click", () => {
            modal.remove();
        })
    }    
});