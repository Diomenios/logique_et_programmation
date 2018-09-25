/*let retour = prompt("Veuillez introduire votre mot de passe");

if(retour == "Césame"){
	console.log("Ouvert !")
}
else{
	
}*/

let number = prompt("introduisez un nombre");

if(number > 1){
	console.log("vous avez " + number + " nouveaux messages !");
}
else if(number == 1){
	console.log("vous avez un nouveau message !");
}
else{
	console.log("vous n'avez pas de nouveaux messages !");
}