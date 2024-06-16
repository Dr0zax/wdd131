import { participantTemplate, succsessTemplate } from "./templates.js";

let participants = 1;
const addParticipantButton = document.querySelector("#add");
const form = document.querySelector("form");

const totalFees = () => {
    let feeElements = document.querySelectorAll("[id^=fee]");
    console.log(feeElements);

    feeElements = [...feeElements];
    return feeElements.reduce((total, element) => total + Number(element.value), 0);
}

addParticipantButton.addEventListener("click", () => {
    participants += 1;
    addParticipantButton.insertAdjacentHTML("beforebegin", participantTemplate(participants));
})

form.addEventListener("submit", (event) => {
    event.preventDefault();
    form.style.display = "none";
    const info = {
        name: form.adult_name.value,
        number_of_participants: participants,
        totalFees: totalFees()
    }
    form.insertAdjacentHTML("beforebegin", succsessTemplate(info)); 
})