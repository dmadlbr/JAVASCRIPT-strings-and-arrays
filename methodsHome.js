// Hidden name 
const name = "dhe bghcfgxema";
const n = name.slice(0,2);
const res = []
for(i=0;i<name.length-2;i++){
   const hide = '*';
   res.push(hide)
  
}
const stars = res.join('')
const hidName = n + stars;
console.log(hidName);

// Get name from Email
const email = 'ghsjbsjagygJB@gmail.com';
const spli = email.split('@');
const username = spli[0];
const domain = spli[1]
console.log(username)
console.log(domain)

// Email Hide
const e = 'hgjgj12ccf34@gmail.com'
const sp= e.split('@');
const d = sp[1];
const nam = sp[0];
const na = nam.slice(0,2);
const result = []
for (let j=0;j<sp[0].length-2;j++){
    const hi="*";
    result.push(hi)
}
const hiding =result.join('')
console.log(na +hiding+'@'+d)

// Characters

const word ='Laptop';
const w = []
for(i=0;i<word.length;i++){
    const chara = word.charAt(i)
    w.push(chara)
}
console.log(w);

// Count characters

const item = 'Washing Machine';
let c =0;
for(let k=0;k<item.length;k++){
  c++;

}
console.log(c)

// Vowels count

const fruit = 'Mango';
const ch = fruit.split('')
console.log(ch)
let p = 0;

for(let o=0;o<fruit.length;o++){
    const ch = fruit.charAt(o)
    if("aeiou".includes(ch)){
       p++;
      }
}
console.log(p)


// Largest Number 

const numbers = [41,78,5,96,73,42,21];
let lar = numbers[0];
for(let q=1;q<numbers.length;q++){
    if(numbers[q]>lar){
        lar = numbers[q] ;
    }
}
console.log(lar);

// Second largest
const arr =[48,79,21,65,44,99,36,75,10];
let l = arr[0];
let sec = -Infinity;
for(let y=1;y<arr.length;y++){
    if(arr[y]>l){
        sec = l;
        l = arr[y]

    }else if(arr[y]>sec){
        sec = arr[y]
    }
}
console.log(sec)

// Remove space

const sen = 'Happy Onam, Have a Good Day';
let final ='';
for(let f=0;f<sen.length;f++) {
    const current = sen.charAt(f);
    if(current != ' '){
        final = final + current
    }
}
console.log(final);


// Count Words

const senten = 'Iam having a good day';
let co = 1;
for(let w=0;w<senten.length;w++){
    const cur = senten.charAt(w);
    if (cur==" "){
        co++;
      
    }
} 
console.log(co);

