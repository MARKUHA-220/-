'use script';

//let random = Math.floor(Math.random()*11);
//let skaiciulet sum = 0;s;
//let sk = 0;
//let answ;
//while (true){
//    let skaicius = +prompt("Iveskite skaiciu");
//    sk++
//    if (skaicius<random){
//        answ = `Per mazai! ${skaicius} < random. Bandimai ${sk}`;
//        console.log(answ);
//    }
//    else if (skaicius>random){
//        answ = `Per daug! ${skaicius} > random. Bandimai ${sk}`;
//        console.log(answ);
//    }
//    else{
//        break;
//    }
//}
//answ = `Atspejai! ${skaicius} = ${random}. Bandimai ${sk}`;
//console.log(answ);


//let a = 1;
//let sum=0;
//while (a<10){
//    a++;
//    console.log(a);
//}

//
//while (true){
//    let value = +prompt("Enter a number");
//    if (!value){
//        break;
//    }
//    sum += value;
//}
//alert(`Sum ${sum}`);

let i = 0;
while(i < 5){
    if(i == 2){
        i++;
        continue;
    }
    console.log(i);
    i++;
}