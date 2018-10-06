let total = 0;
let nombreCotes = 4;

for (let i = 0; i < nombreCotes; i++) {
  cote = +prompt('Introduisez une cote /20 :');
  if (cote === 0) {
    total = 0;
    //permet de sortir de la boucle directement
    //d'ou le placement d'une instruction break ici
    break;
  }
  else {
    total += cote;
  }
}
alert("La moyenne est de : " + (total / nombreCotes).toFixed(2) );
