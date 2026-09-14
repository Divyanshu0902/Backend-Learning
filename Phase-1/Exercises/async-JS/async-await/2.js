let i = 0;

function run(){
    i++;
    const num = Math.random();

    console.log(`Iteration ${i}: ${num}`)
    setTimeout(()=>{run()},1500)
}

run();
