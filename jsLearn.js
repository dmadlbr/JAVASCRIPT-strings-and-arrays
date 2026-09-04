//Generate Random Decimal Number

function randomfun(){
    return Math.random();
}
console.log(randomfun());

//Generate Random Whole Number

var randomNumber=Math.floor(Math.random()*20);
function randomWholeNum() {
    return Math.floor(Math.random() * 10);
}
console.log(randomWholeNum());

//Generate Random Whole Number within a Range

function randomRange(myMin,myMax){
    return Math.floor(Math.random()*(myMax - myMin +1)+myMin);

}
var myRandom = randomRange(4,8);
console.log(myRandom);

//parseInt

function a(str) {
    return parseInt(str)
}
console.log(a('11'));

//Ternary Operator
function checkEqual(a,b){
  return a===b ? true:false;
}
console.log(checkEqual(3,2));

function checkSign(num){
    return num>0? "positive": num<0? "negative":"zero"
}
console.log(checkSign(-8));

//object freeze- freezes your obj,no changes allowed