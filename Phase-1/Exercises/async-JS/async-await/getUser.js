export default async function getUser(){
    // const url = "https://jsonplaceholder.typicode.com/users";
    const url = "https://xyz.typicode.com/users";

    const result = await fetch(url);
    return result;
}

// export default getUser ;