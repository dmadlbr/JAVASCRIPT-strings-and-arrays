const button1=document.getElementById("btn");
console.log(button1);

button1.addEventListener("click",function(){
    console.log("button1 is clicked");
})


button1.addEventListener("dblclick",function(){
    console.log("button1 is double clicked");
})

document.addEventListener("contextmenu",function(event){
    console.log(event);
    console.log("context menu is clicked");
})

document.addEventListener("contextmenu",function(event){
    event.preventDefault();
})

button1.addEventListener("mousemove",function(){
    console.log("mouse is moved inside button")
})

button1.addEventListener("mouseover",function(){
    console.log("mouse is hovered")
})

button1.addEventListener("mouseleave",function(){
    console.log("mouse is left from the button");
})

document.addEventListener("keydown",function(){
    
   console.log("One of the key is down");
})

document.addEventListener("keydown",function(event){
     console.log("Key is down" + event);
})

document.addEventListener("keydown",function(event){
     console.log("Key is down" + event.key);
})

document.addEventListener("keydown",function(event){
    if(event.key == "i"){
     console.log("Key is down");
    }
})


document.addEventListener("keyup",function(){
    console.log("key is up");
})

// document.addEventListener("keydown",function(event){
//     console.log(event);
//     if(event.shiftKey && event.altKey && event.code == "Enter"){
//         console.log("Shift + Alt + Enter is pressed");
//     }
// })
