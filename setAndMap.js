//Set
const set = new Set();
console.log(set);

set.add(10);
set.add(100);
set.add(10);
set.add(1000);
console.log(set);

const arr=[1,2,3];
set.add(arr);
console.log(set);

console.log('size of set is ' + set.size);
console.log(set.delete(arr));
console.log(set.delete(20));
console.log(set);
console.log(set.has(15));
// set.clear();
// console.log(set)

//Loops - for of

const numbers=[10,20,30,40];
for(const elements of numbers){
    console.log(elements);
}

// Loops - for in

const obj ={
    name : 'Dheema',
    age : 22,
    gender : 'female'
};
for(const key in obj){
    console.log(key)
}
for(const key in obj){
    console.log(obj[key])
}

//Map

const map = new Map();
map.set('value1',10);
map.set('value2',15);
map.set('value2',15);
map.set('value2',150);
console.log(map);
console.log(map.size);
console.log(map.get('value2'));
console.log(map.has(150));
console.log(map.has('value1'));
console.log(map.delete('value1'));
console.log(map);
// map.clear();
// console.log(map);

console.log(map.keys());
console.log(map.values());
console.log(map.entries());

//Loop - (for of)because in map,each element [which includes both key and values] is stored as an array.

for(const val of map.entries()){
    console.log(val)
}

for(const [key,value] of map){
    console.log(key + " => " + value)
}
map.set('dheelkdk',90)
for(const val of map){
    console.log(val[0],val[1])
}
