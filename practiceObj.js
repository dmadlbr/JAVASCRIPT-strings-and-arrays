const cake ={
    flavour:['chocolate','vanilla','almond'],
    quantity:['1kg','0.5kg'],
    booking:'min - 2 days prior'
};
const{flavour,quantity,booking='1 week before'}=cake;
console.log(booking);
const{flavour:[top1,top2,top3],quantity:[qua1,qua2]}=cake;
console.log(top1);

const food={
    type:['biriyani','ghee-rice'],
    recipe:['recipe1','recipe2']

};

const chef = {...cake,...food};
console.log(chef);
const{flavour:flavours,...other}=cake;
console.log(other);

