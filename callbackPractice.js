//add 
function add(a,b,callback){
   const result = a + b;
   callback(result)
}

function display(result){
    console.log(result);
}
add(7,1,display);


//greet
function greet(name,callback){
    const result = "Hi " + name;
    callback(result)
}
function display(message){
    console.log(message);
}
greet("dheema",display);

//square
function square(a,callback){
    const result = a * a;
    callback(result)
}
function show(result){
    console.log(result);
}
square(4,show);

//calculator
function calculator(a,b,operation,callback){
    let result;
    if(operation == "add"){
        result = a + b;
    }else if(operation == "sub"){
        result = a - b;
    }else if(operation == "multiply"){
        result = a * b;
    }else if(operation == "div"){
        result = a / b;
    }
    callback(result)
}
function show(result){
    console.log(result);
}
calculator(7,5,'add',show);
calculator(3,5,'sub',show);
calculator(8,4,'div',show)
calculator(45,5,'multiply',show);

//Double
function double(a,callback){
    const result = a * 2; 
    callback(result);
}
function display(result){
    console.log(result);
}
double(4,display);

//Even or Odd
function number(a,callback){
    let result;
    if(a % 2 == 0){
        result = "Even"
    }else{
        result = "Odd"
    }
    callback(result)
}
function num(result){
    console.log(result);
}

number(51,num);

//Largest
function largest(a,b,callback){
    let result;
    if(a>b){
        result = a + " is larger than " + b;
    }else{
        result = b + " is larger than " + a;
    }
    callback(result);
}
function display(result){
    console.log(result);
}

largest(57,15,display)

//sum
function sum(array,callback){
    let result = 0;
    for(let i=0;i<array.length;i++){
        result = result + array[i]
    }
    callback(result);
}
function show(result){
    console.log(result);
}
sum([1,2,3,4,5],show);

//count even numbers
function countEven(array,callback){
    let count=0;
    for(let i=0;i<array.length;i++){
        if(array[i]%2==0){
            count ++;
        }
    }
    callback(count)
}
function show(result){
    console.log(result);
}
countEven([1,2,3,4,8,6,9,5,7],show)