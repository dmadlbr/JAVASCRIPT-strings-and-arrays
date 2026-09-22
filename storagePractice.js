//localStorage
localStorage.setItem("name","John");
let stuName = localStorage.getItem("name");
// localStorage.clear();

localStorage.setItem("age","15");
let stuAge = localStorage.getItem("age");
console.log(stuName,stuAge);

//setting in console
let place = localStorage.getItem("Place");
console.log(place);

let nationality = localStorage.getItem("Nationality");
console.log(nationality);

//sessionStorage
// sessionStorage.setItem("name","Tiger");
let animal = sessionStorage.getItem("name");
console.log(animal);

//storing array
let arr = [1,2,3,4,5];
let str = JSON.stringify(arr);
localStorage.setItem("array",str);
let a = localStorage.getItem("array");
let final = JSON.parse(a);
console.log(final);
