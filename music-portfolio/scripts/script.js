import { gear } from "./gear.mjs";

gsap.registerPlugin(ScrollTrigger) 

const year = document.querySelector("#year");

year.textContent = new Date().getFullYear();

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

gsap.from(".gear", {opacity: 0, y:100, duration: 1 ,stagger: 0.15, ease: "power3.out" })//opacity: 0, y:100, duration: 1, stagger: 0.2, ease: "power3.out" })

document.querySelectorAll(".gear").forEach((gear) => {
    gsap.to(gear, {scrollTrigger: {
        trigger: gear,
        scrub: 1,
        markers: true,
        start: 'top 10%',
        end: 'bottom 20%',
    },
    scale: 0.5});

})