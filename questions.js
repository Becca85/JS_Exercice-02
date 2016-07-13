/**
 * Exercice sur les chaines de caractères.
 * Trouvez la façon de faire la plus optimal.
 * Il peut y avoir plusieur façon de faire.
 */

/**
 * Exercices sur les nombres et les caluls mathématiques
 */
function tailleString(string){
    var result = string.length;
    return result;
   };

function remplaceCar(string,avant, apres){
	var result = string.replace(avant,apres);
	return result;
}

function concatString(string1,string2){
	var result = string1.concat(string2);
	return result;
}

function afficherCar(string,caractere){
	var result = string.substring(caractere-1,caractere);
	return result;
}

function afficherNCar(string, chiffre){
	var result = string.substring(0,chiffre);
	return result;
}

function majusculeString(string){
	var result = string.toUpperCase();
	return result;
}

function SupprEspaceString(string){
	var result = string.trim()
	return result;
}

function IsString(chaine){
	if (typeof chaine==="string"){
	return true;
}
}


function AfficherExtensionString(nomDuFichier){
	var result = nomDuFichier.substr(nomDuFichier.lastIndexOf(".") +1);
	return result;
}

function NombreEspaceString(nomDuFichier){
	var result = nomDuFichier.split(" ").length - 1;
	return result;
}

function InverseString(nomDuFichier){
	var result = nomDuFichier.split("").reverse().join("");
	return result;
}

function minusculeString(phrase){
	var result = phrase.toLowerCase();
	return result;
}

function countDistinctCar(phrase){
	var result = phrase.split("").filter(function(phrase, i, tab) {
		return tab.indexOf(phrase) === i;
	}).length;
	return result;
}



function calculPuissance(x,y){
	var result = Math.pow(x,y);
	return result;
}


function valeurAbsolue(a){
	var result = Math.abs(a);
	return result;
}


function valeurAbsolueArray(tab){
	var result = tab.map(Math.abs);
	return result;
}

function sufaceCercle(x){
	var surface = Math.PI*x*x;
	var result = Math.round(surface);
	return result;
}

function hypothenuse(x,y){
	var x = x*x;
	var y = y*y;
	var result = Math.sqrt(x+y);
	return result;
}


function calculIMC(x,y){
	var imc = x/(y*y);
	var result = imc.toFixed(2);
	return Number(result);
}