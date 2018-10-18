"use strict";

function EX02_3(){
	let cotesGenerales = [
	[ "HE2017", [10.0, 12.5,  0.0,  0.0, 17.0,  8.5] ],
	[ "HE2018", [14.0, 15.5, 20.0, 19.5, 17.0, 18.5] ],
	[ "HE2019", [ 0.0,  0.0,  0.0,  0.0,  0.0,  0.0] ],
	[ "HE2020", [14.0,  3.0, 15.5] ]
	];
	
	console.log("matricule du 3ième étudiant : " + cotesGenerales[2][0]);
	console.log("les cotes du premier étudiant : " + cotesGenerales[2][1]);
	console.log("la 4ième cotes du deuxième étudiant : " + cotesGenerales[1][1][3]);
}

function EX02_4a(matricule, cotes){
	let acc = 0;
	let max = cotes[0];
	let coursReussis = 0;
	let nullPointer = 0;
	
	for(let i = 0 ; i < cotes.length ; i ++){
		acc += cotes[i];
		if(max < cotes[i]){
			max = cotes[i];
		}
		if(cotes[i] > 10){
			coursReussis++;
		}
		else if(cotes[i] == 0){
			nullPointer++;
		}
		else{
			continue;
		}
	}
	
	console.log("L'étudiant " + matricule + " a " + (acc/cotes.length) + " de moyenne, sa plus haute cote est " + max +
				", il a " + coursReussis + " cote(s) à au moins 10 et " + nullPointer + " cote(s) à 0.");
}

function EX02_4b(){
	let acc = 0;
	let max = cotes[0];
	let coursReussis = 0;
	let nullPointer = 0;
	
	for(let i = 0 ; i < cotes.length ; i ++){
		acc += cotes[i];
		if(max < cotes[i]){
			max = cotes[i];
		}
		if(cotes[i] > 10){
			coursReussis++;
		}
		else if(cotes[i] == 0){
			nullPointer++;
		}
		else{
			continue;
		}
	}
	return [(acc/cotes.length), max, coursReussis, nullPointer];
}

function traiterCotes(cotes){
	
}

function afficherResultats(matricule, resultats){
	console.log("L'étudiant " + matricule + " a " + resultats[0] + " de moyenne, sa plus haute cote est " + resultats[1] +
				", il a " + resultats[2] + " cote(s) à au moins 10 et " + resultats[3] + " cote(s) à 0.");
}