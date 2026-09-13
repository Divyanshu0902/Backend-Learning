// named import-export : 
import { add } from "./add.js";
import { subtract} from "./subtract.js"; 
import {multiply } from "./multiply.js";

import {divide as div} from "./divide.js"; // renaming the imported fn.
    

// default import-export :
import pow from "./power.js";
import p from "./percentage.js"; // automatic renaming of the percentage function as p (without using 'as')

add(15,5);
subtract(15,5);
multiply(15,5);
div(15,5);
pow(2,5);
p(7,20);