let var1 = prompt("introuisez le premier nombre");
let var2 = prompt("introuisez le second nombre");
let var3 = prompt("introuisez le troisième nombre");

if(var1 >= var2){
	if(var1 >= var3){
		console.log("la valeur maximale est : "+ var1);
	}
	else{
		console.log("la valeur maximale est : "+ var3);
	}
}
else if(var2 >= var3){
	console.log("la valeur maximale est : "+ var2);
}
else{
	console.log("la valeur maximale est : "+ var3);
}

if(var1 == var2 && var1 == var3){
	console.log("il y a 3 valeurs égales !");
}
else if(var1 == var2 || var1 == var3 || var2 == var3){
	console.log("il y a deux valeurs égales !");
} 
else{
	console.log("toutes les valeurs sont différentes !");
}
