// Reversing Array without methods
let numbers = [10,20,30,40,50];
for(let i=0;i<numbers.length/2;i++){
    let temp =numbers[0];
    numbers[i] =numbers[numbers.length-1-i];
    numbers[numbers.length-1-i] = temp;
}
console.log(numbers);


//Count numbers greater than 50
let nums = [25,35,85,40,90,55,30];
let count=0;
for(let j=0;j<nums.length;j++){
    if(nums[j]>50){
        count++;
    }
}
console.log(count);

//Replace negative numbers with 0 
let neg = [-1,9,8,-3,50,2,-11];
for(let k=0;k<neg.length;k++){
    if(neg[k] < 0){
        neg[k] = 0
    }
}
console.log(neg);

//Find Duplicate numbers

let age = [10,9,11,8,7,11,14,10,7,8];
const occ = {};
const dup = [];
for(const element of age){

    if(occ[element]){
        occ[element]= ++occ[element];
    }else{
        occ[element]=1;
    }
}
for(const count in occ){
    if(occ[count]>1){
        dup.push((count));
    }
}
console.log(dup);