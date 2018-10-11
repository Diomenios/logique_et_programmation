
let string = "Josephine"

function testEx012(){
	for(let i = 0 ; i < string.length ; i++){
		console.log(string[i]);
	}
}

let stringTwo = "A@ l@@a m@@ate@@rni@té u@@n@ nou@@veau@@@ @pè@re, @@in@@qu@iet@@, @@@dem@@@an@de@ à@ l@@a@@ @s@@a@@g@@@e-@@@@@@@@@@fe@@@@mme:@- Tr@@ou@@@@@@@@vez@@@-vou@s @@qu@@@e @@mon @@@fi@l@s m@e @@r@@es@@se@@mb@@le@ ?@ -@ @O@u@i@,@ @m@a@i@s@ @ce n@'@e@s@t@ @p@@@as @@@@gr@@a@@v@e, l@'e@ss@e@n@t@i@e@l@ @c@'e@st@@ q@@u'i@l@ s@@@oi@@@t e@n@ b@@on@@n@@e@@ @@sa@@@nt@@é @!@";

function testEx013(){
	
	let finalString = "";
	
	for(let i = 0 ; i < stringTwo.length ; i++){
		if(stringTwo[i] != "@"){
			finalString += stringTwo[i];
		}
		else{
			//nothing to do
		}
	}
	console.log(finalString);
}