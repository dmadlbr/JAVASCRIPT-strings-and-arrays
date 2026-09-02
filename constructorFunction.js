function User(name,id,place,email){
    this.username = name;
    this.id = id;
    this.place = place;
    this.email = email;
    this.get_email = function(){
        return(this.email);
    }
}

const user1 = new User("Teena",2132,"Kochi",'nncnkn@gmail.com');
const user2 = new User('Meena',2133,'Kollam','bhshhah@gmail.com');
const user3 = new User('Jeena',2134,'Kochi','bjabdhvh14e2@gmail.com');
console.log(user1,user2,user3);
user1.age=20;
user2.username='Deena'; 
console.log(user1,user2,user3);
console.log(user1.get_email());
console.log(user3.get_email());



// 
function Student(stuName,course,country){
    this.name = stuName;
    this.course = course;
    this.country = country;
    this.introduce = function(){
        console.log('My name is' + this.name);
    }
}
const student1 = new Student('Diya','AI','India');
console.log(student1.introduce());