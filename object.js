const details = {
    fName : 'Dheema',
    regNo : 3217,
    place : 'Kerala',
    age : 22,
    get_age : function(){
        return this.age;
    }
};

console.log(details);
console.log(details.age);
details['place'] = 'Karnataka';
details.age = 20;
console.log(details['place']);
console.log(details.get_age());
const user = 'fName';
console.log(details.user);
console.log(details.fName);
console.log(details[user]);

// Destructuring
//without 
const obj = {
     name : "Hanna",
     age : 20

};
console.log(obj);
const fName = obj.name;
console.log(fName);

//with
const stu = {
     name : "manna",
     age : 21,
     course : 'AI',
     year : 2024,

};
const stu2 = {
     name2 : "rahul",
     age2 : 20,
     course2 : 'web dev',
     
};
const {name:stuName,age,course,year=2022} = stu;
const {name2:stu2Name,age2,course2,year2=2026} = stu2;
console.log(year2)
console.log(stu2)
console.log(name);
console.log(stuName);
console.log(course);
