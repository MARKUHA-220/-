'use script';

// N1

//let size = +prompt("Iveskite stulpeliu skaiciu:")
//for (let row = 1; row <= size; row++){
//    let line = ""
//    for (let col = 1; col <= size; col++){
//        if(row % 2 === 0){
//            line += (col % 2 === 0) ? "#" : " "
//        }
//        else{
//            line += (col % 2 === 0) ? " " : "#"
//        }
//    }
//    console.log(line)
//}

// N2

let print = prompt("Iveskite kuoks stulpeliu tipas (a, b, c, d):")
let size = +prompt("Iveskite stulpeliu skaiciu:")
let output = ""
if (print === "a"){
    for (let row = 1; row <= size; row++){
        for (let col = 1; col <= row; col++){
          output += "*"
        }
        output += "\n"
    }
}
else if (print === "b"){
    for (let row = 1; row <= size; row++){
        for (let col = size; col >= row; col--){
          output += "*"
        }
        output += "\n"
    }
}
else if (print === "c"){
    for (let row = 1; row <= size; row++){
        for (let space = size - row; space > 0; space--){
          output += " "
        }
        for (let col = 1; col <= row; col++){
          output += "*"
        }
        output += "\n"
    }
}
else if (print === "d"){
    for (let row = 1; row <= size; row++){
        for (let space = 1; space < row; space++){
          output += " ";
        }
        for (let col = size; col >= row; col--){
          output += "*"
        }
        output += "\n"
    }
}
else{
    output === "ERROR"
}
console.log(output)

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