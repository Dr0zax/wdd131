class Person {
    constructor(firstName, lastName, age, image) {
        this.name = firstName;
        this.lastName = lastName;
        this.age = age;
        this.image = image;
        this.setRandomiNumber();
    }

    setRandomiNumber() {
        // iNumber format: xxx-xx-xxxx
        this.iNumber = `${Math.floor(Math.random() * 1000)}-${Math.floor(Math.random() * 100)}-${Math.floor(Math.random() * 10000)}`;  
    }
}

const person1 = new Person('Jim', 'Halpert', 30, 'https://www.usmagazine.com/wp-content/uploads/2020/02/John-Krasinski-The-Office-reunion.jpg?crop=0px%2C0px%2C1621px%2C917px&resize=1600%2C900&quality=86&strip=all');
const person2 = new Person('Pam', 'Beasley', 30, 'https://img.nbc.com/files/images/2013/11/12/dwight-500x500.jpg');
const person3 = new Person('Dwight', 'Schrute', 30, 'https://boo-prod.b-cdn.net/database/profiles/1665985551133442b368b367602261f6d66d61f1777f8.jpg');

const students = [person1, person2, person3];

const section = document.getElementById('students');

function createArticle(person) {
    const article = document.createElement('article');
    article.classList.add('student');

    article.innerHTML = `
        <p>${person.name} ${person.lastName}</p>
        <p>Age: ${person.age}</p>
        <p>iNumber: ${person.iNumber}</p>
        <img id='student-image' src="${person.image}" alt="${person.firstName} ${person.lastName}">
    `;

    return article;
}

students.forEach(student => {
    section.appendChild(createArticle(student));
})