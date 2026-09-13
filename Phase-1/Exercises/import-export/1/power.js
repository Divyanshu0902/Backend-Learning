function pow(a,b) {
    let res = 1;
    for(let i=0; i<b; i++){
        res = res*a;
    }
    console.log(`The result of ${a} reaised to the power ${b} is ${res}`);
}

export default pow;