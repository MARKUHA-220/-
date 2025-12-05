'use script';

//let user = prompt("User: ");
//let userage = +prompt(`User ${user} age: `);
//console.log(typeof(userage));
//console.log(userage);
//console.log(userage === isNaN);
//
//if (userage<0 || typeof(userage) != 'number'){
//    console.log("ERROR");
//}
//else if (userage >=0 && userage <= 2){
//    console.log(`${user}'s age is ${userage}. He's a baby`);
//}
//else if (userage <= 7){
//    console.log(`${user}'s age is ${userage}. He's a child`);
//}
//else if (userage <= 18){
//    console.log(`${user}'s age is ${userage}. He's a student`);
//}
//else if (userage > 18){
//    console.log(`${user}'s age is ${userage}. He's a adult`);
//}

// N1

//let sk = +prompt("Įveskite skaiciu:")
//if (sk > 0) {
//    console.log(`Saknis: ${Math.sqrt(sk)}`)
//}
//else{
//    console.log("ERROR")
//}

// N2

//let n = +prompt("Kiek degtuku:")
//if (n %4==0) {
//    console.log(n / 4)
//}
//else{
//    console.log("ERROR")
//}

// N3

//let vnt = +prompt("Kuoks kiekis: ")
//let k = +prompt(`Kiekis ${vnt}. Kuokia kaina: `)
//let sum = k * vnt
//if (vnt > 3) {
//    suma *= 0.8
//    console.log(`Kaina su nuolaida: ${sum.toFixed(2)}`)
//}
//else {
//    console.log(`Kaina: ${sum.toFixed(2)}`)
//}

// N4

//let n = +prompt("Dieziu skaicius: ")
//let m = +prompt("Masinos talpa: ")
//let k = Math.ceil (n / m)
//console.log(`Gauta: k --> ${k}`)

// N5

//let num = +prompt("Kuoks pazimis?")
//if (num === 10) {
//    console.log("Tavie musia tievai jeigu bus maziau")
//}
//else if (num === 9) {
//    console.log("👍")
//}
//else if (num === 8) {
//    console.log("Gerai")
//}
//else if (num === 7) {
//    console.log("Irgi gerai")
//}
//else {
//    console.log("LABAI BLOGAI")
//}

// N6

//let num = +prompt("Iveskite skaiciu: ")
//if (typeof(num) != "number" || isNaN(num)) {
//    console.log("ERROR")
//}
//else if (num < 0) {
//    console.log("Neigemsa")
//}
//else if (num == 0) {
//    console.log("Nulis")
//}
//else {
//    console.log("Teigiamas")
//}

// N7

//let angle = Number(prompt("Iveskite kampa: "))
//if (angle < 0){
//    console.log(`${angle} nieteisingas kampas (turi buri daugiau neige 0).`)
//}
//else if (angle <= 90){
//    console.log(`${angle} kampas statusis.`)
//}
//else if (angle <= 180){
//    console.log(`${angle} kampas ištiestinis.`)
//}
//else if (angle <= 360){
//    console.log(`${angle} kampas pilnutinis.`)
//}
//else {
//    console.log(`${angle} perdideleis kampas.`)
//}

// N8

//let num = prompt("Iveskite sakiciu: ")
//if (num >= 100){
//    console.log(`${num} yra triženklis.`)
//}
//else{
//    console.log(`${num} ne yra triženklis.`)
//}

// N9

//let a = prompt("Atkarpa A: ")
//let b = prompt("Atkarpa B: ")
//let c = prompt("Atkarpa C: ")
//if (a+b>c && a+c>b && b+a>c){
//    console.log(`${a}, ${b} ir ${c}, sudaro trikampi.`)
//}
//else {
//    console.log(`${a}, ${b} ir ${c}, tai ne trikampis.`)
//}

// N10

//let num1 = ("Skaicius 1: ")
//let num2 = ("Skaicius 2: ")
//let num3 = ("Skaicius 3: ")
//if (num1 %2==0 || num2 %2==0 || num3 %2==0){
//    console.log("Ivesti sakiciai yra lginiai.")
//}
//else{
//    console.log("Ivesti sakiciai yra ne lginiai.")
//}

// N11

//let num1_1 = 0
//let num1 = +prompt("Iveskite sakiciu 1: ")
//let num2 = +prompt("Iveskite sakiciu 2: ")
//let num3 = +prompt("Iveskite sakiciu 3: ")
//
//if (num1 >= 100){
//    num1_1 += 1
//}
//else{
//    num1_1 += 0
//}
//
//if (num2 >= 100){
//    num1_1 += 1
//}
//else{
//    num1_1 += 0
//}
//
//if (num3 >= 100){
//    num1_1 += 1
//}
//else{
//    num1_1 += 0
//}
//
//switch (num1_1){
//    case 1:
//        console.log("Tik vienas triženklis");
//    break;
//}
//switch (num1_1){
//    case 2:
//        console.log("Tik du triženklis");
//    break;
//}
//switch (num1_1){
//    case 3:
//        console.log("Visi triženklis");
//    break;
//}
//switch (num1_1){
//    case 0:
//        console.log("Nei vienas triženklis");
//}
