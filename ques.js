
// Count Occurrences of a Target Number

let a=[11,50,1,78,54,11,35,11,47];
let target=11;
let c=0;
for(let p=0;p<a.length;p++){
    if(a[p]==target){
        c++;
    }
}
console.log(c);

// Find All Pairs Whose Sum is 10.
let pair=[1,5,4,7,0,6,2,3,8];
let ans=[];
for(let q=0;q<pair.length;q++){
    for(let r=q+1;r<pair.length;r++){
        if(pair[q]+pair[r]==10){
            ans.push([pair[q],pair[r]]);
        }
    }
}
console.log(ans);


//Find Common Elements Without Using includes()
let arr1=[10,20,30,40];
let arr2=[30,50,20,60];
let com=[];
for(let u=0;u<arr1.length;u++){
    for(v=0;v<arr2.length;v++){
        if(arr1[u]==arr2[v]){
            com.push([arr1[u]]);
        }
        
}
}
console.log(com);

//Print square pattern
let n = 5;
for(let x=0;x<n;x++){
    let row=" ";
    for(let y=0;y<n;y++){
        row=row+"*";
        
    }
    console.log(row);
}

//Hollow square
function hollow(n){
    for(i=0;i<n;i++){
        let star=' ';
        for(j=0;j<n;j++){
            if(i===0||j===0||i===n-1||j===n-1){
                star = star + '*';
            }else{
                star = star + ' ';
            }
        }
        console.log(star);
    }
}
hollow(10);

//Print increasing triangle
let star=' ';
for(let e=0;e<n;e++){
     star += '*';
    console.log(star);
    }

//Print Same Number in Each Row 

for(let i=1;i<=5;i++){
    let nums = '';
    for(let j=1;j<=i;j++){
        
        nums = nums+i;
        
    }
    console.log(nums);
}

// Continous Number Pattern
let cou=1;
for(let i=1;i<=4;i++){
    let rows = '';
    for(let j=1;j<=i;j++){
        rows += cou + " ";
        cou++;
    }
    console.log(rows);
}

//Move all the zeros to the end of the array
let array=[0,20,30,0,5,0,70,50,0];
let position = 0;
    for(i=0;i<array.length;i++){
        if(array[i]!=0 ){
            temp=array[i];
            array[i]=array[position]
            array[position]=temp;
            position++;
        }
    }
console.log(array);

// Find the Least Repeated Number
let ar=[1,1,4,5,7,8,9,6,7,5,1,4,1,2,7,9,3,5];
let min=Infinity;
let least= [];
for(i=0;i<ar.length;i++){
    let k=0;
    for(j=0;j<ar.length;j++){
        if(ar[i]==ar[j]){
            k++;
        }
    }
    if(k<min){
        min=k;
        least=[ar[i]];
    }else if (k == min && !least.includes(ar[i])) {
        least.push(ar[i]);
}
}
console.log(least);
//Find the Most Repeated Number
let max=0;
let most=[];
for(i=0;i<ar.length;i++){
    let k=0;
    for(j=0;j<ar.length;j++){
        if(ar[i]==ar[j]){
            k++;
        }
    }
    if(k>max){
        max=k;
        most=[ar[i]];
    }else if(k==max && !most.includes(ar[i])){
        most.push(ar[i])
    }
}
console.log(most)