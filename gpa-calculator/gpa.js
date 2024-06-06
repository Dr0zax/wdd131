const generateButton = document.querySelector("#submitButton");
const inputBox = document.querySelector("#grades");
const outputBox = document.querySelector("#output");

const getInput = () => {
    let grades = inputBox.value;
    grades = grades.split(", ");
    return grades
}

function lookupGrade(grade) {
    switch (grade) {
        case "A":
            return 4.0;
        
        case "B":
            return 3.0;
        
        case "C":
            return 2.0;
        
        case "D":
            return 1.0;
        
        case "F":
            return 0.0;
    
        default:
            return 0.0;
    }
}

function calculateGPA() {
    let grades = getInput();
    let gradeGPA = grades.map(lookupGrade);
    let reduced = gradeGPA.reduce((a, b) => a + b) / grades.length;
    return reduced.toFixed(2);
}

function displayGPA(gpa) {
    outputBox.innerHTML = gpa;
}

generateButton.addEventListener("click", () => {
    let gpa = calculateGPA();
    displayGPA(gpa);
})