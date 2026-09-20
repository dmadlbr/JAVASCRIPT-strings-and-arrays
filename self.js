//Smallest and Largest Number
let nums = [11,12,45,85,76,95,34,100,57,86];
let largest=nums[0];
for(i=1;i<nums.length;i++){
    if(nums[i]>largest){
        largest=nums[i];

    }

}
console.log(largest);

let smallest=Infinity;
for(i=0;i<nums.length;i++){
    if(nums[i]<smallest){
        smallest=nums[i]
    }
}
console.log(smallest);

//Count Even and Odd Number
let eCount=0;
let oCount=0;
for(i=0;i<nums.length;i++){
    if(nums[i]%2==0){
        eCount++;
    }else{
        oCount++;
    }
}
console.log(eCount,oCount);

//Find Sum
let sum=0;
for(i=0;i<nums.length;i++){
    sum += nums[i];
} 
console.log(sum);

//Reverse Array
for(i=0;i<nums.length/2;i++){
    let temp=nums[i];
    nums[i]=nums[nums.length-1-i];
    nums[nums.length-1-i]=temp;
}
console.log(nums);


//Second Largest Number
let second= -Infinity;
for(i=0;i<nums.length;i++){
    if(nums[i]>largest){
        second=largest;
        largest=nums[i];
    }else if(nums[i]>second && nums[i]!=largest){
       second=nums[i];
    }
}
console.log(second);

//Count of Target number
let target=10;
let arr=[10,51,10,47,36,48,10,7,58,12];
let count=0;
for(i=0;i<arr.length;i++){
    if(arr[i]==target){
        count++;
    }
}
console.log(count);

//Find the number that occurs only once
let a=[1,1,2,4,3,5,4,6,7,9,8,8,7,9];
let numbers = [];
for(i=0;i<a.length;i++){
    let count=0;
    for(j=0;j<a.length;j++){
        if(a[i]==a[j]){
            count++;
        }
    }
    if(count==1){
        numbers.push(a[i])
    }

}
console.log(numbers);

//Find the Most Repeated Number
let max=0;
let most=[];
for(i=0;i<a.length;i++){
    let k=0;
    for(j=0;j<a.length;j++){
        if(a[i]==a[j]){
            k++;
        }
    }
    if(k>max){
        max=k;
        most=[a[i]];
    }else if(k==max && !most.includes(a[i])){
        most.push(a[i]);
    }
}
console.log(most);

//Find all numbers with the highest frequency
let high=[];
let freq=1;
for(i=0;i<a.length;i++){
    let count=0;
    for(j=0;j<a.length;j++){
        if(a[i]==a[j]){
            count++;
        } 
    } 
    if(count>freq){
        freq=count;
        high=[a[i]];     
        }else if(count==freq &&!high.includes(a[i])){
             high.push(a[i]);
           }
}
console.log(high);

//Move 0's to the Beginning
let ar = [5, 0, 2, 0, 8, 0, 4];
let position=0;
for(i=0;i<ar.length;i++){
    if(ar[i]==0){
        temp=ar[i];
        ar[i]=ar[position];
        ar[position]=temp;
        position++;
    }
}
console.log(ar);

//Move Negative Numbers to Beginning
let b = [4, -2, 7, -5, 8, -1, 3];
let pos =0;
for(i=0;i<b.length;i++){
    if(b[i]<0){
        temp=b[i];
        b[i]=b[pos];
        b[pos]=temp;
        pos++;
    }
}
console.log(b);

// Move all Even numbers to the beginning and all Odd numbers to the end
// let oddPos=0;
// let evenPos=0;
// for(i=0;i<nums.length;i++){
//     if(nums[i]%2==0){
//         temp=nums[i];
//         nums[i]=nums[evenPos];
//         nums[evenPos]=temp;
//         evenPos++;
//       }
//     }
//     for(i=0;i<nums.length;i++){
//      if(nums[i]%2!=0){
//         temp=nums[i];
//         nums[i]=nums[oddPos];
//         nums[oddPos]=temp;
//         oddPos++;
//      }
//     }

// console.log(nums)