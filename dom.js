//getElementById
const sample=document.getElementById("id1");
console.log(sample);
console.log(sample.innerText);
console.log(sample.innerHTML);
sample.innerText='Hello Dilbar';
sample.innerHTML='<b><u>Hello Dilbar</u></b>'
console.log(sample.style.backgroundColor='red');
const buttonClick=()=>{
    button1.style.backgroundColor='yellow';
    id1.style.backgroundColor='blue'
}

//getElementByClassName
const random =document.getElementsByClassName("demo");
console.log(random);
console.log(random[0].innerHTML);
console.log(random[0].style.fontSize = "30px");
for(let i=0;i<random.length;i++){
    random[i].style.color = 'blue';
    // random[i].innerText="hibdwjbcjnbdj";
}

//querySelector
const ran = document.querySelector(".demo");
console.log(ran);
const ran2 = document.querySelector("#id1");
console.log(ran2);
const ranFinal=document.querySelectorAll(".demo");
console.log(ranFinal);


//getElementByTagName
const finalSample = document.getElementsByTagName("div");
console.log(finalSample);
console.log(finalSample[0].style.backgroundColor="grey");
for(i=0;i<finalSample.length;i++){
    finalSample[i].style.color='maroon'
}

