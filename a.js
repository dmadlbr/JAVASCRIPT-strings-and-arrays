//Manpiulating Complex Objects

const team = [
    { teamName : 'teamA',
        colour : "Red and Pink",
        month : 2,
        country : ['India','Qatar']
    },
    {
        teamName : 'teamB',
        colour : "Blue",
        month : 7,
        country : ['USA','China','Dubai'],
        manager:{
            mName:'Kevin Zac',

        }
    }

];
const mangName = team[1].manager.mName  // kevin zac has space so better manager{mName}
console.log(mangName);

// Odd and Even number using For Loop

var oddNumbers = [];
var evenNumbers = [];
for(let i=0;i<=10;i+=2){
    evenNumbers.push(i)
    
}
for(let j=1;j<=10;j+=2){
    oddNumbers.push(j)
}
console.log(evenNumbers);
console.log(oddNumbers);

//reversing

var ourArray =[];
for(let f=10;f>=0;f-=2){
    ourArray.push(f)
}
console.log(ourArray);


var myArray =[];
for(let e=9;e>=1;e-=2){
    myArray.push(e)
}
console.log(myArray);

//Array iteration
var yourArray=[10, 20, 30, 40, 50];
var total=0;
for(let w=0;w<yourArray.length;w++){
    total+=yourArray[w];
}
console.log(total);