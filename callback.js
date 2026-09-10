// Callback -> A function that is passed as an argument to another function as a parameter.

//normal
const display = (value,cb) =>{
    console.log("the value is" + " " + value);
    console.log("the cb value is" + " " + cb);
}
display(10,11);


// with callback
const val = (value,cb) =>{
    console.log("the value is" + " " + value);
    cb();
}

const callVal = function(){
    console.log("Callback invoked");
}
//method 1
val(10,callVal)

console.log("----------------------------------");

//method 2
val(14,function(){
    console.log("Callback invoked");
})

//Eg 2
const handleLoop=(element,index,array)=>{
   console.log(element,index,array);
}

const loop=(arr=[],callback)=>{
    for(let i=0;i<arr.length;i++){
        callback(arr[i],i,arr)
    }
}


const arr = [1, 2, 3, 4, 5, 6, 7, 8];
loop(arr, handleLoop);


//Eg 3
const add=(num1,num2,operation)=>{
    return operation(num1, num2);
}

const multiply=(num1,num2)=>{
    return num1 * num2;
}

console.log(add(1,2,multiply));

//Eg 4
function process(a,callback){
    return callback(a);
}
function double(num){
    return num * 2;
}
console.log(process(4,double));

//Eg 5
function test(arr, callback) {
    for (let i = 0; i < arr.length; i++) {
        callback(arr[i]);
    }
}

function show(element) {
    console.log(element * 3);
}

test([2, 4, 6], show);


//Area and Volume
const result=(res)=>{
    console.log(res);
}
const area=(l,b,callback)=>{
    const a=l*b;
    callback(a,20,result);
}
const vol=(area,h,callback)=>{
    const v=area*h;
    callback(v);
}

area(10,20,vol);