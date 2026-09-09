const random = document.getElementById("ranId");
console.log(random);
random.style.color = "yellow";
console.log(random.innerText);
console.log(random.innerHTML);
random.innerText = "This is just a practice page";

const ran = document.getElementsByClassName("random");
console.log(ran[0].innerHTML);
console.log(ran[1].innerText);
for(let i=0;i<ran.length;i++){
    ran[i].style.backgroundColor = 'beige';
}
const change = document.querySelector(".random ul");
change.style.backgroundColor="brown"
const list = document.querySelectorAll(".random ul");
list[1].style.backgroundColor='blue';

const lists =  document.querySelectorAll(".random ul");
for(let i=0;i<lists.length;i++){
    lists[i].style.color = "green";
}

const tags =document.getElementsByTagName("span");
tags[0].style.fontSize = '10px';
//ivide aake oru span ullu kaarnm first span njn innertext vech content maati so aa span avdnn poi. apo remaining only 1 span which is the 0th index

const body = document.body;
const button1=() =>{
    document.body.classList.add("clr");
}
const button2=()=>{
   body.classList.remove("clr");
}
const button3=()=>{
    document.body.classList.toggle('clr');
}

const testToggle = document.getElementById("testP");
const testClassToggle = document.getElementsByClassName("testClass") 
const testB=()=>{
    testToggle.classList.toggle("clr");
}
const testClass=()=>{
    testClassToggle[0].classList.toggle("clr");
}

let paragraph=document.createElement("p");
console.log(paragraph);
paragraph.textContent = "how are you?";
let container=document.getElementsByClassName('container');
container[0].appendChild(paragraph);
console.log(container);

let span=document.createElement("span");
span.textContent = 'Iam doing great!';
let division=document.createElement("div");
console.log(division);
division.appendChild(span);

const sel = new Date();
const selTag = document.createElement("select");
for(let i=2000;i<=sel.getFullYear();i++){
    const optTag = document.createElement("option");
    optTag.innerText = i;
    optTag.value = i;
    selTag.appendChild(optTag);
}
document.body.appendChild(selTag);
