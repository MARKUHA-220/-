// N1

//let totpam = 0;
//let days = ["pirmadienį", "antradienį", "trečiadienį", "ketvirtadienį", "penktadienį"];
//for (let i = 0; i < days.length; i++) {
//    let pam = parseInt(prompt(`Kiek pamoku yra ${days[i]}?`));
//    totpam += pam;
//}
//let totmin = totpam * 45;
//console.log(`Pamokų skaičius: ${totpam}\nTai sudaro minučių: ${totmin}`);

// N2

//let a = parseInt(prompt("Kiek žuvų gyvena akvariume?"))
//let b = parseInt(prompt("Kiek žuvų į akvariumą įdedama kiekvienądieną?"));
//let n = parseInt(prompt("Kiek dienų praėjo?"));
//let totfish = a + b * n
//console.log(`Po ${n} dienų akvariume gyvens ${totfish} žuvų.`);

// N3

//let a = parseInt(prompt("Kiek yra monetų po 5 ct?"))
//let b = parseInt(prompt("Kiek yra monetų po 20 ct?"))
//let c = parseInt(prompt("Kiek yra monetų po 2 EUR?"))
//let cum = (a * 0.05) + (b * 0.20) + (c * 2);
//console.log(`Taupyklėje yra ${cum.toFixed(2)} EUR`)

// N4

//let v = parseFloat(prompt("Koks automobilio greitis?"))
//let distanceM = 264;
//let speeeeeeed = v * 1000/ 3600
//let time = distanceM / speeeeeeed;
//console.log(`Automobilis tunelį pravažiuos per ${time.toFixed(2)} s`)

// N5

//let a = parseInt(prompt("Sienos ilgis m:"))
//let h = parseInt(prompt("Sienos aukštis m:"))
//let k = parseInt(prompt("Plytos kaina EUR:"))
//let wallS = a * 100 * h * 100
//let plytS = 20 * 20
//let plytKol = wallS / plytS
//let totcost = plytKol * k
//console.log(`Plytų kiekis: ${plytKol} \nPlytos kainuos ${totcost.toFixed(2)} EUR`)

// N6

//let a = parseFloat(prompt("Trapecijos ilgesniojo pagrindo ilgis:"))
//let b = parseFloat(prompt("Trapecijos trumpesniojo pagrindo ilgis:"))
//let h = parseFloat(prompt("Trapecijos aukštinės ilgis:"))
//let S = ((a + b) / 2) * h
//console.log(`Trapecijos plotas:${S}`)

// N7

//let cup = parseInt(prompt("Puodelių, kuriuos reikia supakuoti, skaičius:"))
//let m = Math.floor(cup / 3)
//let leftm = cup % 3
//console.log(`Pilnų dėžučių skaičius:${m}\n Nesupakuotų puodelių skaičius:${leftm}`)

// N8 

//let car = parseInt(prompt("Automobilių skaičius:"))
//let cap = parseInt(prompt("Į keltą telpa automobilių:"))
//let trips = Math.floor(cars / cap)
//let noTrans = car % cap
//console.log(`Perkels per kartų:${trips}\n Liks neperkelta:${noTrans}`)

// N9

//let a = parseInt(prompt("Kiek sausainių iškepė Tautvydas?"))
//let b = parseInt(prompt("Keli draugai dar atsinešė po tiek pat sausainių?"))
//let c = parseInt(prompt("Kiek žmonių iš viso dalyvavo šventėje?"))
//let totcuc = a * (b + 1)
//let perb = Math.floor(totcuc / c)
//let leftover = totcuc % c
//console.log(`Kiekvienas šventės dalyvis gavo po ${perb} sausainius\n Tautvydui papildomai atiteko ${leftover} sausainiai`)

// N10

let n = parseInt(prompt("Kiek saldainių gauna Marius?"));
let a = parseInt(prompt("Po kiek saldainių suvalgo?"));
let k = parseInt(prompt("Kelios dienos liko iki Kalėdų?"));
let saved = (n - a) * k;
let gift = Math.floor(saved / a)
let leftover = saved % a
console.log(`Marius dovanas paruoš ${gift} draugų.\n Supakavus dovanas liks ${leftover} saldainiai.`)
