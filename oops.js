                //Class creation,Method creation and Property creation
//EG1
class Student {
    constructor(name){
        this.StuName = name;
    }

    display(){
        console.log("method displayed!");
    }
}

//instance / object
const stu = new Student();
console.log(stu);
stu.display();

const stu1 = new Student("PAUL");
console.log(stu1);

//EG2
class Car {
    constructor(brand){
    this.brand = brand;
}
    display(){
        return this.brand + " M5";
    }
}

const car1 = new Car("BMW");
console.log(car1);
console.log(car1.display());


//EG3
class Fruit {
   constructor(fruitName){
    this.name = fruitName;
   } 
   display(fruit){
    console.log(fruit + " is delicious!");
   }
}
const fru = new Fruit();
fru.display("Mango");

                //Inheritance
class Parent {
    constructor(name,age){
        this.name = name;
        this.age = age;
    }

    display(){
        console.log("Parent invoked");
    }
}

class Child extends Parent{
    constructor(name,age,std){
        super(name,age);
        this.std = std;
    }
    display(){
        // super.display();
        console.log("Child invoked");
    }
}

const c = new Child("Maddy",20,5);
console.log(c);
c.display();

const p = new Parent("Ben",54);
console.log(p);


