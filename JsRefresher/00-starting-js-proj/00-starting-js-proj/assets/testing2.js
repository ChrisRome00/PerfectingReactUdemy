
const userNameData = ["Max", "Romero"];

const firstName1 = userNameData[0];
const lastName1 = userNameData[1];

console.log(firstName1)


// Destructuring
const [firstName2, lastName2] = ["Max", "Romero"];
console.log(firstName2)


// const user = {
//     name: "Chris",
//     age: 24
// };

// const name = user.name;
// const age = user.age;

// Destructuring
const {name, age} = {
    name: "Chris",
    age: 34
}
console.log(age)

// function storeOrder(order){
//     localStorage.setItem('id', order.id);
//     localStorage.setItem('currency', order.currency);
// }

function storeOrder({id, currency}) { // destructuring
  localStorage.setItem('id', id);
  localStorage.setItem('currency', currency);
}


//Spread operator
const hobbies = ["Sports", "Cooking"];
const user = {
    name: "Chris",
    age: 24
};

const newHobbies = ["Reading"];

const mergedList = [...hobbies, ...newHobbies];
console.log(mergedList)

const newUser = {
    isAdmin: true,
    ...user
};

console.log(newUser)


// Using funcitons as values
function greeter(greetfn) {
    greetfn()
}

greeter(()=>console.log("hi")) // Calls greeter function with a parameter of ()=>console.log("hi")

// aray1 = [1, 2,3]
// aray2 = [...aray1] // When comparing arrays and objects with ===, that is refering to reference in memory
// console.log(aray1)
// console.log(aray2)

// Primitive types: string, number, boolean, null, undefined, symbol, bigint
let a = 5;
let b = a; // copies the VALUE
b = 10;

console.log(a); // 5
console.log(b); // 10
// Each variable stores its own independent value in memory.
// Changing b doesn’t affect a.
// Primitive values are copied by value.

// Reference types: objects wich include: Object, Array, function, date, map/set, etc
// These are stored by reference not by value
const a2 = [1, 2, 3];
const b2 = a2; // copies the REFERENCE (not the value)
b2.push(4);

console.log(a2); // [1, 2, 3, 4]
console.log(b2); // [1, 2, 3, 4]
console.log(a2 === b2)