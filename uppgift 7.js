/* Lösning till uppgift 7. Av Sussan Castro Vivanco, 2026 */

"use strict"

let numberArray= [2, 5, 20, 8, 15, 6, 8, 1, 10];

console.log("Summan är " + sumArray(numberArray));

function sumArray(arr) {
    return arr.reduce((total, value) => total + value, 0);
}