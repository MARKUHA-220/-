'use script';

// const prompt = require('prompt-sync')({sigint: true});




// let arr = ["apple", "banana", "cherry"]
// for (let key in arr){
//     console.log(arr[key])
// }

// let arr = [1,2,3,4,5]

// console.log(arr)

// console.log(arr.toString(length))
// console.log(arr.pop())

// console.log(arr.push(6))
// console.log(arr)

// console.log(arr.shift(6))
// console.log(arr)


// console.log(arr.unshift(1,0))
// console.log(arr)

// let arr = ["apple", "banana", "cherry"]

// let obj = {
//     name: "john",
//     age: 25
// }

// for (let key in obj){
//     console.log(obj[key])
// }



// let arr = ["apple", "banana", "cherry"]

// arr.forEach(el=>console.log(el))

// arr.forEach((i, el,ar)=>console.log(`${el} has index: ${i} of arrau ${ar}`))

// arr.forEach((el, i, ar) => ar[i] += ".")

// console.log(arr)



// const arr = ["apple", "banana", "cherry"]

// arr[3] = "safdwef"

// console.log(arr)



// const arr = [1,2,3,4,5]

// const arr2 = arr.map((item) => item % 2 == 0 ? item -= 1 : item) 

// console.log(arr)
// console.log(arr2)

// [
//     {name: "Iphone 17 pro nikita", year: 2025, price: 2000.99, quant: 57}
// ]



// const arr = [1,2,3,4,5]
// const arr2 = arr.map((item) => item % 2 == 0 ? item -= 1 : item) 

// console.log(arr)
// console.log(arr2)

// const arr3 = arr.filter(item => item % 2 == 0)
// console.log(arr3)



// const arr = [1,2,3,4,5];
// const arr2 = [...arr]

// arr [1] = "222"

// console.log(arr)
// console.log(arr2)


// N1

//let arr = []
//console.log(arr)
//arr [0] = 4
//arr [1] = 5
//arr [2] = 8
//console.log(arr)

// N2

//let arr = [2,5,6,7,4,9]
//console.log(arr.shift())
//console.log(arr.pop())

// N3

//let arr = [220,451654146515,141];
//arr.forEach((shift, pop) => 
//    console.log(`${shift} - ${pop} vieta`
//))

// N4

//let arr = [8161,5165,1,1,61,61,1,651,54461,34,56,41,45,67831,5]
//for (let i = 0; i <arr.length; i++){
//    console.log(arr[i])
//}
//arr.forEach(i => console.log(i))

// N5

//let arr = [478,451,6500,51450,"gjkbvuirebvigwnrfsd"]
//arr.unshift("Hello", true)
//console.log(arr)

// N6

//let arr = [478,451,6500,51450,"gjkbvuirebvigwnrfsd",6516941641]
//arr[10] = true
//for(let i = 0; i <arr.length; i++){
//    console.log(arr)
//}
//for(let key in arr){
//    console.log(arr[key])
//}
//for(let el in arr){
//    console.log(arr[el])
//}
//arr.forEach(el => console.log(el))

// N7

//let arr = [1,2,3,4,5,6]
//let x = +prompt("Įveskite dydį x:");
//for (let i = 0; i < arr.length; i++) {
//    arr[i] = arr[i] + x;
//}
//console.log(arr);

// N8

//let arr = []
//for (let i = 0; i < 7; i++) {
//    let value = +prompt(`Įveskite reikšmę ${i + 1}:`)
//    arr.push(value)
//}
//console.log(arr) 

// N9

//let arr1 = []
//let arr2 = []
//let sum = []
//for (let i = 0; i < 10; i++) {
//    arr1[i] = +prompt(`Įveskite arr1 ${i} reikšmę:`)
//}
//for (let i = 0; i < 10; i++) {
//    arr2[i] = +prompt(`Įveskite arr2 ${i} reikšmę:`)
//}
//for (let i = 0; i < 10; i++) {
//    sum[i] = arr1[i] + arr2[i]
//}
//console.log(sum)

// N10

//let arr1 = []
//let arr2 = []
//let arr3 = []
//for (let i = 0; i < 7; i++) {
//    arr1[i] = +prompt(`Įveskite arr1 ${i} reikšmę:`);
//}
//for (let i = 0; i < 7; i++) {
//    arr2[i] = +prompt(`Įveskite arr2 ${i} reikšmę:`);
//}
//for (let i = 0; i < 7; i++) {
//    arr3[i] = arr1[i] * arr2[i];
//}
//console.log(arr3);

// N11

//function random(a, b) {
//    let r = parseInt(Math.random() * (b - a + 1) + a)
//    return r
//}
//let arr = []
//let i
//while(true){
//    if(i <= 0){
//        break
//    }
//    i = +prompt("Kuoks indexsas")
//    arr[i] = random(1,10)
//    console.log(arr)
//}

// N12

//let arrA = []
//for (let i = 0; i < 12; i++) {
//    arrA[i] = +prompt(`Įveskite arrA ${i} reikšmę:`)
//}
//let Z = 0
//for (let i = 0; i < arrA.length; i++) {
//    if (arrA[i] === 0) {
//        Z++
//    }
//}
//console.log(`Nulių kiekis (for): ${Z}`)
//
//let zCount = arrA.filter(x => x === 0).length
//console.log(`Nulių kiekis (filter): ${zCount}`)

// N13

//let arrB = Array.from({length: 20}, () => Math.floor(Math.random()*50 - 25))
//let count = 0
//let sum = 0
//for (let i = 0; i < arrB.length; i++) {
//    if (arrB[i] % 3 === 0) {
//        count++
//        sum += arrB[i]
//    }
//}
//console.log(`Masyvas: ${arrB}`)
//console.log(`Kiek dalinasi iš 3: ${count}`)
//console.log(`Suma: ${sum}`)

// filter()

//let arrB = Array.from({length: 20}, () => Math.floor(Math.random()*50 - 25))
//let divisible = arrB.filter(x => x % 3 === 0)
//let count = divisible.length
//let sum = divisible.reduce((a, b) => a + b, 0)
//console.log(`Masyvas: ${arrB}`)
//console.log(`Kiek dalinasi iš 3: ${count}`)
//console.log(`Suma: ${sum}`)


// N14

//let arrC = Array.from({length: 30}, () => Math.floor(Math.random()*40))
//let k = +prompt("Koki kintamaji pakeisti i 100?")
//if (k >= 1 && k <= 30) {
//    arrC[k - 1] = 100
//}
//console.log(arrC)

// N15

//let arrD = Array.from({length: 20}, () => Math.floor(Math.random()*60 - 30))
//let arrE = []
//for (let i = 0; i < arrD.length; i++) {
//    if (arrD[i] > 0) {
//        arrE.push(arrD[i])
//    }
//}
//console.log(`arrD: ${arrD}`)
//console.log(`arrE (teigiami): ${arrE}`)

// N16

//let arrF = Array.from({length: 25}, () => Math.floor(Math.random()*50))
//let k = +prompt("Įveskite k (1–25): ")
//let m = +prompt("Įveskite m (1–25): ")
//console.log(`Pradinis masyvas: ${arrF}`)
//if (k >= 1 && k <= 25 && m >= 1 && m <= 25) {
//    let temp = arrF[k - 1]
//    arrF[k - 1] = arrF[m - 1]
//    arrF[m - 1] = temp
//}
//console.log(`Pakeistas masyvas: ${arrF}`)

// N17

////n1
//let prekes = Array.from({length: 200}, () => Math.random() * 100)
//console.log(`Pradinis masyvas: ${prekes}`)
//
////n2
//let avg = prekes.reduce((a, b) => a + b, 0) / prekes.length;
//console.log(`Vidurkis: ${avg}`)
//
////n3
//let p = +prompt("Įveskite p procentais (pvz. 10, 25, 50): ")
//for (let i = 0; i < prekes.length; i++) {
//    if (prekes[i] < avg) {
//        prekes[i] = prekes[i] * (1 + p / 100)
//    }
//}
//
////n4
//console.log(`Pakeistas masyvas: ${prekes}`)


// N18

//let arrG = Array.from({length: 20}, () => Math.floor(Math.random()*40))
//let k = +prompt("Kurį elementą šalinti? (1–20): ")
//let arrH = []
//for (let i = 0; i < arrG.length; i++) {
//    if (i !== k - 1) {
//        arrH.push(arrG[i])
//    }
//}
//console.log(`Pradinis masyvas arrG: ${arrG}`)
//console.log(`Naujas masyvas arrH: ${arrH}`)

// N19

//let arrQ = Array.from({length: 50}, () => Math.floor(Math.random()*100))
//let k = +prompt("Prieš kurį elementą įterpti? (1–50): ")
//let X = +prompt("Kokią reikšmę X įterpti?")
//let arrY = []
//for (let i = 0; i < arrQ.length; i++) {
//    if (i === k - 1) arrY.push(X)
//    arrY.push(arrQ[i])
//}
//console.log(`arrQ: ${arrQ}`)
//console.log(`arrY (su įterptu X): ${arrY}`)

// N20

//let arrT = Array.from({length: 40}, () => Math.floor(Math.random()*60 - 30))
//let neg = []
//let zero = []
//let pos = []
//for (let i = 0; i < arrT.length; i++) {
//    if (arrT[i] < 0) neg.push(arrT[i])
//    else if (arrT[i] === 0) zero.push(arrT[i])
//    else pos.push(arrT[i])
//}
//let newArr = []
//for (const item of neg) newArr.push(item)
//for (const item of zero) newArr.push(item)
//for (const item of pos) newArr.push(item)
//console.log(`Skaičių masyvas: ${arrT}`)
//console.log(`Naujas masyvas: ${newArr}`)

// N21

//let arrZ = Array.from({length: 70}, () => Math.floor(Math.random() * 200 - 100))
//let min = arrZ[0]
//let max = arrZ[0]
//let minIndex = 0
//let maxIndex = 0
//for (let i = 1; i < arrZ.length; i++) {
//    if (arrZ[i] < min) {
//        min = arrZ[i]
//        minIndex = i
//    }
//    if (arrZ[i] > max) {
//        max = arrZ[i]
//        maxIndex = i
//    }
//}
//console.log(`Min: ${min} Index: ${minIndex}`)
//console.log(`Max: ${max} Index: ${maxIndex}`)

// N22

//const scores = [7, 9, 6, 8, 10, 5, 9, 7]
//let maxScore = scores[0]
//for (let i = 1; i < scores.length; i++) {
//    if (scores[i] > maxScore) {
//        maxScore = scores[i]
//    }
//}
//let minScore = scores[0]
//for (let i = 1; i < scores.length; i++) {
//    if (scores[i] < minScore) {
//        minScore = scores[i]
//    }
//}
//let sum = 0
//for (let i = 0; i < scores.length; i++) {
//    sum += scores[i]
//}
//const sumWithoutMaxMin = sum - maxScore - minScore
//const finalAverage = sumWithoutMaxMin / (scores.length - 2)
//console.log(`Galutinis įvertinimas: ${finalAverage}`)


// N23

//let pazymiai = Array.from({length: 30}, () => Math.floor(Math.random() * 10) + 1)
//let neislaike = 0
//let neislaike = 0
//let sumPazangiu = 0
//let countPazangiu = 0
//for (let mark of pazymiai) {
//    if (mark < 4) neislaike++
//    else {
//        sumPazangiu += mark
//        countPazangiu++
//    }
//}
//let vidurkis = sumPazangiu / countPazangiu
//console.log(`Neišlaikė: ${neislaike}`)
//console.log(`Pažangių vidurkis: ${vidurkis}`)

// N24

//let arrN = Array.from({length: 20}, () => Math.floor(Math.random() * 20) - 10)
//let negatives = arrN.filter(x => x < 0)
//if (negatives.length > 0) {
//    console.log("TAIP")
//    console.log(negatives)
//    console.log(`Kiekis: ${negatives.length}`)
//} else {
//    console.log("NE")
//}


// N25

//let arrS = Array.from({length: 10}, () => Math.floor(Math.random() * 10) - 5)
//let firstNegIndex = -1
//for (let i = 0; i < arrS.length; i++) {
//    if (arrS[i] < 0) {
//        firstNegIndex = i
//        break
//    }
//}
//console.log(`Pirmo neigiamo indeksas: ${firstNegIndex}`)

// N26

//let arrP = Array.from({length: 20}, () => Math.floor(Math.random() * 20) - 10)
//console.log(arrP)

// BUBLE



// SESESETION



// N27

//let array = [10, [], {}, "Text", true, [], 100]
//let boolValue = array.find(x => typeof x === "boolean")
//console.log(boolValue)

// N28

const darbuotojuSarasas = ["Jonas", "Petras", "Ona", "Rasa", "Mantas", "Gerda", "Kotryna"]

// N29

function tikrinti(arr) {
    return arr.every(x => typeof x === "number" && x > 0)
}
console.log(tikrinti([1, -5, 9, 8, -100]))
console.log(tikrinti([1, 5, 9, [1, 2], 8, 100]))
console.log(tikrinti([1, 2, true, 5]))
console.log(tikrinti([1, 2, 5]))