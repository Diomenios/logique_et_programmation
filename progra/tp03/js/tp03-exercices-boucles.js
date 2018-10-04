/* TP 03 - Logique et Programmation */

/**
 * Demande en boucle à l'utilisateur d'introduire une consommation de carburant en litres,
 * soustrait cette consommation de la quantité de carburant initiale (60)
 * et affiche au fur et à mesure la consommation restante à chaque itération
 * puis affiche lorsqu'il n'y a plus de carburant.
 * (Cette fonction ne reçoit aucun paramètre et ne retourne aucun résultat.)
 */
function executerTp03Exemple() {
	let carburant = 60;
	while (carburant > 0) {
		console.log("Il reste " + carburant + " litres de carburant.");
		let consomme = +prompt("Introduisez la quantité de carburant consommée :");
		carburant = carburant - consomme;
	}
	console.log("Fin de boucle. Plus de carburant.");
}

/**
 * Affiche toutes les puissances de 4 en commençant de 4^0.  S'arrete lorsque la puissance de 4
 * est superieur a 10000.
 *
 * @param aucuns parametres ne doivent etre passe a la fonction.
 *
 * @return la fonction ne retourne rien.
 */
function executerTp03Ex01_5() {
	let incr = 1;
	while(incr < 10000){
		console.log(incr);
		incr *= 4;
	}
}

/**
 * Affiche les nombres de 1 a 100 dans l'ordre.
 *
 * @param aucuns parametres ne doivent etre passe a la fonction.
 *
 * @return la fonction ne retourne rien.
 */
function executerTp03Ex01_6() {
	let incr = 1 ;
	while(incr <= 100){
		console.log(incr);
		incr += 1;
	}
}

/**
 * Affiche la table de multiplication de 7 a partir de 2 jusque 10.
 *
 * @param aucuns parametres ne doivent etre passe a la fonction.
 *
 * @return la fonction ne retourne rien.
 */
function executerTp03Ex01_8() {
	let incr = 2;
	while(incr < 11){
		console.log(incr*7);
		incr +=1;
	}
}

/**
 * Génère un nombre au hasard entre 0 et 99,
 * demande a l'utilisateur de rentrer un nombre,
 * indique a l'utilisateur si le nombre qu'il a rentre est plus petit, plus grand ou egal
 * au nombre choisi au hasard
 *
 * @param aucuns parametres ne doivent etre passe a la fonction.
 *
 * @return la fonction ne retourne rien.
 */
function executerTp03Ex01_9a() {
	let secretNumber = Math.floor(Math.random()*100);
	let testNumber = "";
	while(testNumber == "" || isNaN(Number(testNumber)) || Number(testNumber) < 0 || Number(testNumber) > 99){
		testNumber = prompt("Veuillez introduire un nombre entre 0 et 99");
	}
	
	testNumber = Number(testNumber);
	
	if(testNumber > secretNumber){
		console.log("le nombre à trouver est plus petit que le nombre que vous avez rentré");
	}
	else if(testNumber < secretNumber){
		console.log("le nombre à trouver est plus grand que le nombre que vous avez rentré");
	}
	else{
		console.log("vous avez trouvé le bon nombre !!");
	}
}

/**
 * Génère un nombre au hasard entre 0 et 99,
 * demande a l'utilisateur de rentrer un nombre,
 * indique a l'utilisateur si le nombre qu'il a rentre est plus petit, plus grand ou egal
 * au nombre choisi au hasard
 *
 * @param aucuns parametres ne doivent etre passe a la fonction.
 *
 * @return la fonction ne retourne rien.
 */
function executerTp03Ex01_9b() {
	let secretNumber = Math.floor(Math.random()*100);
	let testNumber;
	console.log(secretNumber);
	
	while(Number(testNumber) != secretNumber){
		testNumber = "";
		while(testNumber == "" || isNaN(Number(testNumber)) || Number(testNumber) < 0 || Number(testNumber) > 99){
		testNumber = prompt("Veuillez introduire un nombre entre 0 et 99");
		}
		if(Number(testNumber) === secretNumber){
			break;
		}
		if(Number(testNumber) > secretNumber){
			console.log("le nombre à trouver est plus petit que le nombre que vous avez rentré");
		}
		else{
			console.log("le nombre à trouver est plus grand que le nombre que vous avez rentré");
		}
	}
	console.log("vous avez trouvé le bon nombre !!");
}

function executerTp03Ex02_1(){
	for(let i = 0 ; i<5 ; i++){
		console.log(i);
	}
}

function executerTp03Ex02_2(){
	for(let i = 1 ; i<=5 ; i++){
		console.log(i);
	}
}

function executerTp03Ex02_3(){
	for(let reponse = "" ; reponse != "fin" ; reponse = reponse){
		reponse = prompt('Introduisez "fin" pour arrêter la boucle, ou autre chose pour continuer.');
	}
	console.log("Boucle terminée");
}


