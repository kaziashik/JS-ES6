//9) map
const persons = [
    { name: "pagala baba", id: "10" },
    { name: "mati baba", id: "10" },
    { name: "tala baba", id: "20" },
]
const person = persons.map(per => {
    return per.id * 2
})

console.log(person)

const number = [1, 2, 3, 4, 5, 60, 50]

const largest = number.filter(number => number > 10)

console.log(largest)