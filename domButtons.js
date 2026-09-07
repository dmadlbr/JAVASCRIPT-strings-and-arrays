//ClassList

const element = document.getElementsByClassName("demo");

// const body=document.body;
const lightClick=() =>{
    document.body.classList.remove("dark");
}
const darkClick =() =>{
    document.body.classList.add("dark");
}

const toggleClick=() =>{
    element[0].classList.toggle("dark");
}

console.log(document.body.classList.contains("light"));
console.log(element[0].classList.contains("demo"));
console.log(document.body.classList.contains("dark"));