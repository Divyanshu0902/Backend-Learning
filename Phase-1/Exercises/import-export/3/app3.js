// export {add,subtract,multiply,divide};
import {subtract, add, divide, multiply} from "./math3.js"

subtract(15,5);
add(15,5);
divide(15,5);
multiply(15,5);

/* o/p:---
    The difference of 15 and 5 is 10
    The sum of 15 and 5 is 20
    The quotient of 15 and  is 3
    The product of 15 and 5 is 75
*/

/* conclusion:---
    while importing, the local names give reference to the functions in the order they were exported.
*/