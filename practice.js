// Nested Arrays 

const arr = ['Mango',50];
const nestedArr = [['Maango',50],['Apple',40,1]];
console.log(arr);
console.log(nestedArr);
console.log(nestedArr[0]);
console.log(nestedArr[1][1]);
 
function myFunction(a,b){
    console.log ();
}
myFunction();

// Global scope

var name = 'Dheema';
function yourFunction(){
    place = 'Kerala';
}
function ourFunction(){
     output=' ';
    if(typeof name != undefined){
        output += "name is " + name;

    if(typeof place != undefined){
        output += " place is " +place;
    }
    console.log(output);
}
}
yourFunction();
ourFunction();

// Local scope

function fn(){
    var roll = 90;
    console.log(roll);
    return roll
}
fn();
console.log(fn())

//
var dress = 'tshirt';
function mydress(){
   return dress;
}
console.log(mydress())

//
function minus(numb){
  return numb - 7;
   
}
minus(4);
console.log(minus(4));


// Boolean

function trueOrFalse(isItTrue){
        if(isItTrue){
            return "yes its true"
        }
            return "no its not true"
}
console.log(trueOrFalse());
console.log(trueOrFalse('dma'));
console.log(trueOrFalse(''));
console.log(trueOrFalse(' '));
console.log(trueOrFalse(100));
console.log(trueOrFalse(-8));
console.log(trueOrFalse(0));
console.log(trueOrFalse(NaN));
console.log(trueOrFalse(null));

// Objects

var student = {
    'name' : 'Arun',
    'reg_no': 2104,
    'course':['AI','Web development'],
    'place':"Kerala"

};
console.log(student);
var stuName = student.name;
console.log(stuName);
var stuPlace = student['place'];
console.log(stuPlace);
student.name = 'Arunima';
console.log(student)

//adding new property
student.fees= 50000;
console.log(student);
//or
student['year']=2026;
console.log(student);
//delete
delete student.fees;
console.log(student);

//Lookups

function objLookups(val){
    var result = '';
    var lookup = {
        'AI': 'Tech',
        'WEB DEVELOPMENT':'Tech',
        'DIGITAL MARKETING':'Non-tech',
        'DATA SCIENCE':'Tech'
    };
    result=lookup[val];
    return result;

}
console.log(objLookups('DIGITAL MARKETING'));