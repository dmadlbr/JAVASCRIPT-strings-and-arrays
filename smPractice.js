const fruits = new Set(['apple','mango','orange']);
console.log(fruits);
fruits.add('apple');
fruits.add('banana');
console.log(fruits);
console.log(fruits.size);
console.log(fruits.has('apple'));
console.log(fruits.delete('mango'));
console.log(fruits);

for(const fav of fruits){
    console.log(fav)
}

//object
const student={
    name : 'JOHN DOE',
    age:15,
    subject:'PHYSICS'
};

for(const details in student){
    console.log(details,student[details]);
}

const vegetables =new Map([
    ['cabbage','2kg'],
    ['Drumstick','1kg'],
    ['Raddish','2kg']
])
console.log(vegetables.size);
console.log(vegetables.get('Raddish'));
console.log(vegetables.has('2kg'));
console.log(vegetables.has('cabbage'));
console.log(vegetables.delete('cabbage'));
console.log(vegetables.size);
console.log(vegetables.entries());
for(const favourite of vegetables){
    console.log(favourite);
}
for(const favourite of vegetables){
    console.log(favourite[0],favourite[1]);
}
for(const [favourite,quantity] of vegetables){
    console.log(favourite + ' => ' + quantity);
}

