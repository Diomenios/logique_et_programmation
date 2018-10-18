"use strict";

let pizzas = [];
const LIMITE = 3;
const POIDS_PIZZA = 0.25;

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

function afficherNombreSemaines(){
	let nombreSemaines = pizzas.length;
	console.log("Vous avez introduit des données pour " + nombreSemaines + " " + formatWord("semaine", nombreSemaines) + ".");	
}

function afficherPizzasParSemaine(){
	for(let i = 0 ; i<pizzas.length ; i++){
		console.log("Lors de la semaine " + (i+1) + ", vous avez mangé " + pizzas[i] + " " + formatWord("pizza", pizzas[i]) + ".")
	}
}

function afficherMaximumPizzas(){
	let max = pizzas[0];
	
	for(let i = 1 ; i < pizzas.length ; i++){
		if(max < pizzas[i]){
			max = pizzas[i];
		}
	}
	
	console.log("Le plus grand nombre de pizzas mangées en une semaine est : " + max + ".");
}

function afficherPlusDe3Pizzas(){
	let numb = 0;
	for(let i = 0 ; i < pizzas.length ; i++){
		if(pizzas[i] > LIMITE){
			numb++;
		}
	}
	console.log("Vous avez mangé " + numb + " fois plus de " + LIMITE  + " " + formatWord("pizza", numb) + " durant la semaine.");
}

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

function compterTotalPizzas(){
	let acc = 0;
	for(let i = 0 ; i < pizzas.length ; i++){
		acc += pizzas[i];
	}
	return acc; 
}

function afficherPoidsPizzas(){
	console.log("Au total sur les " + pizzas.length + " " + formatWord("dernière", pizzas.length) + " " + formatWord("semaine", pizzas.length) +
				" vous avez mangé " + (compterTotalPizzas()*POIDS_PIZZA).toFixed(2) + " kg de pizzas.");
}

function afficherMoyennePizzas(){
	if(pizzas.length == 0){
		console.log("vous n'avez pas encore mangé de pizzas !!");
	}
	else{
		let moyenne = compterTotalPizzas()/pizzas.length;
		console.log("En moyenne, vous avez mangé " + moyenne + " " + formatWord("pizza", moyenne) + " par semaine.");
	}
}

function afficherMaxPizzas(nombreSemaines){
	if(nombreSemaines > pizzas.length || nombreSemaines < 1){
		console.log("veuillez utiliser cette fonction avec un nombre valide (plus petit ou égal au nombre de semaines déjà introduites et plus grand que 0) !!");	
	}
	else if(nombreSemaines == pizzas.length){
		console.log("Le plus grand nombre de pizzas mangées sur " + nombreSemaines + " " + formatWord("dernière", nombreSemaines) + " " + 
				formatWord("semaine", nombreSemaines) + " est " + compterTotalPizzas() + ".");
	}
	else{
		let arrayAcc = [] ;
		for(let i = 0 ; i< nombreSemaines ; i ++){
			arrayAcc.push(pizzas[i]);
		}
		let max = returnSumArray(arrayAcc);
		for(let i = nombreSemaines ; i < pizzas.length ; i++){
			let returnNumber;
			arrayAcc.shift();
			arrayAcc.push(pizzas[i]);
			
			returnNumber = returnSumArray(arrayAcc);
			
			if(returnNumber > max ){
				max = returnNumber;
			}
		}
		console.log("Le plus grand nombre de pizza mangées sur " + nombreSemaines + " " + formatWord("dernière", nombreSemaines) + " " + 
				formatWord("semaine", nombreSemaines) + " est "  + max + ".");
	}
}

function returnSumArray(array){
	let acc = 0 ;
	for(let i = 0 ; i < array.length ; i++){
		acc += array[i];
	}
	return acc ;
}

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

function formatWord(word, number){
	if(number > 1){
		return word+"s";
	}
	else{
		return word;
	}
}