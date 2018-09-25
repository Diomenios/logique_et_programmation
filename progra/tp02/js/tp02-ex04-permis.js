const AGE_CHARNIERE_CONDUCTEUR = 25;
const AGE_CHARNIERE_PERMIS = 2; 

let ageConducteur = +prompt("veuillez introduire votre âge");
let permisConducteur = +prompt("veuillez introduire la durée depuis laquelle vous avez votre permis");
let accidentsConducteur = +prompt("veuillez introduire votre nombres d'accidents");

if(ageConducteur < AGE_CHARNIERE_CONDUCTEUR){
	if(permisConducteur < 2 && accidentsConducteur > 0){
		console.log("la compagnie refuse de vous assurer");
	}
	else if(permisConducteur < 2){
		console.log("la compagnie vous propose un tarif C.");
	}
	else{
		if(accidentsConducteur == 0){
			console.log("la compagnie vous propose un tarif B.");
		}
		else if(accidentsConducteur == 1){
			console.log("la compagnie vous propose un tarif C.");
		}
		else{
			console.log("la compagnie refuse de vous assurer");
		}
	}
}
else{
	if(permisConducteur < 2){
		if(accidentsConducteur == 0){
			console.log("la compagnie vous propose un tarif B.");
		}
		else if(accidentsConducteur == 1){
			console.log("la compagnie vous propose un tarif C.");
		}
		else{
			console.log("la compagnie refuse de vous assurer");
		}
	}
	else{
		if(accidentsConducteur == 0){
			console.log("la compagnie vous propose un tarif A.");
		}
		else if(accidentsConducteur == 1){
			console.log("la compagnie vous propose un tarif B.");
		}
		else if(accidentsConducteur == 2){
			console.log("la compagnie vous propose un tarif C.");
		}
		else{
			console.log("la compagnie refuse de vous assurer");
		}
	}
}