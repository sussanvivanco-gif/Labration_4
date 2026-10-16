/* Lösning till uppgift 5. Av Sussan Castro Vivanco, 2026 */

"use strict"

/*skriva ut hela arrayen*/
let food = ["Korv och makaroner", "Köttbullar och potatis med brunsås", "Fiskgratäng med ärtor", "Broccolisoppa med bröd", "Lasagne"];

/*1. skriva ut det första elementet*/
//console.log(food[0]);

/*2. skriva ut det sista elementet*/
//console.log(food[4]);

/*3. lägga till en ny maträtt sist i arrayen*/
//food[5] = 'tacopaj';
food.push("tacopaj");

/*4. ta bort den första maträtten i arrayen*/
//delete food[0]
food.shift();

/*5. skriva ut arrayen igen efter förändringarna*/
console.table(food)