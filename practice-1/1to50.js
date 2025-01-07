function printDivisibleBy5And3() {
    for (let i = 1; i <= 50; i++) {
        if (i % 5 === 0 && i % 3 === 0) {
            console.log("=> " + i);
        }
    }
}

printDivisibleBy5And3();
