function interval(){
	let retour = "";
	let min;
	let max;
	let newMin;
	
	min = whileCheckingMessage("veuillez introduire la borne inférieur de l'interval");
	max = whileCheckingMessage("veuillez introduire la borne supérieur de l'interval");
	
	if(min%2 == 1){
		newMin = min+1;
	}
	else{
		newMin = min
	}
	
	for(let i =  ; min < max ; min+2){
		
	}
}

function whileCheckingMessage(message){
	let retour = "";
	
	while(retour == "" || isNaN(Number(retour))){
		retour = prompt(message);
	}
	
	return Number(retour)
}