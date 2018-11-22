"use strict";

/********************************************* exercice 7.01 **********************************************************/

// si aucun paramètre n'est passé, Date prend la date du jour sur l'ordinateur
let date = new Date();
console.log(date.getDay(), date.getMonth());

// new Date(year, month, day, hours, minutes, seconds, milliseconds)
let date2019 = new Date("2019", "0", "1", "12", "13", "00");
console.log(date2019.getFullYear());

function selectDay(numberOfDay){
    switch (numberOfDay){
        case 0 : return "Lundi";
            break;
        case 1 : return "Mardi";
            break;
        case 2 : return "Mercredi";
            break;
        case 3 : return "Jeudi";
            break;
        case 4 : return "Vendredi";
            break;
        case 5 : return "Samedi";
            break;
        case 6 : return "Dimanche";
            break;
        default : return "error";
    }
}