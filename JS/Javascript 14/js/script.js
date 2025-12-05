'use script';

// N1

//let n = +prompt("n") 
//let a = +prompt("a") 
//let b = +prompt("b")
//function read(n, a, b){
//      let d = 0
//      let r = 0
//      let current = a
//      while (r < n){
//          r += current
//          current += b
//          d++
//      }
//      return d
//}
//console.log(read(n, a, b))

// N2

//let x = +prompt("x") 
//let y = +prompt("y") 
//let sx = +prompt("sx")
//let sy = +prompt("sy")
//function tiles(x, y, sx, sy){
//      let floorL = sx * 100
//      let floorW = sy * 100
//      let tilesL = Math.ceil(floorL / x)
//      let tilesW = Math.ceil(floorW / y)
//      let totalT = tilesL * tilesW
//      return totalT
//}
//console.log(tiles(x, y, sx, sy))

// N3

//let x1 = +prompt("x1")
//let y1 = +prompt("y1")
//let x2 = +prompt("x2")
//let y2 = +prompt("y2")
//let x3 = +prompt("x3")
//let y3 = +prompt("y3")
//function distance(x1, y1, x2, y2){
//    return Math.sqrt((x2 - x1)**2 + (y2 - y1)**2)
//}
//function triangle(x1, y1, x2, y2, x3, y3){
//    let a = distance(x1, y1, x2, y2)
//    let b = distance(x2, y2, x3, y3)
//    let c = distance(x3, y3, x1, y1)
//    let s = (a + b + c) / 2
//    let area = Math.sqrt(s * (s - a) * (s - b) * (s - c))
//    return area.toFixed(2)
//}
//console.log(triangle(x1, y1, x2, y2, x3, y3))

// N4

//let n = +prompt("n")
//let m = +prompt("m")
//function rNumber(num){
//    return parseInt(num.toString().split('').reverse().join(''))
//}
//function tickets(n, m){
//    let count = 0
//    for (let i = n; i <= m; i++){
//        if (i === rNumber(i)){
//          count++
//        }
//    }
//    return count
//}
//console.log(tickets(n, m))

// N6

function journey(n, a, b, x, y, z){
    function pricePerPerson(count){
        if (count < 10) return x
        else if (count >= 10 && count <= 19) return y
        else return z
    }
    let priceOnePerson = pricePerPerson(n)
    let totalGroup = n * priceOnePerson
    let studentsTotal = a * pricePerPerson(a)
    let teachersTotal = b * pricePerPerson(b)
    let totalWithKids = (n + 4) * pricePerPerson(n + 4)
    let perPersonWithKids = totalWithKids / n
    totalGroup = totalGroup.toFixed(2)
    studentsTotal = studentsTotal.toFixed(2)
    teachersTotal = teachersTotal.toFixed(2)
    totalWithKids = totalWithKids.toFixed(2)
    perPersonWithKids = perPersonWithKids.toFixed(2)
    return [
        Number(totalGroup),
        Number(studentsTotal),
        Number(teachersTotal),
        Number(totalWithKids),
        Number(perPersonWithKids)
    ]
}
console.log(journey(9, 7, 2, 55, 50, 45))