//6) Object Destructuring


const perso = { name: "komol", id: "10", age: "20" };

const person = {
    name: "komola",
    id: "10",
    age: "20",
    friends: {
        name: "beguni",
        id: "29",
        age: "34"
    }
}
const { name, id, age } = person.friends

console.log(name)
console.log(id)
console.log(age)


//array destructuring

const arr = [1, 2, 4, 5]
const [number1, number2, number3] = arr;
console.log(number3)
console.log(number2)
console.log(number3)



//normal way
const persons = [
    { name: "pagala baba", id: "10" },
    { name: "mati baba", id: "10" },
    { name: "tala baba", id: "20" },
]

//array --> object --> property

for (let i = 0; i < persons.length; i++) {
    const obj = persons[i];
    const name = obj.name;

    console.log(name)
}


// whthout loop use



const [person1, person2, person3] = persons;
console.log(person1.name);
console.log(person2.name)
console.log(person3.name)


