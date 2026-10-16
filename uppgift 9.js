/* Lösning till uppgift 9. Av Sussan Castro Vivanco, 2026 */

"use strict"

//Array
const people = [
    { name: "Rita", age: 85, city: "Stockholm" },
    { name: "Vincent", age: 13, city: "Göteborg" },
    { name: "Paula", age: 27, city: "Uppsala" }
];

//Funktion som skriver ut info om en person
function printPersonInfo(person) {

//Avgör om personen är myndig
    const isAdult = person.age >= 18;

    if (isAdult) {
        console.log(`${person.name} bor i ${person.city} och är myndig.`);
    } else {
        console.log(`${person.name} bor i ${person.city} och är inte myndig.`);
    }
}

people.forEach((person) => {
    printPersonInfo(person);
});
