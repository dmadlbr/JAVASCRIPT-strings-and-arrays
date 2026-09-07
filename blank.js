let paragraph = document.createElement("p");
console.log(paragraph);
paragraph.textContent="Hello World!";


let container=document.getElementById("container");
container.appendChild(paragraph);
container.removeChild(paragraph);
//container.remove() [this can also be used]

let division=document.createElement("div");
console.log(division);
division.textContent="Iam a BTech Graduate.";
division.style.color="blue";
division.style.fontSize = "50px";
division.style.backgroundColor ="orange";
container.appendChild(division);

console.log(container.innerHTML);

//
const dob = new Date();
console.log(dob.getDate());
console.log(dob.getMonth()+1);
console.log(dob.getDay());
console.log(dob.getTime());
console.log(dob.getFullYear());

const selectTag = document.createElement("select");
for(let y=1900;y<=dob.getFullYear();y++){
    const optionTag = document.createElement("option");
    optionTag.innerText = y;
    optionTag.value = y;
    selectTag.appendChild(optionTag);
}
document.body.appendChild(selectTag);
selectTag.style.color ="brown";
selectTag.style.backgroundColor = "green"