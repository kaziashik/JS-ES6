//1.let,const,var

var number = 20;

if (number > 1) {
    var name1 = "salman shah"
    var name2 = "manna"
    var name3 = "Riaz"

    console.log(name1);
    console.log(name2)
    console.log(name3);
}


/*if we declure var in function we can console out from outshit of function

const & let is not work  outshit  of scop, block scop. but var work outshot of block scop.

*/


/* console.log(name1);
 console.log(name2)
 console.log(name3);
 

will get referenceError. if we did not diclearr any varibal but we call that we will get referenceError
*/



const number1 = 30;
number1 = 40;
console.log(number1)

/*TypeError: Assignment to constant variable.

error because when we use const veriable we cont chane that verible.
*/




