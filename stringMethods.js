const name = ' Iam Dheema    ';
const lName = "D-ILBAR";
console.log(name.length);
console.log(name[2]);
console.log(name.at(4));
console.log(name.charAt(4));
console.log(name.indexOf('Iam'));
console.log(name.indexOf());
console.log(name.indexOf('Dh'));
console.log(name.toUpperCase());
console.log(name.toLowerCase());
console.log(name.includes('Dilbar'));
console.log(name.startsWith('H'));
console.log(name.endsWith(' '));
console.log(name.trim());
console.log(name.trimStart());
console.log(name.trimEnd());
console.log(name.slice(1,4));
console.log(lName.slice(1,2));
console.log(name.slice(-9));
console.log(name.slice(1,-8));
console.log(name.replace(' Iam ','My Name is' ));
console.log(name.replace('a',' '));
console.log(name.replaceAll('a',''));
console.log(name.split());
console.log(name.split(' '));
console.log(lName.split('-'));
console.log(name.split(""));
console.log(name);


// ARRAY METHODS //

const arr = ['Apple','Orange','Mango','Banana']
console.log(arr.length);

arr[2] = 'Avocado'
console.log(arr);

console.log(arr.push('Grapes'));
console.log(arr);

console.log(arr.pop());
console.log(arr);

console.log(arr.unshift('Tomato'));
console.log(arr);

console.log(arr.shift());
console.log(arr);

console.log(arr.splice(2,1));
console.log(arr)

console.log(arr.splice(0,1,'Chickoo','Mango'))
console.log(arr)

console.log(arr.splice(1,0,"Litchee",'Pineapple','Guava'))
console.log(arr)

console.log(arr.join())
console.log(arr.join(''))
console.log(arr.join(' '))

console.log(arr.reverse())

console.log(arr.includes('rambuttan'));
console.log(arr.indexOf('rambuttan'));
console.log(arr.indexOf('Pineapple'));

console.log(arr.slice(0,3));
console.log(arr.slice(1,2));
console.log(arr)


