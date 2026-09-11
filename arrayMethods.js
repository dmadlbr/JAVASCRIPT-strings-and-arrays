const arr = [1,2,3,4,5,6,7,8,9,10];

//forEach()
arr.forEach(function(element,i,arr){
    console.log(element,i,arr);
})

//find()

const find = arr.find(function(element){
    if(element==3){
        return element;
    }
})
console.log(find);

const fruits =['Kiwi','Apple','Orange','Mango','Strawberry','Pear'];
const fruitSelect = fruits.find(function(element){
    if(element.length>5 ){
        return true;
    }
})
console.log(fruitSelect);

//filter()

const number = [105,20,30,40,50,55,65,75,85,95,111];
const two = number.filter(function(element){
    if(element % 2 == 0){
        return true;
    }
})
console.log(two);

const two2 = number.filter(function(element){
    if(element % 2 == 0){
        return false;
    }
})
console.log(two2);


const two3 = number.filter(function(element){
    if(element % 2 == 0){
        return;
    }
})
console.log(two3);

//map()

const five = number.map(function(element){
    if(element % 3 == 0){
        return "ok";
    }
})
console.log(five);


const five2 = number.map(function(element){
    if(element % 3 == 0){
        return "ok"
    }
        return element
    
})
console.log(five2);

    //sum
const sum = number.reduce((previous,ele)=>
    {
        return previous + ele;
})
console.log(sum);

const sum2 = number.reduce((previous,ele)=>
    {
        return previous + ele;
},0)
console.log(sum2);

const sum3 = number.reduce((previous,ele)=>
    {
        return previous + ele;
},1)
console.log(sum3);

    //factorial
const fact=number.reduce((previous,ele)=>
    {
        return previous * ele;
})
console.log(fact);