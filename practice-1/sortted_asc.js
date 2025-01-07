let array = [15, 3, 20, 10, 7, 5, 8, 1, 12, 2, 17, 19, 4, 9, 18, 13, 6, 16, 14, 11];


function sortAndPrint(arr) {
    if (Array.isArray(arr)) {
        let sortedArray = arr.sort((a, b) => a - b);
        console.log("=>", sortedArray);
    } else {
        console.log("Input is not an array");
    }
}

sortAndPrint(array);
