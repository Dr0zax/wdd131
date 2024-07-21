const year = document.querySelector("#year");
year.textContent = new Date().getFullYear();

const nav = document.querySelector("nav");

for (let child of nav.children) {
    let boundingBox = child.getBoundingClientRect();
    let shadow = document.createElement("div");
    shadow.classList.add("shadow");
    
    child.addEventListener("mouseenter", () => {
        gsap.to(shadow, { width: `${boundingBox.width}`, duration: 0.25, ease: "power3.out" });
    });
    child.addEventListener("mouseleave", () => {
        gsap.to(shadow, { width: `0`, duration: 0.25, ease: "power3.out" });
    });
    
    child.appendChild(shadow);
}
