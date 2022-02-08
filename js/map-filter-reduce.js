const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];

//1

let threeLang = users.filter(function(n){
    return n.languages.length >= 3;
});

console.log(threeLang)

let newEmail = users.map(e => e.email);

console.log(newEmail);

let years = users.reduce((person, number) =>{
    if (!person.includes(number.yearsOfExperience)){
        person.push(number.yearsOfExperience);
    }
    return person;
}, []);


console.log(years);

let newYears = years.reduce((pValue, cValue) => pValue + cValue);

console.log(newYears);

let yearAvg = (newYears/years.length);
console.log(yearAvg)

let longEmail = newEmail.reduce((previousValue, currentValue) => {
    if (previousValue.length > currentValue.length ){
        return previousValue;
    }else{
        return currentValue;
    }
})

console.log(longEmail);

let names = users.map(n => n.name);
console.log(names)


let namesString = names.reduce((cValue, pValue) => {
    return cValue + pValue;
})

console.log(namesString)



