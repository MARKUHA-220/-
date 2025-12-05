'use script';

// N1

//let A = [1, 2, 3]
//let B = [4, 5, 6]
//let C = []
//for (let i = 0; i < A.length; i++) {
//    C.push(A[i])
//}
//for (let i = 0; i < B.length; i++) {
//    C.push(B[i])
//}
//console.log(C)

// N2 

//let A = [1, 2, 3]
//let B = A
//console.log(B)

// N3

//let a = [1,2,3,4,5]
//let sum = 0
//for (let i = 0; i <a.length; i++){
//    sum += a[i]
//}
//console.log(sum)

// N4

//let a = [1,-2,23,54,5]
//let max = a[0]
//for (let i = 1; i < a.length;i++){
//    if (a[i] > max) max =a [i]
//}
//console.log(max)

// N5

//let a = [1,-2,23,54,5]
//let max = a[0]
//for (let i = 1; i < a.length;i++){
//    if (a[i] < max) max =a [i]
//}
//console.log(max)

// N7

//let a = [1,2,3,4,5,6]
//let b = []
//for (let i = a.length - 1; i >= 0; i--) b.push(a[i])
//console.log(b)

// N6

//let a = [1,2,3,4,10]
//let sum = 0
//for(let i = 0; i < a.length; i++) sum += a[i]
//let avg = sum / a.length
//console.log(avg)

// N8

//let a = [1,2,3,4,5,6]
//let b =[]
//for (let i = 0; i < a.length; i++){
//    if (a[i] % 2 !== 0){
//    b.push(a[i])
//    }
//}
//console.log(b)

// N9

//let a = [1,2,3,4,5,6]
//let index = 2
//let b = []
//for (let i = 0; i < a.length; i++) {
//    if (i !== index) b.push(a[i])
//}
//console.log(b)

// N10

//let a = [5,2,5,4,5,6]
//let remove = 5
//let b = []
//for (let i = 0; i < a.length; i++) {
//    if (a[i] !== remove) b.push(a[i])
//}
//console.log(b)

// N11

//let a = [1,'2',3,'4',5]
//let b = []
//for (let i = 0; i < a.length; i++) {
//    if (typeof a[i] !== "string") b.push(a[i])
//}
//console.log(b)

// N13

//let a = [1,-2,3,-4,5,-6]
//let b = []
//let c = []
//for (let i = 0; i < a.length; i++) {
//    if (a[i] > 0) b.push(a[i])
//    else c.push(a[i])
//}
//console.log(b)
//console.log(c)

// N12

//let a = [12,2,6,5,15,32,4,8]
//let b = []
//for (let i = 0; i < a.length; i++) {
//    if (!(a[i] > 5 && a[i] < 20)) b.push(a[i])
//}
//console.log(b)

// N14

//let a = [1.5, 3.2, 3, 8, 5.8, 6]
//for (let element of a) {
//  let index = a.indexOf(element)
//  let check = isNaN(element)
//  if (check === false) {
//    a.splice(index, 1)
//  }
//}
//console.log(a)

// N15

//let a = ['obuolys', 'katinas', 'saulė', 'data']
//let b = []
//a = a.slice(3, 5)
//b = a
//console.log(b)

// N16

//let a = ['obuolys', 'katinas', 'kilogramas', 'data']
//let char = "k"
//let b = []
//for (let i = 0; i < a.length; i++) {
//    if (!a[i].startsWith(char)) b.push(a[i])
//}
//console.log(b)


// N18

//let a = [12, 2, 6, 5, 15, 32, 4, 8]
//for (let i = 0; i < a.length; i++) {
//    for (let j = 0; j < a.length - 1; j++) {
//        if (a[j] > a[j + 1]) {
//            let temp = a[j]
//            a[j] = a[j + 1]
//            a[j + 1] = temp
//        }
//    }
//}
//console.log(a)

// N19

//let a = ['katė', 'antis', 'šuo', 'gyvatė']
//for (let i = 0; i < a.length; i++) {
//    for (let j = 0; j < a.length - 1; j++) {
//        if (a[j].length > a[j + 1].length) {
//            let t = a[j]
//            a[j] = a[j + 1]
//            a[j + 1] = t
//        }
//    }
//}
//console.log(a)

// N20

//let a = [[1, 2, 3],[4, 5, 6],[7, 8, 9]]
//let sum = 0
//for (let i = 0; i < a.length; i++) {
//    for (let j = 0; j < a[i].length; j++) {
//        sum += a[i][j];
//    }
//}
//console.log(sum)

// N17

//let a = ['OBUOLYS', 'Katinas', 'Mama', 'DATA']
//for (let i = 0; i < a.length; i++) {
//    let b = a[i]
//    let isUpper = true
//    for (let j = 0; j < b.length; j++) {
//        let c = b[j]
//        if (c >= 'a' && c <= 'z') {
//            isUpper = false
//            break
//        }
//    }
//    if (isUpper) console.log(b)
//}

