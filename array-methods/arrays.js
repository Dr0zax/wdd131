//Andrew Jeppesen
const steps = ["one", "two", "three"];
const listTemplate = (step) => {
  return `<li>${step}</li>`;
}
const stepsHtml = steps.map(listTemplate);// use map to convert the list from strings to HTML
document.querySelector("#myList").innerHTML = stepsHtml.join("");// set the innerHTML

const letterGrades = ["A", "B", "A"];
const gpaCalc = (letterGrades) => {
  switch (letterGrades) {
    case "A":
      return 4.0;

    case "B":
      return 3.0;

    default:
      return 0.0;
  }
}

const gpas = letterGrades.map(gpaCalc);
const gpaReduce = gpas.reduce((accumulator, currentValue) => accumulator + currentValue);
const gpaAverage = gpaReduce / gpas.length;
console.log(gpaAverage, gpaReduce);

const fruits = ['watermelon', 'peach', 'apple', 'tomato', 'grape'];
const filteredFruits = fruits.filter(fruit => fruit.length > 6);
console.log(filteredFruits);

const numbers = [12, 31, 21, 54];
const luckyNumber = 21;
const islucky = numbers.indexOf(luckyNumber);
console.log(islucky)