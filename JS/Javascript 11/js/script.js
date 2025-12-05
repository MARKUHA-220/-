'use script';

// N1

//let a = +prompt("Įveskite intervalo pradžią:")
//let b = +prompt("Įveskite intervalo pabaigą:")
//let count = 0
//let i = 0
//for (i = a; i <= b; i++) {
//  if (i % 6 === 0) {
//    count++
//  }
//}
//console.log(`Reikalingų marškinėlių skaičius: ${count}`)

// N2

//let n = +prompt("Įveskite žingsnių kiekį iki mokyklos:")
//let claps = 0
//let snaps = 0
//let i = 0
//for (i = 1; i <= n; i++) {
//  if (i % 10 === 0) claps++
//  else if (i % 10 === 5) snaps++
//}
//console.log(`Suplojimų bus: ${claps}. Spragtelėjimų bus: ${snaps}`)

// N3

//let k = +prompt("Įveskite, kiek snaigių nukrito per pirmąją sekundę:")
//let seconds = +prompt("kiek sekundžių snigo:")
//let total = 0
//let i = 0
//for (i = 0; i < seconds; i++) {
//  total += k * Math.pow(2, i)
//}
//console.log(`Snaigių kiekis: ${total}`)

// N4

//let heights = [167, 134, 145, 156, 155, 176];
//let sum = 0
//let i = 0
//for (i = 0; i < heights.length; i++) {
//  sum += heights[i]
//}
//let average = sum / heights.length
//console.log(`Eglutės aukščio vidurkis: ${average}`);

// N5

//let numbers = [2, 9, 4, 100, 25, 5, 6, 3, 5, 85]
//let evenCount = 0
//let i = 0
//for (i = 0; i < numbers.length; i++) {
//  if (numbers[i] % 2 === 0) {
//    evenCount++
//  }
//}
//if (evenCount > 0) {
//  console.log(`Atsakymas: ${evenCount}`)
//} 
//else {
//  console.log("Atsakymas: Nėra")
//}

// N6

//let rolls = [5, 3, 2, 1]
//let maxPoints = rolls.length * 6
//let totalPoints = 0
//let i = 0
//for (let i = 0; i < rolls.length; i++) {
//  totalPoints += rolls[i]
//}
//let averagePoints = totalPoints / rolls.length
//let won = totalPoints > maxPoints / 2
//console.log(`Iš viso buvo galima surinkti taškų: ${maxPoints}`)
//console.log(`Tomas iš viso surinko: ${totalPoints} taškų`)
//console.log(`Jo taškų vidurkis: ${averagePoints.toFixed(1)}`)
//console.log("Loterija", won ? "laimėta." : "pralaimėta.")

// N7

//let jumps = [20, 40, 30]
//let totalJumps = 0
//let i = 0
//for (i = 0; i < jumps.length; i++) {
//  totalJumps += jumps[i]
//}
//let averageJumps = totalJumps / jumps.length
//console.log(`Iš viso: ${totalJumps}`)
//console.log(`Vidutiniškai: ${averageJumps}`)

// N8

//let times = [25, 20, 32]
//let minTime = times[0]
//let sumTime = times[0]
//let i = 0
//for (i = 1; i < times.length; i++) {
//  sumTime += times[i]
//  if (times[i] < minTime) {
//    minTime = times[i]
//  }
//}
//let averageTime = sumTime / times.length
//let difference = Math.round(averageTime - minTime)
//console.log(`Greičiausio bėgiko laikas: ${minTime} sek.`)
//console.log(`Jis buvo ${difference} sek geresnis už vidurkį.`)

// N9

let kiekPirkiniu = 2
let kainos = [105, 1655]
let svoriai = [2000, 2550]
let bendraKaina = 0
let bendraSvoris = 0
for (let i = 0; i < kiekPirkiniu; i++) {
  bendraKaina += kainos[i]
  bendraSvoris += svoriai[i]
}
let vidutineKaina = bendraKaina / kiekPirkiniu
let eur = Math.floor(vidutineKaina / 100)
let ct = Math.round(vidutineKaina % 100)
let petriukoLimitas = 5000
let galesPanešti = bendraSvoris <= petriukoLimitas
console.log(`"Pirkinio vidutinė kaina: ${eur} EUR ${ct} ct`)
console.log("Petriukas", galesPanešti ? "galės" : "negalės", "parnešti pirkinius.")