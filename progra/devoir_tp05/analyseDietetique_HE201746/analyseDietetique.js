"use strict";

//initialisation des variables globales
let pizzas = [];
const LIMITE = 3;
const POIDS_PIZZA = 0.25;

/***************************  fonctions auxiliaires *************************/

/*
*	Demande à l'utilisateur de rentrer un nombre de pizzas via un prompt.
* Vérifie si l'entrée de l'utilisateur est valide.
* Dans le cas d'une entrée non-valide, le prompt redemande à l'utilisateur de renter une valeur.
*
* @return {string} retour Retourne la valeur valide sous la forme d'un String.
*/
function verifPrompt(){
	let retour = "";
	while(retour == "" || isNaN(Number(retour)) || Number(retour)<0){
		retour = prompt("Combien de pizzas avez-vous mangé cette semaine ? (pour quitter : tapez fin,"+
		"pour supprimer le dernier ajout tapez : sup et pour réinitialiser votre compteur de pizzas : tapez reinit)");

		if(retour == "fin" || retour == "sup" || retour == "reinit"){
				break;
		}
	}
	return retour;
}

/*
* Fonction permettant d'adapter un mot au pluriel dans le cas nécessaire.
*
* @return {string} word Le mot mis au pluriel ou non en fonction de la condition.
*/
function formatWord(word, number){
	if(number > 1){
		return word+"s";
	}
	else{
		return word;
	}
}

/*************************** fonctions de l'exercice **************************/

/*
* Permet d'introduire une nouvelle valeur dans l'array globale pizzas via un prompt.
* Vérifie que la valeur introduite est bien un chiffre positif et pas : un "" ou un
* string ou un chiffre négatif.
*/
function introduirePizzas(){
	while(true){
		let retour = verifPrompt();

		if(retour == "fin"){
			console.log("break time");
				break;
		}
		else if(retour == "sup"){
			console.log("pop time");
			pizzas.pop();
		}
		else if(retour == "reinit"){
			console.log("reinit time");
			pizzas = [];
		}
		else{
			console.log("push time");
			pizzas.push(Number(retour));
		}
	}
}

/*
* Affiche en console le nombre de semaines encodées dans l'array pizzas.
*/
function afficherNombreSemaines(){
	let nombreSemaines = pizzas.length;
	console.log("Vous avez introduit des données pour " + nombreSemaines + " " + formatWord("semaine", nombreSemaines) + ".");
}

/*
* Affiche en console le nombre de pizzas mangées par semaine.
*/
function afficherPizzasParSemaine(){
	for(let i = 0 ; i<pizzas.length ; i++){
		console.log("Lors de la semaine " + (i+1) + ", vous avez mangé " + pizzas[i] + " " + formatWord("pizza", pizzas[i]) + ".")
	}
}

/*
* Affiche en console le nombre maximum de pizzas mangées en une semaine.
*/
function afficherMaximumPizzas(){
	let max = pizzas[0];

	for(let i = 1 ; i < pizzas.length ; i++){
		if(max < pizzas[i]){
			max = pizzas[i];
		}
	}
	console.log("Le plus grand nombre de pizzas mangées en une semaine est : " + max + ".");
}

/*
* Affiche en console le nombre de semaine où au moins 3 pizzas ont été mangées;
*/
function afficherPlusDe3Pizzas(){
	let numb = 0;
	for(let i = 0 ; i < pizzas.length ; i++){
		if(pizzas[i] > LIMITE){
			numb++;
		}
	}
	console.log("Vous avez mangé " + numb + " fois plus de " + LIMITE  + " " + formatWord("pizza", numb) + " durant la semaine.");
}

/*
* Affiche en console le nombre de pizzas mangées durant un nombre de semaines dernières
* rentré en paramètre.
*
* @param {number} nombreSemaines Le nombre de semaines durant lesquelles on veut
* 															 compter les pizzas mangées.
*/
function afficherDernieresPizzas(nombreSemaines){
	let acc = 0 ;
	if(nombreSemaines < 1){
		console.log("erreur, cette fonction nécessite un nombre de semaine plus grand que 0 ; ");
		return;
	}
	else if(nombreSemaines > pizzas.length){
		for(let i = 0 ; i < pizzas.length ; i++){
			acc += pizzas[i];
		}
	}
	else {
		for(let i = 0 ; i < pizzas.length ; i++){
			if(i >= pizzas.length - nombreSemaines){
				acc += pizzas[i];
			}
		}
	}
	console.log("Lors des " + nombreSemaines + " " + formatWord("dernière", nombreSemaines) + " " +
				formatWord("semaine", nombreSemaines) +", vous avez mangé " + acc + " " + formatWord("pizza", acc) + ".");
}

/*
* Compte le combre de pizzas total qui ont été enregistrée dans l'array pizzas.
*
* @return {number} acc Le nombre de pizzas total qui ont été enregistré.
*/
function compterTotalPizzas(){
	let acc = 0;
	for(let i = 0 ; i < pizzas.length ; i++){
		acc += pizzas[i];
	}
	return acc;
}

/*
* Affiche en console le poids des pizzas qui ont été mangées.
* Utilise la fonction compterTotalPizzas() pour avoir le nombre total des pizzas mangées.
*/
function afficherPoidsPizzas(){
	console.log("Au total sur les " + pizzas.length + " " + formatWord("dernière", pizzas.length) + " " + formatWord("semaine", pizzas.length) +
				" vous avez mangé " + (compterTotalPizzas()*POIDS_PIZZA).toFixed(2) + " kg de pizzas.");
}

/*
* Affiche en console le nombre moyen de pizzas mangées par semaine.
* Utilise la fonction compterTotalPizzas() pour obtenir le nombre totale de pizzas.
* Arrondis ce nombre au deux premières décimale.
*/
function afficherMoyennePizzas(){
	if(pizzas.length == 0){
		console.log("vous n'avez pas encore mangé de pizzas !!");
	}
	else{
		let moyenne = (compterTotalPizzas()/pizzas.length).toFixed(2);
		console.log("En moyenne, vous avez mangé " + moyenne + " " + formatWord("pizza", moyenne) + " par semaine.");
	}
}

/*
* Affiche en console le plus grand nombre de pizzas mangées sur un
* certains nombre de semaines consécutives.
*
* @param {number} nombreSemaines Le nombre de semaines consécutives durant lesquelles
* 															 on veut faire le calcul.
*/
function afficherMaxPizzas(nombreSemaines){
	if(nombreSemaines > pizzas.length || nombreSemaines < 1){
		console.log("veuillez utiliser cette fonction avec un nombre valide (plus petit ou égal au nombre de semaines déjà introduites et plus grand que 0) !!");
	}
	else if(nombreSemaines == pizzas.length){
		console.log("Le plus grand nombre de pizzas mangées sur " + nombreSemaines + " " + formatWord("dernière", nombreSemaines) + " " +
				formatWord("semaine", nombreSemaines) + " est " + compterTotalPizzas() + ".");
	}
	else{
		let sum = 0;
		for(let i = 0 ; i< nombreSemaines ; i ++){
			sum += pizzas[i]
		}
		let max = sum;
		for(let i = nombreSemaines ; i < pizzas.length ; i++){
			sum += pizzas[i] - pizza[i-nombreSemaines];
			if(sum > max ){
				max = sum;
			}
		}
		console.log("Le plus grand nombre de pizza mangées sur " + nombreSemaines + " " + formatWord("dernière", nombreSemaines) + " " +
				formatWord("semaine", nombreSemaines) + " est "  + max + ".");
	}
}
