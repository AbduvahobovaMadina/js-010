// console.log("js");

{
    //  array ichida son berildi shu arrayni musbat sonlarini array qilib qaytaring
    function numbers(arr) {
        let result = [];
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] > 0) {
                result.push(arr[i]);
            }
        }
        
        return result;
    }
    let a = [-5, -3, 7, 9, -2];
    // console.log(numbers(a)); 
}


{
    // string kiradi teskari qilib qaytaring
    function reverseString(input) {
        return input.split('').reverse().join('');
    }
    
    // console.log( reverseString("Hello world!") );
}


{
    // number kiradi teskari qilib qaytaring
    function reverseNumber(num){
        return parseFloat(num.toString().split('').reverse().join('')) * Math.sign(num);
    }

    // console.log(reverseNumber(1234));
}

{
    // array ichida boolen bo'ladi. faqat falselarni array qilib qaytaring
    function getFalseValues(arr){
        return arr.filter(value => value === false);
    }
    let originalArray = [true, false, false, true, false, true];
    let falseArray = getFalseValues(originalArray);
    // console.log(falseArray);
}


{
    // arrayni ichidagi faqat juft sonlarni yig'indisini qaytaring
    function sumEvenNumbers(arr) {
        return arr
            .filter(value => value % 2 === 0)
    
            .reduce((sum, value) => sum + value, 0);
    }
    
    let originalArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    let sumOfEvens = sumEvenNumbers(originalArray);
    // console.log(sumOfEvens); 
}

{
    // rray ichida sonlar berildi. Har bir sonni darajasini array qilib qaytaring
    function squareNumbers(arr) {
        return arr.map(value => value * value);
    }
    
    let originalArray = [1, 2, 3, 4, 5];
    let squaredArray = squareNumbers(originalArray);
    // console.log(squaredArray); 
}

{
    // n sonigacha bo'lgan sonlarni array qilib qaytaring
    function createArrayUpToN(n) {
        return Array.from({ length: n }, (_, i) => i + 1);
    }
    
    let n = 30;
    let arrayUpToN = createArrayUpToN(n);
    // console.log(arrayUpToN);
}

{
    // a dan b gacga juft sonlarni array qilib qaytaring
    function getEvenNumbersBetween(a, b) {
        let evenNumbers = [];
        for (let i = a; i <= b; i++) {
            if (i % 2 === 0) {
                evenNumbers.push(i);
            }
        }
        return evenNumbers;
    }
    
    let a = 3;
    let b = 15;
    let evenNumbers = getEvenNumbersBetween(a, b);
    // console.log(evenNumbers);
}

{
    // ismni bosh harfini katta qailib qaytaring
    function capitalizeFirstLetter(name) {
        if (!name) return name;
        return name.charAt(0).toUpperCase() + name.slice(1);
    }
    
    let name = "madina";
    let capitalized = capitalizeFirstLetter(name);
    // console.log(capitalized); 
}

{
    // berilgan stringni n marta ko'paytirib string qilib qaytaring
    function repeatString(str, n) {
        return str.repeat(n);
    }
    
    let originalString = "hello ";
    let repeatedString = repeatString(originalString, 7);
    // console.log(repeatedString); 
}

{
    // arrayni teskarisini qaytaring
    function reverseArray(arr) {
        return arr.slice().reverse();
    }
    
    let originalArray = [1, 2, 3, 4, 5];
    let reversedArray = reverseArray(originalArray);
    // console.log(originalArray); 
    // console.log(reversedArray);
}

{
    // arrayni ascending sort qilib qaytaring
    function sortAscending(arr) {
        return arr.slice().sort((a, b) => a - b);
    }
    
    let originalArray = [5, 2, 9, 1, 5, 16];
    let sortedArray = sortAscending(originalArray);
    // console.log(originalArray);
    // console.log(sortedArray);
}