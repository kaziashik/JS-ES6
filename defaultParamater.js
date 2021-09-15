// 2)default Paramater


function mostan(name1, name2 = "bhai") {

    const fullName = `${name1} ${name2}`

    return fullName;

}

console.log(mostan("bangla"))
// bangla undefined
//if we set default parameter if we send i valu we will get that valu and as well as taht default valu.

function multi(firstPara, SeconfPara = 6) {
    const result = firstPara * SeconfPara;
    return result;
}

console.log(multi(5))
//output will get = NaN because we did not put second valu that's why we get NaN. 

console.log(multi(5));
//when we send defult perameter 6 we get output 30