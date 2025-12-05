'use script';

// N1

//let a = 1;
//while (a < 100){
//    a ++;
//    console.log(a);
//}

// N2

//let a = 100
//while (a > 0){
//    a--
//    console.log(a)
//}

// N3

//let a = 0
//while (a < 100){
//    a += 2
//console.log(a)
//}

// N4

//let a = +prompt("Imput number")
//let b = 0
//while (b < a){
//    b++
//    console.log(b)
//}

// N5

//let a = +prompt("Imput number a")
//let b = +prompt("Imput number b")
//let c = a - 1
//while (c < b){
//    c++
//    console.log(c)
//}

// N6

//let a = +prompt("Imput number")
//let b = 1
//let c = 0
//while (b <= a){
//    c += b
//    b++
//    console.log(`Sum is ${c}`)    
//}

// N7

//let a = +prompt("First")-1
//let b = +prompt("Last")
//let c = 0
//let d = a
//while (a != b){
//    d++
//    c=c+d
//    a++
//    console.log(`Sum is ${c}`)
//}
//console.log(`Sum is ${c}`)

// N8

//let a = 1;
//let sum=0;
//while (a<10){
//    a++;
//    console.log(a);
//}
//while (true){
//    let value = +prompt("Enter a number");
//    if (!value){
//        break;
//    }
//    sum += value;
//}
//alert(`Sum ${sum}`);

// N9

//let a = +prompt("Input number")+1
//let b = 0
//let c = 0
//while (b !== a) {
//    c = c + Math.pow(2, b)
//    b++
//}
//console.log(c)

// N10

//let a = +prompt("Input number")
//let b = 1
//let c = 1
//while(a >= b){
//    c *= b
//    b++
//}
//console.log(c)

// N11

//let a
//let b = "carrot"
//let c = "jryy qbar!"
//while (a != b){
//    a = prompt("Type the password:")
//    if (a != b){
//        console.log("Wrong!")
//    }
//    else{
//        console.log(`${a} Right!`)
//        console.log("The secret is: jryy qbar!")
//        break
//    }
//}

// N12
let a = 0
let b = 0
let c
let average
let even = 0
let odd = 0
while(c != -1){
    c = +prompt("Input number")
    if (a == -1){
        break;
    }
    a += c
    b++
    if (c % 2 == 0){
        even++
    }
    else {
        odd++
    }
}
average = a / b
console.log(`The sum is: ${a}. How many numbers: ${b}. Average: ${average}. Even numbers: ${even}. Odd numbers: ${odd}.`)
