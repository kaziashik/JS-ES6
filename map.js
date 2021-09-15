//9) map
const persons = [
    { name: "pagala baba", id: "10" },
    { name: "mati baba", id: "10" },
    { name: "tala baba", id: "20" },
]
const person = persons.map(per => {
    return per.id *2
})

console.log(person)