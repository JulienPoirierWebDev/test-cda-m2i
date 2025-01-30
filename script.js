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

//guessNumberFeature();

const moviesList = [
	{
		title: '🌌 Plongée dans la science-fiction', // h2
		name: 'Interstellar', // h3
		//p
		description:
			"Une odyssée spatiale fascinante où un groupe d'astronautes explore les confins de l'univers pour sauver l'humanité.",
		genre: 'Science-fiction', // li
		ambiance: 'Épique et contemplative', //li
		origin: 'États-Unis', //li
	},
	{
		title: '🕵️ Suspense et enquête',
		name: 'Sherlock',
		description:
			'Une série moderne où Sherlock Holmes et John Watson résolvent des mystères dans un Londres contemporain.',
		genre: 'Enquête',
		ambiance: 'Intrigante et intelligente',
		origin: 'Royaume-Uni',
	},
	{
		title: '🎭 Émotions et drames',
		name: 'The Pursuit of Happyness',
		description:
			'Un film inspirant sur un père et son fils qui luttent pour une vie meilleure, porté par une performance émouvante de Will Smith.',
		genre: 'Drame',
		ambiance: 'Inspirante et émotive',
		origin: 'États-Unis',
	},
	{
		title: '😂 Pour une dose d’humour',
		name: 'Brooklyn Nine-Nine',
		description:
			"Une comédie hilarante suivant les aventures d'une équipe de détectives dans un commissariat de New York.",
		genre: 'Comédie',
		ambiance: 'Légère et humoristique',
		origin: 'États-Unis',
	},
	{
		title: '⚔️ Épopées épiques',
		name: 'Le Seigneur des Anneaux',
		description:
			"Une trilogie légendaire où le bien et le mal s'affrontent dans un univers fantastique riche et captivant.",
		genre: 'Fantastique',
		ambiance: 'Épique et immersive',
		origin: 'Nouvelle-Zélande',
	},
	{
		title: '❤️ Romance et légèreté',
		name: 'The Notebook',
		description:
			"Une histoire d'amour intemporelle qui explore les hauts et les bas d'une relation passionnée.",
		genre: 'Romance',
		ambiance: 'Romantique et poignante',
		origin: 'États-Unis',
	},
	{
		title: '💥 Action et adrénaline',
		name: 'Mad Max: Fury Road',
		description:
			'Une course effrénée dans un désert post-apocalyptique, avec des cascades spectaculaires et une tension constante.',
		genre: 'Action',
		ambiance: 'Intense et dynamique',
		origin: 'Australie',
	},
	{
		title: '🎶 Pour les mélomanes',
		name: 'La La Land',
		description:
			"Une comédie musicale moderne célébrant l'amour, les rêves et la passion pour la musique et le cinéma.",
		genre: 'Comédie musicale',
		ambiance: 'Rêveuse et artistique',
		origin: 'États-Unis',
	},
	{
		title: '🧙 Magie et aventures',
		name: "Harry Potter à l'école des sorciers",
		description:
			"Le début d'une saga magique où un jeune sorcier découvre ses pouvoirs et un monde enchanté.",
		genre: 'Fantastique',
		ambiance: 'Magique et mystérieuse',
		origin: 'Royaume-Uni',
	},
	{
		title: '🌱 Nature et contemplation',
		name: 'Into the Wild',
		description:
			"L'histoire vraie d'un jeune homme qui quitte tout pour vivre une aventure solitaire au cœur de la nature sauvage.",
		genre: 'Aventure',
		ambiance: 'Solitaire et méditative',
		origin: 'États-Unis',
	},
	{
		title: '😨 Frissons garantis',
		name: 'Get Out',
		description:
			'Un thriller psychologique glaçant qui explore les tensions sociales et des secrets inquiétants.',
		genre: 'Thriller',
		ambiance: 'Angoissante et surprenante',
		origin: 'États-Unis',
	},
	{
		title: '🌟 Histoires inspirantes',
		name: 'Forrest Gump',
		description:
			"Un classique intemporel qui raconte la vie extraordinaire d'un homme simple mais au destin incroyable.",
		genre: 'Drame',
		ambiance: 'Émotive et inspirante',
		origin: 'États-Unis',
	},
	{
		title: '🌍 Voyage et exploration',
		name: 'The Secret Life of Walter Mitty',
		description:
			"Un film inspirant sur la quête de soi et l'aventure à travers des paysages incroyables.",
		genre: 'Aventure',
		ambiance: 'Émerveillée et motivante',
		origin: 'États-Unis',
	},
	{
		title: '👾 Univers dystopiques',
		name: 'Black Mirror',
		description:
			'Une série qui explore les conséquences effrayantes des avancées technologiques sur la société.',
		genre: 'Science-fiction',
		ambiance: 'Dystopique et perturbante',
		origin: 'Royaume-Uni',
	},
	{
		title: '🎩 Mystères magiques',
		name: 'The Prestige',
		description:
			'Deux magiciens rivaux dans une quête obsessionnelle pour réaliser le tour parfait.',
		genre: 'Thriller',
		ambiance: 'Mystérieuse et captivante',
		origin: 'États-Unis',
	},
];

const container = document.querySelector('.container');

function createMovieCard(oneMovie) {
	const div = document.createElement('div');
	div.classList.add('card');

	const h2 = document.createElement('h2');
	h2.textContent = oneMovie.title;

	const h3 = document.createElement('h3');
	h3.textContent = oneMovie.name;

	const p = document.createElement('p');
	p.textContent = oneMovie.description;

	const ul = document.createElement('ul');

	const li1 = document.createElement('li');
	li1.textContent = oneMovie.ambiance;
	const li2 = document.createElement('li');
	li2.textContent = oneMovie.genre;

	const li3 = document.createElement('li');
	li3.textContent = oneMovie.origin;

	ul.append(li1, li2, li3);

	div.append(h2, h3, p, ul);

	container.appendChild(div);
}

for (const oneMovie of moviesList) {
	createMovieCard(oneMovie);
}
