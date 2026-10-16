/* Lösning till uppgift 3. Av Sussan Castro Vivanco, 2026 */

"use strict"

//Variabel
let age = 45;

//Villkor
if (age <18) {
    console.log("Gratis inträde");    
} else if (age >= 18 && age <= 64) {
    console.log("Inträde 100 kr");    
} else {
    console.log("Inträde 50 kr");    
}