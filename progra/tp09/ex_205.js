var garage = [
    { marque : "EleCar", kWh : 75,  couleur : "jaune" },
    { marque : "EnerSpeed", kWh : 70,  couleur : "rouge" },
    { marque : "Tasle", kWh : 65,  couleur : "jaune" }
];

function printCarsNumber(){
    let acc = 0;
    for(let e of garage){
        acc++;
    }
    console.log("Il y a : " + acc + " voiture dans le garage");
}

function getLastColorCar(){
    console.log("La couleur de la dernière voiture ud garage est : " + garage[garage.length-1].couleur);
}

function yellowLoop(){
    for (let e of garage){
        if (e.couleur === "jaune"){
            console.log("La marque de la voiture jaune est : " + e.marque + " et ses kWh sont : " + e.kWh);
        }
    }
}

