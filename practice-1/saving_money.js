const saving=(arr,number)=>{
if (!Array.isArray(arr) || (typeof(number)!='number' && !Number.isFinite(number))){
    return"Invalid Input";
}else{
    let total = arr.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    let exp =( (total*20)/100)+number;
    let save = total-exp;
    if(save<=0){
        return"more earn";
    }else{
        return total-exp
    }
}
};
let salary=[1000,1000,1000];
let moncost=5000;
moncost=null
console.log(saving(salary,moncost));