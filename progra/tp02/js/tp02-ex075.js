let stock = 0;

function like(){
	stock += 1;
}

function dislike(){
	stock -= 1;
}

function result(){
	if(stock < 0){
		console.log(stock + " personne(s) n'aime(nt) pas");
	}
	else{
		console.log(stock + " personne(s) aime(nt)");
	}
}

function rest(){
	stock = 0;
}