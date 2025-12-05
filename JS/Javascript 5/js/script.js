'use script';

// N1

// let g = 9.8
// let h = +prompt("Iš kokio aukščio šoka parašiutininkas?") 
// let t = +prompt("Per kiek sekundžių išsiskleidžia jo parašiutas?")
// if (isNaN(h) || isNaN(t) || h < 0 || t < 0){
//     console.log("Iveskite kaska normalous!");
// }
// else{
//     let Fall = Math.sqrt(2 * h / g)
//     if (t <= Fall) {
//         console.log("Parašiutas išsiskleis")
//     }
//     else{
//         console.log("Parašiutas neišsiskleis")
//     }
// }

// N2

// let m = +prompt("Kiek sveria varlė?")
// let n = +prompt("Kiek varlių norima stebėti?")
// let t = 5000

// if (isNaN(m) || isNaN(n) || n < 0 || m < 0){
//     console.log("Iveskite kaska normalous!");
// }
// else{
//     let total = m * n
//     if (total <= t) {
//         console.log("Varlių stebėjimui pakanka")
//     }
//     else{
//         console.log("Varlių stebėjimui per mažai")
//     }
// }

// N3

// let num1 = +prompt("Kokius pažymius gavo Mokinis (pirmas)?")
// let num2 = +prompt("Kokius pažymius gavo Mokinis (antras)?")
// let num3 = +prompt("Kokius pažymius gavo Mokinis (trecias)?")
// let num4 = +prompt("Kokius pažymius gavo Mokinis (ketvirtas)?")
// let num5 = +prompt("Kokius pažymius gavo Mokinis (penktas)?")
// let avg = ((num1 + num2 + num3 + num4 + num5) / 5 )
// if (avg > 9){
//     console.log("Mokinis gaus tris saldainius")
// }
// else if (avg <= 9 && avg >= 7){
//     console.log("Mokinis gaus du saldainius")
// }
// else if (avg <= 7 && avg > 0){
//     console.log("Mokinis gaus viena saldainius")
// }
// else{
//     console.log("ERROR")
// }

// N4

// let a = +prompt("Įveskite kainas a")
// let b = +prompt("Įveskite kainas b")
// let n1 = +prompt("Įveskite kiekius n1")
// let n2 = +prompt("Įveskite kiekius n2")
// let n3 = +prompt("Įveskite kiekius n3")
// let k = +prompt("Įveskite bandelės kainą:")
// if (isNaN(a) || isNaN(b) || isNaN(n1) || isNaN(n2) || isNaN(n3) || isNaN(k)){
//     console.log("Iveskite kaska normalous!");
// }
// else {
//     let count;
//     if (k <= a) {
//         count = n1
//     }
//     else if (k < b){
//         count = n2
//     }
//     else{
//         count = n3
//     }
//     let total = count * k
//     console.log(`Už bandeles bus sumokėta: ${total.toFixed(2)} EUR.`)
// }

// N5

// let num1 = +prompt("Įveskite klasių vidurkius:")
// let num2 = input.trim()/split(/\s+/)
// let scor = parts.map(s => parseFloat(s.replace(',','.')))
// let maxscor = Math.max(...scor)
// let diffs = []
// for (let i = 0; i < scores.length; i++){
//     if(scor[i] !== maxscor){
//         diffs.push((maxscor - scor[i]).toFixed(2.replace(/\.00$/,'')))
//     }
// }
// let msg = `Didžiausias vidurkis: ${Number.isInteger(maxscor) ? maxscor : maxscor}.`
// masg += `Kitų klasių vidurkiai skiriasi: ${diffs.join(", ")}`

// // Formuojame išvedimą (panašiai kaip pavyzdyje)
// let msg = "Didžiausias vidurkis: " + (Number.isInteger(maxScore) ? maxScore : maxScore) + ". ";
// msg += "Kitų klasių vidurkiai skiriasi: " + diffs.join(", ");
// console.log(msg)
// console.log(`Vidurkiai: ${scor}`)
// console.log(`Maksimalus: ${maxscorscor}`)
// console.log(`Skirtumai: ${diffs}`)