const employees = [
    { name: "Alice", age: 30, salary: 70000, department: "Engineering" },
    { name: "Bob", age: 45, salary: 80000, department: "Marketing" },
    { name: "Charlie", age: 35, salary: 65000, department: "Engineering" },
    { name: "David", age: 50, salary: 90000, department: "Management" },
    { name: "Eve", age: 28, salary: 50000, department: "Marketing" },
    { name: "Frank", age: 40, salary: 75000, department: "Finance" },
    { name: "Grace", age: 32, salary: 62000, department: "Engineering" },
    { name: "Hannah", age: 27, salary: 55000, department: "Marketing" },
    { name: "Isaac", age: 38, salary: 68000, department: "HR" },
    { name: "Jack", age: 42, salary: 72000, department: "Finance" },
    { name: "Kara", age: 29, salary: 54000, department: "Engineering" },
    { name: "Leo", age: 33, salary: 58000, department: "HR" },
    { name: "Mona", age: 47, salary: 82000, department: "Marketing" },
    { name: "Nina", age: 31, salary: 69000, department: "Finance" },
    { name: "Oliver", age: 36, salary: 73000, department: "Management" }
];

//1. Create a new list that contains the names of all employees in uppercase.
const newList = employees.map(function(name){
    return name.name.toUpperCase();
})
console.log(newList);

//2. Generate a list of employees who earn more than $60,000.
const moreSalary = employees.filter(function(employee){
    if(employee.salary>60000){
        return employee
    }
   
})
console.log(moreSalary);

      //OR
// const moreSalary = employees.filter(function(employee){
//     if(employee.salary>60000){
//         return employee
//     }
   
// })
//  .map(function(emp){
//         return emp.name
//     })
// console.log(moreSalary);

//3. Calculate the total salary of all employees.
const total=employees.reduce(function(pre,ele){
    return pre + ele.salary
},0)
console.log(total);

// 4.Find the average salary of employees in the "Marketing" department.
const marketing = employees.filter(function(emp){
    if(emp.department=="Marketing"){
        return emp;
    }
})
    .reduce(function(pre, emp, index, arr){
        return pre+emp.salary/arr.length;
},0)
console.log(marketing);

// const marketing = employees.filter(function(emp){
//     if(emp.department=="Marketing"){
//         return emp;
//     }
// })
// const total = marketing.reduce(function(pre, emp) {
//     return pre + emp.salary;
// }, 0);

// const average = total / marketing.length;

// console.log(average);

//5.Extract a list of all employee names.
const names = employees.map(function(name){
    return name.name
})
console.log(names);

//6.Create a new array with the ages of all employees increased by 5 years.
const age = employees.map(function(age){
    return age.age +5;
})
console.log(age);

//7.Generate an array with each employee's department and salary.
const arr = employees.map(function(emp){
    return [emp.department,emp.salary];
})
console.log(arr);

//8.Find all employees who are older than 35 years.
const oldEmp = employees.filter(function(emp){
        return emp.age>35
    
})
   .map(function(emp){
    return emp.name
   })
console.log(oldEmp);

//const oldEmp = employees.map(function(emp){
//     if(emp.age > 35){
//         return emp.name;
//     }

// })
// .filter(function(emp){
//     return emp != undefined;
// });

// console.log(oldEmp);

//9.List all employees who work in the "Engineering" department.
const eng = employees.filter(function(emp){
    return emp.department == "Engineering"
})
    .map(function(name){
        return name.name
    })
console.log(eng);

//10.Find the highest salary among all employees.
let highestSalary = 0;
 employees.forEach(function(element){
    if(element.salary>highestSalary){
        highestSalary=element.salary
    }
})
console.log(highestSalary);

//11.Compute the total number of employees. (without using length property)
let count=0;
employees.forEach(function(ele,i){
    count++;
})
console.log(count);

//12.Create a list of names of employees who earn more than $70,000
const list = employees.filter(function(emp){
    return emp.salary>70000;
})
    .map(function(name){
       return name.name
})
console.log(list);

//13.List of formatted strings (name and department) for employees younger than 30.
const formatted = employees.filter(function(age){
    return age.age<30
})
    .map(function(emp){
        return emp.name + "-" +  emp.department;
})
console.log(formatted);

// const formatted = employees
//     .filter(function(emp) {
//         return emp.age < 30;
//     })
//     .map(function(emp) {
//         return `${emp.name} - ${emp.department}`;
//     });

// console.log(formatted);

//14.Compute the total salary of employees in the "Finance" department.
const tot = employees.filter(function(emp){
    return emp.department == 'Finance';
})
    .reduce(function(pre,total){
        return pre + total.salary
    },0)
console.log(tot);

//15.Find the average age of employees in the "Engineering" department.
const avg = employees.filter(function(emp){
    if(emp.department == 'Engineering'){
        return emp.age
    }
})
.reduce(function(pre,tot,i,arr){
    return pre + tot.age / arr.length
},0)
console.log(avg);

//16.Create a list of names of employees who are in the "Marketing" or "HR" departments.
const dept = employees.filter(function(emp){
   if( emp.department == 'Marketing' || emp.department =="HR"){
    return emp.name
   }
})
.map(function(emp){
    return emp.name
})
console.log(dept);

// 17.Get a list of salaries of employees who are not in "Management".
const mng = employees.filter(function(emp){
    if(emp.department != 'Management'){
        return emp
    }
})
.map(function(emp){
    return emp.salary
})
console.log(mng);

//18.Find the total combined age of all employees in the dataset.
const ageTot = employees.reduce(function(pre,tot){
    return pre + tot.age
},0)
console.log(ageTot);

// 19.List the names of employees who have a salary between $60,000 and $80,000.
const emp = employees.filter(function(emp){
    if(emp.salary>=60000 && emp.salary<=80000){
        return emp
    }
})
.map(function(emp){
    return emp.name
})
console.log(emp);

//20.Determine the number of employees who earn more than the average salary.
const avrg = employees.reduce(function(pre,tot,i,arr){
    return pre + tot.salary / arr.length
},0)

const more = employees.filter(function(emp){
    return emp.salary > avrg;
})

console.log(more.length);