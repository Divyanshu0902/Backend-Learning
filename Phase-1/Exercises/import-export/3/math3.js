function add(a,b) {
    const sum = a + b;
    console.log(`The sum of ${a} and ${b} is ${sum}`);
}

function subtract(a,b) {
    const diff = a - b;
    console.log(`The difference of ${a} and ${b} is ${diff}`);
}

function power(a,b) {
    let res = 1;
    for(let i=0; i<b; i++){
        res = res*a;
    }
    console.log(`The result of ${a} reaised to the power ${b} is ${res}`);
}

function multiply(a,b) {
    const product = a*b;
    console.log(`The product of ${a} and ${b} is ${product}`);
}

function divide(a,b) {
    const q = a/b;
    console.log(`The quotient of ${a} and ${b} is ${q}`);
}



export {subtract,add,divide,multiply};
export default power;