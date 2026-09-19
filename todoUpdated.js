const form=document.getElementById("todoForm");
const count=document.getElementById("count");
const input=document.getElementById("input");
const iplist=document.getElementById("ipList");
const counter=document.getElementById("counter")
form.addEventListener("input",()=>{
    count.innerHTML="";
})


form.addEventListener("input",()=>{
    counter.innerHTML = input.value.length;
})
form.addEventListener("submit",(event)=>{
    event.preventDefault();

const todo=input.value;
if(!todo){
    count.innerHTML="Please Enter a Task";
    return;
}
if(todo.length<5){
    count.innerHTML="Atleast 5 characters are needed";
    return;
}
const list=document.createElement("li")
list.innerHTML="<div><b>Task: </b>" + todo + "</div>";
list.innerHTML+="<div><b>Time: </b>" + new Date().toLocaleString() + "</div>";
// list.innerHTML="<div><b>Task: </b>" + todo + "</div><div><b>Time: </b>" +new Date().toLocaleString() +"</div>";
const button1=document.createElement("button");
button1.innerHTML="Delete";
button1.classList.add("deleteBtn");

// button1.style.marginInline="5px";
// button1.style.backgroundColor="lightyellow";
// button1.style.padding="5px";
// button1.style.width="100px";
// button1.style.color="red";
// button1.style.borderRadius="50px";
// button1.style.border = "1px solid red";

const button2=document.createElement("button");
button2.classList.add("editBtn")
button2.innerHTML="Edit";

// button2.style.marginInline="5px";
// button2.style.backgroundColor="lightyellow";
// button2.style.padding="5px";
// button2.style.width="100px";
// button2.style.color="green";
// button2.style.borderRadius="50px";
// button2.style.border = "1px solid green";

button1.addEventListener("click",()=>{
    list.remove();
})
button2.addEventListener("click",()=>{
   alert ("Editing is not possible!!");
})

list.appendChild(button1);
list.appendChild(button2);
iplist.appendChild(list);
input.value="";



})