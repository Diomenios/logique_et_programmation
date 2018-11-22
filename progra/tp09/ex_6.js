"use strict";

/**************************************** exercice 6.04 ***************************************************************/

const   TEMPERATURE = 25;

function testerTemperature(temperature){
    if(temperature > TEMPERATURE){
        return true;
    }
    else{
        return false;
    }
}

let temperatures = [25.0, 20.0, 20.5, 27.8, 29.0, 17.2, 34.0];
let temperaturesFiltrees = temperatures.filter(testerTemperature);
console.log(temperatures);
console.log(temperaturesFiltrees);


/**************************************** exercice 6.05 ***************************************************************/

let temperatures2 = [25.0, 20.0, 20.5, 27.8, 29.0, 17.2, 34.0];
let temperaturesFiltrees2 = temperatures.filter(
    function (x){
        if(x>25){
            return true;
        }
        else return false;
    }
);

console.log(temperatures2);
console.log(temperaturesFiltrees2);

/**************************************** exercice 6.07 ***************************************************************/

// voiture est un objet de type : { marque : "uneMarque", couleur : "uneCouleur" }
function testerVoitureJaune(voiture){
    if (voiture.couleur === "jaune"){
        return true;
    }
    else return false;
}

let voitures = [ { marque : "EleCar", couleur : "jaune" },
    { marque : "EpheCar", couleur : "orange" },
    { marque : "ToCar", couleur : "jaune" } ];

let voituresFiltrees = voitures.filter(testerVoitureJaune);
console.log(voitures);
console.log(voituresFiltrees);

/**************************************** exercice 6.09 ***************************************************************/

let temperatures01 = [25.0, 20.0, 20.5, 27.8, 29.0, 17.2, 34.0];
let temperatures02 = [25.0, 10.0, 20.5, 27.8, 9.0, 1.2, 34.0];
let temperatures03 = [-5.0, 10.0, 20.5, -27.8, 9.0, -10.2, 34.0];

function sortByNumber(x, y){
    return y-x;
}

console.log(temperatures01.sort(sortByNumber));
console.log(temperatures02.sort(sortByNumber));
console.log(temperatures03.sort(sortByNumber));

/**************************************** exercice 6.10 ***************************************************************/

// L'objet à tester est de type {marque : "uneMarque", couleur : "uneCouleur"}
function sortByColor(x, y){
    if (x.marque > y.marque) return 1;
    if (x.marque < y.marque) return -1;
    return 0;
}

let voitures2 = [ { marque : "EleCar", couleur : "jaune" },
    { marque : "EpheCar", couleur : "orange" },
    { marque : "ToCar", couleur : "jaune" },
    { marque : "EpheCar", couleur : "bleu" } ];

console.log(voitures2.sort(sortByColor));

/**************************************** exercice 6.11 ***************************************************************/

function sortByColorMajMin(x, y){
    //Majeur
    if (x.marque > y.marque) return 1;
    if (x.marque < y.marque) return -1;
    //Mineur
    if (x.couleur > y.couleur) return 1;
    if (x.couleur < y.couleur) return -1;

    return 0;
}

console.log(voitures2.sort(sortByColorMajMin));

/**************************************** exercice 6.12 ***************************************************************/

// L'objet reçu doit etre de la forme suivante : { nom : "Talu", prenom : "Jean", matricule : "HE100" }
function workflowForMap(element){
    return element.matricule;
}

// array initial
var etudiants = [ { nom : "Talu", prenom : "Jean", matricule : "HE100" },
    { nom : "Fraichi", prenom : "Sara", matricule : "HE101" },
    { nom : "Zarella", prenom : "Maude", matricule : "HE102" } ];

// résultat attendu : ["HE100", "HE101", "HE102"]
console.log(etudiants.map(workflowForMap));

/**************************************** exercice 6.13 ***************************************************************/

function oneForEach(e){
    console.log(e);
}

let listing = [2, 3, "bisou", "caillou", "chouchou", "hibou"];

listing.forEach(oneForEach);

