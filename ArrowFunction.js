//4)ArrowFunction

//normal function
function mastn(name1, name2) {
    const fullName = `${name1} ${name2}`
    return fullName;
}

const mostan = function (name1, name2) {
    const fullname = `${name1} ${name2}`

    return fullName;
}



//arrow function
const mostan = (name1, name2) => {
    const fullName = `${name1} ${name2}`

    return fullName;
}

console.log(mostan("bangla", "bhai"))



//example of arrow function




//nprmal function
function add(nummer1, number2) {
    const result = number1 + number1;
    return result;
}
const res = add(10, 20);
console.log(res);



//arrow function
const res = (number1, number1) => {
    result = number1 + number2;

}

/* for Arrow function when we use multiple line we have to use return but when we need only 1 line we do not need any retun .
*/

const res = add(10, 20);
console.log(res);


// null  function of arrow
const num = () => {
    console.log('this is num function of arrow')
}