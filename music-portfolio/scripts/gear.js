import { gear } from "./gear.mjs";

const gearContainer = document.querySelector("#gear-container");

const gearTemplate = (gear) => {
    return `<div class="gear">
                <img src="${gear.image}" />
                <div>
                    <h2>${gear.name}</h2>
                </div>
            </div>`
}

const renderGear = (gearList) => {
    gearList.forEach((gear) => {
        gearContainer.insertAdjacentHTML("beforeend", gearTemplate(gear));
    })
}

renderGear(gear);

gsap.from(".gear", {opacity: 0, y:200, duration: 1, stagger: 0.1, ease: "power3.out"})