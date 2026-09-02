// SCOPE

let stu = "Dheema";
function name(){
    return stu;
}

const stuName = name();
console.log(stu);

//
function sName(){
   console.log(stu);
}
stu = 'dilbar';
sName()


// FUNCTION SCOPE

function num(){
    let a = 5;
    console.log(a)
}
num()

function number(){
    let b = 50;
    {
        let b = 55;
        console.log(b)
    }
}
number();


function numbers(){
    let k = 70;
    {
        let k = 80;
    }
    console.log(k)
}
numbers()

function sample(){
    let j = 90;{
        j=40;
        console.log(j)
    }
   console.log(j) 
}
sample()


function oneMore(){
    let g = 77;
    {
        let g = 45;
        console.log(g);
    }
    console.log(g)
}
oneMore()
// var in scope 

//CLOSURE

function outer(){
    let count = 0;
    function inner(){
        count++;
        console.log(count)
    }
    return inner();
}
outer();
outer();

function outerFunction(){
    let c = 0;
    function innerFunction(){
        c++;
        console.log(c);
    }
    return innerFunction;

}
const inners=outerFunction();

inners();
inners();
inners();
inners();

// function hi(){
//    let counter=0;
//    counter++;
//    console.log(counter)
// }
// counter;   why closure? here 1,1,1.... in closure, 1,2,3....

