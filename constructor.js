function Student(name,course,age,email){
    this.student = name;
    this.course = course;
    this.age = age;
    this.email = email;
    this.get_email=function(){
        return this.email;
    }
    this.details =function(){
        return this.student + ' is a student of ' + this.course
    }
}

const stuA = new Student('Kevin','Data Science',21,'bhgfgav@example.com');
const stuB = new Student('Jacob','Digital Marketing',22,'oinvhas2@example.com');
console.log(stuA.age);

console.log(stuB.details());
//or
const aboutStu = stuA.details();
console.log(aboutStu);


console.log(stuA.get_email());


//Example 2


function Fruits(fname,color,quantity,origin){
    this.fruit = fname;
    this.color = color;
    this.quantity = quantity;
    this.origin = origin;
    this.get_origin = function(){
        return this.origin;
    }
    this.about = function(){
        return this.fruit + " is so good"
    }
}
const customer1 = new Fruits('Mango','Yellow','1kg','India');
const customer2 = new Fruits('Apple','Red','1.5kg','Malaysia');
console.log(customer2);
console.log(customer1.about());
console.log(customer2.get_origin());

