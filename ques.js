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




