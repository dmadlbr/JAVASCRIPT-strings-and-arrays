
const fruits = {
    model1:['mango','grapes'],
    model2:['banana','avocado'],
    model3:['orange','pineapple']
}
console.log(fruits.model2)

// Destructuring
const {model1,model2,model3} = fruits;
console.log(model3);

// Destructuring array inside object
const {model1:[fruit11,fruit12],model2:[fruit21,fruit22]} = fruits;
console.log(model1[0]);
console.log(fruit12);
console.log(fruits.model2[1]);

//object + array destructuring together

const student = {
    fName: "Alex",
    subjects: ["Maths", "English", "Science","Language"]
};
const {fName,subjects:[sub1,sub2,sub3,sub4],year=2026} = student;
console.log(sub4);
const {fName:stuName,subjects:[subj1,...others]} = student;
console.log(others);
console.log(year);

const student2={
    fName2: "Paul",
    subjects2: ["Social", "Economics", "Philosophy"]
};
const stuDetails = {...student};
const stu2Details = {...student2};
const total = {...student,...student2}
console.log(total);
//If both objects have the same property, the later object wins.later duplicate properties overwrite earlier ones.(so we can name other proprty name for the second object)













