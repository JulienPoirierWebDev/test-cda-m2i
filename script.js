function compterLeNombreDeCaractères(texte) {
	return texte.length;
}

function compterLeNombreDeMots(texte) {
	return texte.split(' ').length;
}

function compterLeNombreDePhrases(texte) {
	const tableauDePhrases = texte.split('.');
	const tableauDePhrasesNettoyé = tableauDePhrases.filter(
		(elementAVerifier) => elementAVerifier !== ''
	);

	const nombreDePhrases = tableauDePhrasesNettoyé.length;

	return nombreDePhrases;
}

const monTexte =
	'Il était une fois un marchand très riche. Il avait six enfants, trois garçons et trois très jolies filles. La cadette était si belle et si intelligente qu’on la surnomma dès son enfance La Belle enfant. Ses sœurs en étaient très jalouses. Elles avaient beaucoup d’orgueil, passaient leurs journées au bal ou au théâtre et à se moquaient de Belle, qui préférait lire des livres. La richesse de la famille étant connue de tous, plusieurs pré-tendants demandèrent les jeunes filles en mariage. Pourtant aucun ne se révéla assez bien pour elles. Les aînées désiraient au moins un duc ou un comte. Belle quant à elle, bien qu’elle remerciât ceux qui souhaitaient l’épouser, préfé-rait rester encore quelques années auprès de son père.';

const nombreCaractères = compterLeNombreDeCaractères(monTexte);
const nombreMots = compterLeNombreDeMots(monTexte);
const nombrePhrases = compterLeNombreDePhrases(monTexte);

//console.log(nombreCaractères, nombreMots, nombrePhrases);

// Je selectionne les élements

const h1 = document.querySelector('h1');

console.log(h1);
h1.innerText = 'Désactive ton micro de basse qualité :)';
h1.classList.toggle('super-classe');

// J'ajoute un écouteur d'évènements sur ces elements

h1.addEventListener(
	'click',

	// Pour y associer une fonction qui s'active quand l'évènement est déclenché.
	() => {
		const timestamp = Date.now();

		h1.textContent = timestamp;
	}
);

// Ajouter un écouteur d'évènement sur l'input lorsque la valeur change

const input = document.querySelector('#paragraph');

console.log(input);

input.addEventListener('change', (event) => {
	console.log('event déclenché');
	console.log(event.target.value);
	const value = event.target.value;
	console.log(compterLeNombreDeCaractères(value));
});
