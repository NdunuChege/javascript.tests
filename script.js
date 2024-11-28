// let fullname = "Chege"
// let password = 12345
// let email = "ndunuian@gmail.com";
// fullname = "Tarlisman"
// console.log(fullname)

// if (fullname === "Chege" && password === 12345 || email === "ndunuan@gmail.com") {
//     let fullname= "caroline mitemi";
//     console.log(fullname)
//     console.log("password correct");
// } else {
//     console.log("password incorrect");
// }

function greeting(name) {
    let greet = "Hello";
    // console.log("testing this");
    return `${greet} ${name[0].toUpperCase()}${name.slice(1)}`;
}

console.log(greeting("elusa"));
console.log(greeting("diana"));


function apology(name) {
    let word = "Sorry";
    return`${word} ${name[0].toUpperCase()}${name.slice(1)}`;
}

console.log(apology("Ndunu"));
console.log(apology("Joe"));