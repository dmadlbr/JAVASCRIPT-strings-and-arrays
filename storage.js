                // localStorage

//setItem
// localStorage.setItem("name","Dheema");
localStorage.setItem("age","22");
localStorage.setItem("fruit","mango");
localStorage.setItem("vegetable","Beetroot");

// //getItem
let name = localStorage.getItem("name");
let age = localStorage.getItem("age");
console.log(name + " is " + age + " years old.");

// //removeItem
let fruit = localStorage.getItem("fruit")
localStorage.removeItem("fruit");
console.log(fruit);

localStorage.removeItem("vegetable");
let vegetable = localStorage.getItem("vegetable");
console.log(vegetable);

//clear
// localStorage.clear();

//after clearing

// localStorage.setItem("name","Dheema");
// localStorage.setItem("age","22");
// localStorage.setItem("fruit","mango");
// localStorage.setItem("vegetable","Beetroot");
// let name2 = localStorage.getItem("name");
// let age2 = localStorage.getItem("age");
// console.log(name2 + " is " + age2 + " years old.");
// localStorage.clear();
// console.log(localStorage.getItem("name"));

localStorage.setItem("place","kerala");
let place = localStorage.getItem("place");
console.log(place);

//setting in console 
let course = localStorage.getItem("course");
console.log(course);



                //JSON - stringify() and parse()
let student = {
    name: "Dheema",
    age: 22,
    course: "Web Development"
};
let stu = JSON.stringify(student);
console.log(stu);

let courses = `"Courses are AI and Web Development"`;
let co = JSON.parse(courses);
console.log(co);

// in localStorage
let employee = {
    name: "Paul",
    age: 24,
    dept: "IT"
};
console.log(employee.name);


let emp = JSON.stringify(employee);
localStorage.setItem("empDetails",emp);
let employeeDetails = localStorage.getItem("empDetails");
console.log(employeeDetails);

//convert it back to access name or age or ....
let empData = JSON.parse(employeeDetails);
console.log(empData);
console.log(empData.age);



let greeting = `"Good morning"`;
let greet = JSON.parse(greeting);
localStorage.setItem("gr",greet);
let g = localStorage.getItem("gr");
console.log(g);


        //storing array
let movies = ['A','B','C','D'];
let str = JSON.stringify(movies);
localStorage.setItem("movie",str);
let movieDetails = localStorage.getItem("movie");

let mo = JSON.parse(movieDetails);
console.log(mo);

//Eg 2
let numbers = [1,2,3,4];
let num = JSON.stringify(numbers);
localStorage.setItem("numberss",num);
let number = localStorage.getItem("numberss"); 
// string 

let numArr = JSON.parse(number);
console.log(numArr);

//Eg 3
let job = ["Developer","Analyst","Tester"];
localStorage.setItem("jobs",JSON.stringify(job));
let jobStr = localStorage.getItem("jobs");
let jobArr = JSON.parse(jobStr);
console.log(jobArr);


        //sessionStorage
// sessionStorage.setItem("game","GTA");
sessionStorage.setItem("sport","football");
let sport = sessionStorage.getItem("sport")
let games = sessionStorage.getItem("game");
console.log(games);
console.log(sport);
