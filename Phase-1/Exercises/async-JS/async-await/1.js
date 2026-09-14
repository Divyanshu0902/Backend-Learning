import fetchUser from "./getUser.js"
// const { getUser } = require("./getUser.js");

async function f1(){
    try {
    const res = await fetchUser();
    const users = await res.json();

    console.log(users);
    } catch (error) {
        console.error(error);
    }
}

f1();