const mouseFollow = document.createElement("div");
// const ms = mouseFollow.style;
mouseFollow.style.height = "20px";
mouseFollow.style.width = "20px";
mouseFollow.style.backgroundColor = "yellow";
mouseFollow.style.position = "absolute"
mouseFollow.style.top = 0;
mouseFollow.style.left = 0;
mouseFollow.style.transition = "0.4s";
document.body.appendChild(mouseFollow);

document.addEventListener("mousemove",function(event){
    mouseFollow.style.top = event.clientY + "px"
     mouseFollow.style.left = event.clientX + "px"
})

//Form

// const username=document.login.name.value;
// const password=document.login.password.value;
// console.log(username,password);

const un = document.getElementById("name");
const count=document.getElementById("count");
const pass = document.getElementById("password");
un.addEventListener("input",function(event){
    console.log(event.target.value);
    const len = event.target.value.length;
    if(len<5){
        count.innerText= "Minimum 5 characters";
    }else{
        count.innerText =" ";
    }
})