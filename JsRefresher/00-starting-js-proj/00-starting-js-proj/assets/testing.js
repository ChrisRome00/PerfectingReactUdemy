let arr1 = ['Sports', 'Cooking', 'Reading'];
console.log(arr1[0]);
arr1.push('Working');

const index = arr1.findIndex((hobby) =>  hobby === 'Working')

console.log(index);

const newArr1 = arr1.map((item) => item + "!")
console.log(newArr1);
const newArr2 = arr1.map((item) => ({text: item}))
console.log(newArr2);