//Date()

const date = new Date();
console.log(date.getDate());
console.log(date.toISOString());
console.log(date.getHours()+ ":" + date.getMinutes());
console.log(date.toDateString());
console.log(date.toTimeString());
console.log(date.toLocaleString());
console.log(date.toLocaleString("en-IN",{day: "2-digit",month: "long",year:"2-digit",hour:"numeric",minute:"2-digit",second:"2-digit",hour12:true},));
console.log(date.toLocaleString("en-IN",{day: "2-digit",month: "long",year:"2-digit",hour:"numeric",minute:"2-digit",second:"2-digit",hour12:false}));
console.log(date.toLocaleString("en-IN",{day: "2-digit",month: "long",year:"2-digit",hour:"numeric",minute:"2-digit",second:"2-digit",hour12:true}).toUpperCase());

//Math

console.log(Math.PI);
console.log(Math.LOG10E);
console.log(Math.LN10);
console.log(Math.random());
console.log(Math.SQRT2);
console.log(Math.sqrt(64));
console.log(Math.pow(3,3));

const arr=[24,63,44,50,46,28,45,75,16,34]
console.log(Math.max(...arr));
console.log(Math.min(...arr));

console.log(Math.round(1.48));
console.log(Math.round(7.5));
console.log(Math.round(1.948));
console.log(Math.round(1.499));
console.log(Math.floor(3.5987));
console.log(Math.floor(1.01));
console.log(Math.ceil(3.5));
console.log(Math.ceil(1.01));

//Random number between 0 and 9
console.log(Math.floor(Math.random()*10));

//Random number from 0 up to the string's length
const msg = "Good Morning";
console.log(Math.floor(Math.random()*msg.length));

//Random character from the string
console.log(msg[Math.floor(Math.random()*msg.length)]);

//Random password of the requested length
const pass=(len=10)=>{
    const str= "qwertyuioljnbbvajsklkfhgkhdbehrja!@#4*&^%$123";
    const arr=[];
    if (len < 10) {
        alert("Password length should be at least 10");
        return;
    }
    while(arr.length<len){
        const ranLtr = Math.floor(Math.random()*str.length);
        const ranIndx = str[ranLtr];
        arr.push(ranIndx);
    }
    return arr.join("");
}
console.log(pass(12));