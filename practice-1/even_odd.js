function checkOddOrEven(number) {
    if (number % 2 === 0) {
        console.log(`${number} is an even number.`);
        return "even";
    } else {
        console.log(`${number} is an odd number.`);
        return "odd";
    }
}

let num = 7; 
let result = checkOddOrEven(num);
