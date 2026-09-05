//Posiitve,Negative or Zero
function number(n){
    if(n>0){
      return 'Positive';
    }else if(n<0){
      return 'Negative';
    }else{
       return 'zero';
    }
}
let result = number(8);
console.log(result);

//Sum of an array using for of
let arr = [10, 20, 30, 40];
let sum = 0;
for (let num of arr) {
    sum = sum + num;
}
console.log(sum);

//using for loop
let array=[120,40,10,5,60,70,77];
let s=0;
for(let i=0;i<array.length;i++){
    s=s+array[i]
}
console.log(s)

//Count even numbers
let nums = [10, 13, 22, 7, 8, 15, 20];
let count = 0;
for (let i = 0; i < nums.length; i++) {
    if (nums[i] % 2 === 0) {
        count++;
    }
}
console.log(count);

//Separate even and odd numbers
let list = [1, 2, 3, 4, 5, 6];

let even = [];
let odd = [];

for (let i = 0; i < list.length; i++) {
    if (list[i] % 2 === 0) {
        even.push(list[i]);
    } else {
        odd.push(list[i]);
    }
}

console.log("Even:", even);
console.log("Odd:", odd);


//Factorial
function factorial(num) {
    let result = 1;

    for (let i = 1; i <= num; i++) {
        result *= i;
    }

    return result;
}

console.log(factorial(5));