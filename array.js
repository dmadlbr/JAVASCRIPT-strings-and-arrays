const fruits = ['Mango','Orange','Apple'];
const fname="hello";
const details=['dheema',22,'',[]];
console.log(fruits);
console.log(fname);
console.log(details.length)
console.log(fname[2]);
console.log(fruits[2][4]);

//Palindrome
const check = 'malayalam';
let isPal = true;
for(i=0;i<check.length/2;i++){
    const sc = check[i];
    const ec = check[check.length-1-i]
    if(sc != ec){
      isPal=false;
        break;
    }
}
 console.log(isPal)

 //Prime or Not

const checkPrime=(number)=>{
    if (number==1 || number == 0){
        return false;
    }

for(i=2;i<=number/2;i++){
    if(number % i ==0){
        return false;
    }
}
  return number;
}

const nums = [10,11,12,13,14,15,16,17,18,19];
for(let i =0;i< nums.length; i++){
    const element=nums[i];
    const res = checkPrime(element);
    if( res){
        console.log(res)
    }

}

//LARGEST
const sort=[11,4,522,786,10,4,57,889,401,798];
let largest=sort[0];
for(let i=1;i<sort.length;i++){
   
    const ele =sort[i];
    if(ele>largest){
        largest=ele;
    }
}
console.log(largest)


//SECOND LARGEST
const ar=[45,17,89,54,75,32,88,101,56,896,47,325,41,785];
let lar=ar[0];
let secLarge=-Infinity;
for(let i=1;i<ar.length;i++){
    const numbr=ar[i];

    if(numbr>lar){
        secLarge=lar;
        lar=numbr;
    } else if(numbr!=lar && numbr>secLarge) {
        secLarge=numbr
    }
}
console.log(lar,secLarge)

