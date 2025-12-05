'use script';

// N1

//let m = +prompt("Kiek saldainiu rado Martynas")
//let d = 0
//let s = +prompt("Kiek suvalgita")
//while (s < m){
//    d++
//    s += d
//}
//console.log(`Kai m = ${m}, tai d = ${d}`)

// N2

//let t = +prompt("Įveskite kuro bako talpą:") 
//let n = +prompt("Įveskite kuro sąnaudas n:")
//let l = t
//let d = 0
//while(l > 0) {
//    d++
//    if (d % 2 === 1){
//        l -= 2 * n
//    }
//    else {
//        l -= n
//    }
//}
//console.log(`Keliauti bus galima ${d} dienų/(as)/(ą)`)

// N3

//let m = +prompt("Įveskite knygos skyrių skaičių:")
//let d = 0
//let p = 0
//let v = 0
//while (p < m){
//    d++
//    p += d
//}
//v = m / d
//console.log(`Tadas vidutiniškai per dieną perskaitė ${v.toFixed(2)} skyrius(-ų)`)

// N4

//let q = +prompt("Įveskite veiksmą: (suma - 1, atimtis - 2, daugyba - 3, *didžiausia reikšmė sraute - 4, *mažiausia reikšmė sraute - 5)")
//let a = +prompt("a")
//let b = +prompt("b")
//let c= +prompt("c")
//let d = +prompt("d")
//let s = 0
//if (q == 1){
//    s = a += b += c += d
//    console.log(`suma: ${s}`)
//}
//else if (q == 2){
//    console.log(`atimtis: ${s}`)
//    s = a -= b -= c -= d
//}
//else if (q == 3){
//    s = a *= b *= c *= d *= f 
//    console.log(`daugyba: ${s}`)
//}
//else if (q == 4){
//    s = a <= b <= c <= d
//    console.log(`MAX: ${s}`)
//}
//else if (q == 5){
//    s = a >= b >= c >= d
//    console.log(`MIN: ${s}`)
//}
//else{
//    console.log("ERROR")
//}

// 4 ir 5 ne veikia

// N5

//let a = Math.floor(Math.random() * 11)
//let b = Math.floor(Math.random() * 11)
//let s = a + b
//let i = +prompt (`${a} + ${b} =`)
//while(s == i){
//    console.log("Bandyk dar kartą!")
//    i = +prompt (`${a} + ${b} =`)
//}
//console.log("Valio!")

// N6

//let s = +prompt("Įvesta:")
//let m = 0
//while(s > 0) {
//    m = s % 10
//    console.log(m)
//    s = Math.floor(s / 10)
//}

// N7

//let a = +prompt("Įveskite duomeni:")
//let s = 0
//let t = a
//while(t > 0){
//    s += t % 10
//    t = Math.floor(t / 10)
//}
//console.log(`Gauta: ${s}`)

// N8

//let a = +prompt("Įveskite duomeni:")
//let s = 1
//let f = 0
//let t = a
//while(t > 0){
//    f += t % 10
//    s *= f
//    t = Math.floor(t / 10)
//}
//console.log(`Gauta: ${f}`)

// N9

//let a = +prompt("Įveskite duomeni:")
//let k = 0
//let t = a
//while(t > 0){
//    k++
//    t = Math.floor(t / 10)
//}
//console.log(`Gauta: ${k}`)

// N10

//let a = +prompt("Įveskite duomeni:")
//let t = a
//let l = 0
//let n = 0
//let s = 0
//while(t > 0){
//    s = t % 10
//    if (s % 2 === 0){
//        l++
//    } 
//    else{
//        n++
//    }
//    t = Math.floor(t / 10)
//}
//console.log(`Gauta: lyginių ${l}, nelyginių ${n}`)