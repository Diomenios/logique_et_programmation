function forLoopThreeMax(){
	let max;
	for(let i = 0 ; i<3 ; i++){
		let retour = +prompt("veuillez introduire un nombre");
		if(max < retour){
			max = retour;
		}
	}
	console.log("le nombre maximale est : "+max);
}

function whileChecking(){
	let retour = "";
	while(retour == "" || isNaN(Number(retour)) || Number(retour) < 0 || Number(retour) > 99){
		retour = prompt("Veuillez introduire un nombre");
		}
	return Number(retour);
}

function forLoopThreeMaxUpdated(){
	let max;
	for(let i = 0 ; i<3 ; i++){
		let retour = whileChecking();
		if(max < retour){
			max = retour;
		}
	}
	console.log("le nombre maximale est : "+max);
}