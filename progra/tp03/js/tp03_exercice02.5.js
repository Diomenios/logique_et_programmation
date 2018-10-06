/**
*	Prend en parametre le message a afficher dans le prompt,
* retourne la valeur entree par l'utilisateur.
*	Pourra etre etendue pour verifier les valeurs rentree par l'utilisateur(car non
*	demande dans l'exercice).
* @param {string} message - affiche un message sur le prompt
*
* @return {string} valeur introduite par l'utilisateur
*/
function intervalle(){
	let retour = "";
	let min;
	let max;
	let newMin;
	let somme;
	let longueur;

	//recuperation de la valeur du min
	min = whileCheckingMessage("veuillez introduire la borne inférieur de l'intervalle");
	if (isNaN(parseInt(min))) {
		console.log("erreur, vous n'avez pas introduit un nombre correct");
		return;
	}
	min = parseInt(min);

	//recuperation de la valeur du max
	max = whileCheckingMessage("veuillez introduire la borne supérieur de l'intervalle");
	if (isNaN(parseInt(max))) {
		console.log("erreur, vous n'avez pas introduit un nombre correct");
		return;
	}
	max = parseInt(max);

	longueur = max-min+1

	//convertion du min pour permettre de trouver le nombre de pair dans l'intervalle
	if(min%2 == 1){
		newMin = min+1;
	}
	else{
		newMin = min
	}

	console.log("Le(s) nombre(s) pair(s) de cet intervalle :");

	//recherche des nombres pairs de l'intervalle
	for(let i =  newMin ; i =< max ; i+2){
		console.log(i);
	}

	//print en console des differents elements demandes
	console.log("");
	console.log("Dans cet intervalle :");
	console.log("* il y a " + longueur + "nombre(s)");
	if (min < 0) {
		console.log("* il y a " + (0-min) + "nombre(s) négatif(s)");
	}
	else {
		console.log("* il y a 0 nombre(s) négatif(s)");
	}

	//sommation des nombres compris dans l'intervalle
	for (let i = min; i =< max; i++) {
		somme += i;
	}
	console.log("* la somme donne " + somme);
	console.log("* la moyenne est " + (somme/longueur).toFixed(2));

}

/**
*	Prend en parametre le message a afficher dans le prompt,
* retourne la valeur entree par l'utilisateur.
*	Pourra etre etendue pour verifier les valeurs rentree par l'utilisateur(car non
*	demande dans l'exercice).
* @param {string} message - affiche un message sur le prompt
*
* @return {string} valeur introduite par l'utilisateur
*/
function whileCheckingMessage(message){
	let retour = "";

	while(retour == ""){
		retour = prompt(message);
	}

	return retour;
}
