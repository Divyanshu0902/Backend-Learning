// export {add,subtract,multiply,divide};
import {subtract, add, divide, multiply} from "./math.js"

subtract(15,5);
add(15,5);
divide(15/5);
multiply(15,5);

/* o/p:---
    The sum of 15 and 5 is 20
    The difference of 15 and 5 is 10
    The product of 15 and 5 is 75
    The quotient of 15 and 5 is 3
    The result of 2 reaised to the power 5 is 32
*/

/* conclusion:---
    while importing, the local names give reference to the functions in the order they were exported.
*/