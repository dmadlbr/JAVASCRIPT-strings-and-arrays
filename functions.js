function name(){
    console.log(name("Dheema"));
}


// FUNCTION EXPRESSION (ANONYMOUS FUNCTION)

const sName = function(){
    console.log("Dilbar")
}
sName();

// HOISTING (only possible in normal function and variable with var)

console.log(a); 
// error: not defined
var a;
// undefined (No change even if you give value)

console.log(b);
var b=10;

// HOISTING IN NORMAL FUNCTION 

myName();
function myName(){
    console.log('DHEEMA');
}
// in the case of function, while callling DHEEMA will appear its beacuse its function (we are calling)... only in the case of variable, we will get undefined. 


// PARAMETERS AND ARGUMENTS

function fullName(fn,sn){
       console.log(fn,sn);
}
fullName("Dma","Dlbr");
fullName('Aaron','Idris')

function sum(num1,num2){
    console.log(num1 + num2);
}
sum(200,400);
sum(10);
sum("hello","hi");
sum("1",5);
sum("true","false");
sum(true,false);

// num1 and num2, fn and sn --- PARAMETERS
// Dma,Dlbr and 200,400 and Aaron,Idris ----- ARGUMENTS

// DEFAULT FUNCTION
// undefined 
function greet(g,name = " guest"){
    console.log(g + name);
}
greet("Hey", " ko");
greet();

// default 

function wGreet(name=" Guest"){
    console.log("Hello" +name);
}
wGreet(" Dilna");
wGreet();

// gst

function price(amt,gst){
const totgst= (amt * gst) / 100;
console.log(amt + totgst);
}
price(20,6);

// gst with default ( it takes a4 if no value specified for gst otherwise takes the specified value.)
function amount(cp,tax=14){
    const taxTot = cp * tax / 100;
    const sp = cp + taxTot;
    console.log(sp);

}
amount(1000,8);

// RETURN - ARROW FN

function calc(value){
  
   console.log(value)
    return value;
}
calc(10);




function random(value){
    
    return value;
}
console.log(random(15))





function ret(value){
    return value;
}
const res = ret(20);
console.log(res);
// or
console.log(ret(20));


function findSum(a,b){
    return a + b;
}
const sumOftwo = findSum(20,30);
console.log(sumOftwo);

// VOL AND AREA

function area(l,b){
    return l * b;
}

function volume(ar,h){
    return ar * h;
}

const resaArea= area(10,10);
console.log(resaArea);
const resVolume= volume(resaArea,20);
console.log(resVolume);

// ARROW FUNCTION

const ar=(a,b) =>{
    const div= a/b;
    return div;
}
const numb = ar(40,10)
console.log(numb);

const val=(a,b) => a +b;
const result=val(4,5);
console.log(result)


const sq=n => n * n;
// const sq=(n) => n*n bracket can or cannot be used since only one parameter
const res2= sq(11);
console.log(res2)

const add=(a,b) => a+b;{
    const ad=add(9,8)
    console.log(ad)
}

const sub=(c,d)=>{
    return c-d;
}
const subb= sub(4,1);
console.log(subb)

const job=(v) => v;
const j=job("Developer");
console.log(j);


const sumOfNNumbers=(n) => (n * (n+1))/2;
const sumFive=sumOfNNumbers(5);
console.log(sumFive);


const sample=(a,b) => a -b;
const colg=tech => "hello ${colg}";