function paragraphFeature() {
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

	// Selectionner mon bouton
	// Selection de l'input
	// Selection du paragraphe

	const buttonCaractères = document.querySelector('.caractères');
	const buttonMots = document.querySelector('.mots');
	const buttonPhrases = document.querySelector('.phrases');

	const input = document.querySelector('#paragraph');
	const resultCaractères = document.querySelector('.result-caractères');
	const resultMots = document.querySelector('.result-mots');
	const resultPhrases = document.querySelector('.result-phrases');

	console.log(buttonCaractères);

	buttonCaractères.addEventListener('click', (event) => {
		event.preventDefault();

		const value = input.value;

		console.log(value);
		resultCaractères.innerText = compterLeNombreDeCaractères(value);
	});

	buttonMots.addEventListener('click', (event) => {
		event.preventDefault();

		const value = input.value;

		const nombreMots = compterLeNombreDeMots(value);

		resultMots.innerText = nombreMots;
	});

	buttonPhrases.addEventListener('click', (event) => {
		event.preventDefault();
		handlePhrasesButtonClick(event);
	});

	const handlePhrasesButtonClick = (event) => {
		const value = input.value;

		const nombrePhrases = value;

		resultPhrases.innerText = `<div><p>Hello</p><p>${nombrePhrases}</p></div>`;
	};
}

function guessNumberFeature() {
	let nombreRecherché;
	let nombreDeCoup = 0;

	const startButton = document.querySelector('.button');
	const containerJeu = document.querySelector('.container');
	const containerPresentation = document.querySelector(
		'.container-presentation'
	);
	const validateButton = document.querySelector('.validate');
	const inputReponse = document.querySelector('#reponse');
	const feedback = document.querySelector('.feedback');
	const rejouerButton = document.querySelector('.rejouer');

	startButton.addEventListener('click', () => {
		console.log('button');

		containerPresentation.classList.add('hidden');
		containerJeu.classList.remove('hidden');

		nombreRecherché = Math.ceil(Math.random() * 100);

		console.log(nombreRecherché);
	});

	validateButton.addEventListener('click', () => {
		console.log(inputReponse.value, nombreRecherché);
		if (inputReponse.value === '') {
			return;
		}

		if (inputReponse.value < 0 || inputReponse.value > 100) {
			feedback.innerText = `Mais tu as mis np quoi Oo !!!`;
			return;
		}

		nombreDeCoup++;
		if (nombreRecherché < inputReponse.value) {
			feedback.innerText = "C'est moins !";
			console.log("c'est moins");
		} else if (nombreRecherché > inputReponse.value) {
			console.log("c'est plus");
			feedback.innerText = "C'est plus !";
		} else {
			console.log("C'est gagné :)");
			feedback.innerText = `BINGO ! Vous avez gagné en ${nombreDeCoup} coups`;
			rejouerButton.classList.remove('hidden');
		}
	});

	rejouerButton.addEventListener('click', () => {
		nombreRecherché = Math.ceil(Math.random() * 100);
		inputReponse.value = '';
		rejouerButton.classList.add('hidden');
		feedback.innerText = '';
	});
}

guessNumberFeature();

