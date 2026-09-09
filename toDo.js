const count = document.getElementById("count");
const form = document.getElementById("todo_form");
const todoList =document.getElementById("list");
form.addEventListener("submit",function(event){
    event.preventDefault();


form.addEventListener("input",(event)=>{
    count.innerHTML = "";
})
const input = document.getElementById("task");
const todo = input.value;
if(!todo){
    count.innerHTML = "Please enter a task";
    return;
}
if(todo.length<5){
    count.innerHTML = "Min 5 Characters";
    return;
}

const li = document.createElement("li");
li.innerHTML=todo;
const button = document.createElement("button");
button.innerHTML="Delete Task";
button.style.marginLeft="10px"
button.addEventListener("click",()=>{
    li.remove();
})
li.appendChild(button);
todoList.appendChild(li);
input.value = "";
})