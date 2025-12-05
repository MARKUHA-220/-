'use script';

// N1

//function randomNumber() {
//    return parseFloat(Math.random().toFixed(2))
//}
//let count1 = +prompt("Kiek skaičių sugeneruoti?")
//let numbers1 = []
//for (let i = 0; i < count1; i++) {
//    numbers1.push(randomNumber())
//}
//console.log(`Rezultatas: ${numbers1.join("; ")}`)


// N2

//function randomNumberN(n) {
//    return parseFloat(Math.random().toFixed(n))
//}
//let count = +prompt("Kiek skaičių sugeneruoti?")
//let n = +prompt("Iki kiek skaitmenų po kablelio suapvalinti?")
//let numbers = []
//for (let i = 0; i < count; i++) {
//    numbers.push(randomNumberN(n));
//}
//console.log(`Rezultatas: ${numbers.join("; ")}`)

// N3

//function randomNumberFrom1to10() {
//    return Math.floor(Math.random() * 10) + 1
//}
//let count = +prompt("Kiek skaičių sugeneruoti?")
//let numbers = []
//for (let i = 0; i < count; i++) {
//    numbers.push(randomNumberFrom1to10())
//}
//console.log(`Rezultatas: ${numbers.join("; ")}`)

// N7

//function getSum(numbers) {
//    return numbers.reduce((sum, num) => sum + num, 0);
//}
//function getAvg(numbers) {
//    return getSum(numbers) / numbers.length;
//}
//function getMaxNumber(numbers) {
//    return Math.max(...numbers);
//}
//function getMinNumber(numbers) {
//    return Math.min(...numbers);
//}
//let numbers = [];
//for (let i = 1; i <= 5; i++) {
//    numbers.push(+prompt(`Įveskite ${i}-ą skaičių:`))
//}
//let operation = +prompt("Kokį veiksmą atlikti? (1 - suma, 2 - vidurkis, 3 - didžiausias, 4 - mažiausias)")
//switch (operation) {
//    case 1:
//        console.log(`Suma: ${getSum(numbers)}`);
//        break;
//    case 2:
//        console.log(`Vidurkis: ${getAvg(numbers).toFixed(2)}`);
//        break;
//    case 3:
//        console.log(`Didžiausias skaičius: ${getMaxNumber(numbers)}`);
//        break;
//    case 4:
//        console.log(`Mažiausias skaičius: ${getMinNumber(numbers)}`)
//        break;
//    default:
//        console.log("ERROR")
//}

//        ###################|
//        #                  |
//        #                  |
//        #                  |
//        #               $$$|$$$
//        #              $$######$$
//        #             $##      ##$
//        #             $##      ##$
//        #             $##      ##$
//        #              $$######$$
//        #                $$##$$
//        #                  ##
//        #                  ##
//        #               ########
//        #              #   ##  #
//        #              #   ##  #
//        #              #   ##  #
//        #                  ##
//        #                ##  ##
//        #                ##  ##
//        #                ##  ##
//        #                ##  ##

// N4

//function randomNumberRange(a, b) {
//    return Math.floor(Math.random() * (b - a + 1)) + a
//}
//let count = +prompt("Kiek skaičių sugeneruoti?")
//let a = +prompt("Įveskite intervalo pradžią (a):")
//let b = +prompt("Įveskite intervalo pabaigą (b):")
//let numbers = [];
//for (let i = 0; i < count; i++) {
//    numbers.push(randomNumberRange(a, b));
//}
//console.log(`Rezultatas: ${numbers.join("; ")}`)

// N6

//function isPrime(a) {
//    if (a < 2) return false;
//    for (let i = 2; i <= Math.sqrt(a); i++) {
//        if (a % i === 0) return false;
//    }
//    return true;
//}
//let start = +prompt("Įveskite intervalo pradžią:")
//let end6= +prompt("Įveskite intervalo pabaigą:")
//let primes = []
//for (let i = start; i <= end; i++) {
//    if (isPrime(i)) primes.push(i)
//}
//console.log(`Rezultatas: ${primes.join("; ")}`);

// N5

function isEven(a) {
    return a % 2 === 0;
}
let start = +prompt("Įveskite intervalo pradžią:")
let end = +prompt("Įveskite intervalo pabaigą:")
let evens = [];
for (let i = start; i <= end; i++) {
    if (isEven(i)) evens.push(i);
}
console.log(`Rezultatas: ${evens.join("; ")}`)