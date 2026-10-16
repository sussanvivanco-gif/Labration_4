/* Lösning till uppgift 3. Av Sussan Castro Vivanco, 2026 */

"use strict"

//Variabel
let age = 75;

//Villkor
if (age <18) {
    console.log("Barn");    
} else if (age >= 18 && age <= 64) {
    console.log("Vuxen");    
} else {
    console.log("Pensionär");    
}