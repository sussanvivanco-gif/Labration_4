/* Lösning till uppgift 2. Av Sussan Castro Vivanco, 2026 */

"use strict"

let price= 100;
let amount= 3;

console.log("Pris: " + price + " kr");
console.log("Antal " + amount);

//Beräkning av total av produkt och antal
let total = price * amount;
console.log("Total: " + total + " kr");

//Beräkning av moms
let totalMoms = total *1.25;
console.log ("Total inklusive moms: " + totalMoms + " kr");
