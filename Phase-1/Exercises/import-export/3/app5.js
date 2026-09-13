// export {add,subtract,multiply,divide};
import {s, a, d, m} from "./math3.js"

a(15,5);
s(15,5);
m(15,5);
d(15,5);

/* o/p:---
    import {s, a, d, m} from "./math3.js"
           ^
    SyntaxError: The requested module './math3.js' does not provide an export named 'a'
*/

/* conclusion:---
    named import searches for specific names we ask to import. 
    so we can't freely do implicit like default exports
    here the name change has to be explicit using "as" keyword.
*/