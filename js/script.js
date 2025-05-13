function showImages(location) {
	const imageContainer = document.getElementById('image-container');
	imageContainer.innerHTML = ''; // Vide le conteneur avant d'ajouter les nouvelles images

	// Gère l'état actif des boutons de la section "Bureaux des étudiants"
	const buttons = document.querySelectorAll('.bureaux-buttons button');
	buttons.forEach(button => button.classList.remove('active')); // Retire la classe active de tous les boutons

	// Ajoute la classe active au bouton cliqué
	const activeButton = Array.from(buttons).find(button => button.getAttribute('onclick').includes(location));
	if (activeButton) activeButton.classList.add('active');


  
	  let images = [];
	  if (location === 'nantes') {
		images = [
		  {
			src: '../images/BDEN.png',
			caption: 'BDE',
			title: 'BDE IMTemporel',
			description: `
			  <p>BDE de Nantes.</p>
			  <h3>Bureau Restreint</h3>
			  <h3>Pôle Intégration</h3>
			  <h3>Pole Event</h3>
			  <h3>Pole Com</h3>
			  <h3>Pole Log</h3>
			  <h3>Pole Sponso</h3>
			  <h3>Respo projet & Tech</h3>
			`
		  },
		  {
			src: '../images/BDAN.png',
			caption: 'BDA',
			title: 'BDA Gendartmes',
			description: `
			  <p>Description du BDA de Nantes.</p>
			`
		  },
		  {
			src: 'https://i1.sndcdn.com/artworks-cyPfB06dovMGt6jl-OBislg-t500x500.jpg',
			caption: 'BDS',
			title: 'BDS Asphaltes',
			description: `
			  <p>Description du BDS de Nantes.</p>
			`
		  },
		  {
			src: 'https://i1.sndcdn.com/artworks-cyPfB06dovMGt6jl-OBislg-t500x500.jpg',
			caption: 'BDD',
			title: 'BDD Ecorazon',
			description: `
			  <p>Description du BDD de Nantes.</p>
			`
		  },
		  {
			src: 'https://i1.sndcdn.com/artworks-cyPfB06dovMGt6jl-OBislg-t500x500.jpg',
			caption: 'BDI',
			title: 'BDI Iscape',
			description: `
			  <p>Description du BDI de Nantes.</p>
			`
		  }
		];
	  } else if (location === 'brest') {
		images = [
		  {
			src: 'https://i1.sndcdn.com/artworks-cyPfB06dovMGt6jl-OBislg-t500x500.jpg',
			caption: 'BDE',
			title: 'BDE Breizh To The Future',
			description: `
			  <p>Description du BDE de Brest.</p>
			`
		  },
		  {
			src: 'https://i1.sndcdn.com/artworks-cyPfB06dovMGt6jl-OBislg-t500x500.jpg',
			caption: 'BDA',
			title: 'BDA Pixart',
			description: `
			  <p>Description du BDA de Brest.</p>
			`
		  },
		  {
			src: 'https://i1.sndcdn.com/artworks-cyPfB06dovMGt6jl-OBislg-t500x500.jpg',
			caption: 'BDS',
			title: 'BDS Super Mario Bras',
			description: `
			  <p>Description du BDS de Brest.</p>
			`
		  },
		  {
			src: 'https://i1.sndcdn.com/artworks-cyPfB06dovMGt6jl-OBislg-t500x500.jpg',
			caption: 'BDD',
			title: 'BDD',
			description: `
			  <p>Description du BDD de Nantes.</p>
			`
		  },
		  {
			src: 'https://i1.sndcdn.com/artworks-cyPfB06dovMGt6jl-OBislg-t500x500.jpg',
			caption: 'BDI',
			title: 'BDI',
			description: `
			  <p>Description du BDI de Nantes.</p>
			`
		  }
		];
	  }
	  
	  
  
	  // Ajoute les images et leurs légendes au conteneur
	  images.forEach(item => {
		const imgWrapper = document.createElement('div');
		imgWrapper.classList.add('image-wrapper');
  
		const img = document.createElement('img');
		img.src = item.src;
		img.alt = item.caption;
		img.onclick = () => openModal(item.title, item.description); // Ajoute un événement onclick
  
		const caption = document.createElement('p');
		caption.textContent = item.caption;
		caption.classList.add('image-caption');
  
		imgWrapper.appendChild(img);
		imgWrapper.appendChild(caption);
		imageContainer.appendChild(imgWrapper);
	  });
  }



  function showVSS(location) {
	const imageContainer = document.getElementById('image-container');
	imageContainer.innerHTML = ''; // Vide le conteneur avant d'ajouter les nouvelles images
  
	// Gère l'état actif des boutons de la section "Bureaux des étudiants"
	const buttons = document.querySelectorAll('.bureaux-buttons button');
	buttons.forEach(button => button.classList.remove('active')); // Retire la classe active de tous les boutons
  
	// Ajoute la classe active au bouton cliqué
	const activeButton = Array.from(buttons).find(button => button.getAttribute('onclick').includes(location));
	if (activeButton) activeButton.classList.add('active');
  
	// Données des personnes à afficher
	let people = [];
	if (location === 'nantes') {
	  people = [
		{ src: 'images/person1.png', name: 'Jeanne Euzebio', phone: '07 68 22 25 10' },
		{ src: 'images/person2.png', name: 'Célian Tissier', phone: '07 88 73 45 23' },
		{ src: 'images/person3.png', name: 'Maxime Arbez', phone: '07 87 19 83 95' },
		{ src: 'images/person4.png', name: 'Zoe Loiseau', phone: '07 82 91 92 63' }
	  ];
	} else if (location === 'brest') {
	  people = [
		{ src: 'images/person5.png', name: 'Nélia Fedele', phone: '06 32 00 41 56' },
		{ src: 'images/person6.png', name: 'Tristan D\'Herve', phone: '06 17 75 04 17' },
		{ src: 'images/person7.png', name: 'Barthélemy Loret', phone: '06 95 29 02 86' },
		{ src: 'images/person8.png', name: 'Tiphaine Schrenck', phone: '07 67 62 91 28' }
	  ];
	}
  
	// Ajoute les images et leurs légendes au conteneur
	people.forEach(person => {
	  const imgWrapper = document.createElement('div');
	  imgWrapper.classList.add('image-wrapper');
	  imgWrapper.style.textAlign = 'center'; // Centre la légende sous l'image
	  imgWrapper.style.margin = '10px'; // Ajoute un espace autour de chaque image
	  imgWrapper.style.width = '142px'; // Fixe une largeur uniforme pour les conteneurs
	  imgWrapper.style.height = '250px'; // Fixe une hauteur uniforme pour les conteneurs
	  imgWrapper.style.display = 'inline-block'; // Aligne les conteneurs horizontalement
	  
  
	  const img = document.createElement('img');
	  img.src = person.src;
	  img.alt = person.name;
	  img.style.maxWidth = '150px'; // Limite la largeur des images
	  img.style.borderRadius = '10px'; // Ajoute des coins arrondis
  
	  const name = document.createElement('p');
	  name.textContent = person.name;
	  name.style.fontWeight = 'bold'; // Met le nom en gras
	  name.style.marginBottom = '5px'; // Réduit l'espace sous le nom
	  name.style.fontSize = '15px'; 
  
	  const phone = document.createElement('p');
	  phone.textContent = person.phone;
	  phone.style.marginTop = '0'; // Supprime l'espace au-dessus du numéro
	  phone.style.fontSize = '15px';

  
	  imgWrapper.appendChild(img);
	  imgWrapper.appendChild(name);
	  imgWrapper.appendChild(phone);
	  imageContainer.appendChild(imgWrapper);
	});
  }







  // Fonction pour ouvrir la boîte modale
  function openModal(title, description) {
	const modal = document.getElementById('modal');
	document.getElementById('modal-title').textContent = title;
	document.getElementById('modal-description').innerHTML = description; // Utilisez innerHTML pour insérer du contenu HTML
	modal.style.display = 'block';
  }

  // Fonction pour fermer la boîte modale
  function closeModal() {
	const modal = document.getElementById('modal');
	modal.style.display = 'none';
  }

  // Ferme la boîte modale si l'utilisateur clique en dehors
  window.onclick = function(event) {
	const modal = document.getElementById('modal');
	if (event.target === modal) {
	  modal.style.display = 'none';
	}
  };
  

  function markButtonAsActive(button) {
	const allButtons = document.querySelectorAll('#image-container2 button');
	allButtons.forEach(btn => btn.classList.remove('active')); // Retire la classe active de tous les boutons
	button.classList.add('active'); // Ajoute la classe active au bouton cliqué
  }


  
  function showClub(location) {
	const container = document.getElementById('image-container2');
	container.innerHTML = ''; // Vide le conteneur principal

	// Gère l'état actif des boutons de la section "Clubs & Assos"
	const locationButtons = document.querySelectorAll('.asso-buttons button');
	locationButtons.forEach(button => button.classList.remove('active')); // Retire la classe active de tous les boutons

	const activeLocationButton = Array.from(locationButtons).find(button => button.getAttribute('onclick').includes(location));
	if (activeLocationButton) activeLocationButton.classList.add('active');


	// Crée un sous-conteneur pour les boutons
	const buttonContainer = document.createElement('div');
	buttonContainer.classList.add('dynamic-buttons'); // Ajoute une classe pour le style

	let buttonsData = [];
	if (location === 'nantesAsso') {
	  buttonsData = [
		{ id: 'ClubsBDEN', text: 'Clubs BDE' },
		{ id: 'ClubsBDAN', text: 'Clubs BDA' },
		{ id: 'AssoN', text: 'Assos' }
	  ];
	} else if (location === 'brestAsso') {
	  buttonsData = [
		{ id: 'ClubsBDEB', text: 'Clubs BDE' },
		{ id: 'ClubsBDAB', text: 'Clubs BDA' },
		{ id: 'AssoB', text: 'Assos' }
	  ];
	}

	// Ajoute les boutons dynamiquement
	buttonsData.forEach(button => {
	  const btn = document.createElement('button');
	  btn.id = button.id;
	  btn.textContent = button.text;
	  btn.onclick = () => {
		showClubImages(button.id);
		// Gère l'état actif des boutons Clubs BDE et Clubs BDA
		const allButtons = document.querySelectorAll('.dynamic-buttons button');
		allButtons.forEach(btn => btn.classList.remove('active')); // Retire la classe active de tous les boutons
		btn.classList.add('active'); // Ajoute la classe active au bouton cliqué
	  };
	  btn.classList.add('dynamic-button'); // Ajoute une classe pour le style
	  buttonContainer.appendChild(btn);
	});

	// Ajoute le conteneur des boutons au conteneur principal
	container.appendChild(buttonContainer);

	// Crée un sous-conteneur pour les images
	const imageContainer = document.createElement('div');
	imageContainer.classList.add('image-container'); // Ajoute une classe pour le style
	container.appendChild(imageContainer);
  }

  function showClubImages(buttonId) {
	const container = document.querySelector('#image-container2 .image-container');

	// Supprime uniquement les images existantes
	container.innerHTML = '';

	let images = [];
	if (buttonId === 'ClubsBDEN') {
	  images = [
		{ src: 'images/club1.png', caption: 'SpaceCraft' },
		{ src: 'images/club2.png', caption: 'PlugIMT' },
		{ src: 'images/club2.png', caption: 'Zythologie' }
	  ];
	} else if (buttonId === 'ClubsBDAN') {
	  images = [
		{ src: 'images/club3.png', caption: 'Cinemines' },
		{ src: 'images/club4.png', caption: 'Musique' },
		{ src: 'images/club4.png', caption: 'Oenologie' },
		{ src: 'images/club4.png', caption: 'Kulturap' },
		{ src: 'images/club4.png', caption: 'Jeux de société' },
		{ src: 'images/club4.png', caption: 'Danses' },
		{ src: 'images/club4.png', caption: 'Chorale' },
		{ src: 'images/club4.png', caption: 'Jeux vidéo' }
	  ];
	} else if (buttonId === 'AssoN') {
	  images = [
		{ src: 'images/club3.png', caption: 'ASF' },
		{ src: 'images/club4.png', caption: 'Olimpte' },
	  ];
	} else if (buttonId === 'ClubsBDEB') {
	  images = [
		{ src: 'images/club1.png', caption: 'SpaceCraft' },
		{ src: 'images/club2.png', caption: 'PlugIMT' },
		{ src: 'images/club2.png', caption: 'Zythologie' }
	  ];
	} else if (buttonId === 'ClubsBDAB') {
	  images = [
		{ src: 'images/club3.png', caption: 'Club 3 Nantes' },
		{ src: 'images/club4.png', caption: 'Club 4 Nantes' }
	  ];
	} else if (buttonId === 'AssoB') {
	  images = [
		{ src: 'images/club4.png', caption: 'Olimpte' },
	  ];
	}

	

	// Ajoute les images et leurs légendes au conteneur
	const imageRow = document.createElement('div');
	imageRow.style.display = 'flex'; // Aligne les images horizontalement
	imageRow.style.justifyContent = 'center'; // Centre les images
	imageRow.style.gap = '20px'; // Ajoute un espace entre les images
	imageRow.style.flexWrap = 'wrap'; // Permet aux images de passer à la ligne si nécessaire

	images.forEach(item => {
	  const imgWrapper = document.createElement('div');
	  imgWrapper.classList.add('image-wrapper');
	  imgWrapper.style.textAlign = 'center'; // Centre la légende sous l'image

	  const img = document.createElement('img');
	  img.src = item.src;
	  img.alt = item.caption;
	  img.style.maxWidth = '120px'; // Limite la largeur des images
	  img.style.borderRadius = '10px'; // Ajoute des coins arrondis

	  const caption = document.createElement('p');
	  caption.textContent = item.caption;
	  caption.classList.add('image-caption');
	  caption.style.marginTop = '5px'; // Ajoute un espace entre l'image et la légende

	  imgWrapper.appendChild(img);
	  imgWrapper.appendChild(caption);
	  imageRow.appendChild(imgWrapper);
	});

	container.appendChild(imageRow);
  }





// Données fictives Semaine 1

const week1Days = ['Mon 18/08', 'Tue 19/08', 'Wed 20/08', 'Thu 21/08', 'Fri 22/08', 'Sat 23/08', 'Sun 24/08'];
const week2Days = ['Mon 25/08', 'Tue 26/08', 'Wed 27/08', 'Thu 28/08', 'Fri 29/08', 'Sat 30/08 & Sun 31/08'];
const week3Days = ['Mon 01/09', 'Tue 02/09', 'Wed 03/09', 'Thu 04/09', 'Fri 05/09 - Sun 07/09'];

const events = {
  nantes1: {
    "Thu 21/08": [{ time: "10:00 à 18:00", title: "Acceuil des étudiants", color: "#C49D83" }, { time: "19:00 à 22:00", title: "Barbecue", color: "#E3CD8B" }],
    "Fri 22/08": [{ time: "10:00 à 18:00", title: "Acceuil des étudiants", color: "#C49D83" }, { time: "19:00 à 22:00", title: "Apéro des régions", color: "#E3CD8B" }],
    "Sat 23/08": [{ time: "11:00 à 13:00", title: "Brunch BDE", color: "#E3CD8B" }, { time: "19:00 à 22:00", title: "Rallye des bâtiments", color: "#B384A7" }, { time: "22:00 à 04:00", title: "Soirée ABC", color: "#e76f51" }],
    "Sun 24/08": [{ time: "11:00 à 13:00", title: "Brunch BDD", color: "#E3CD8B" }, { time: "14:00 à 19:00", title: "Rallye Nantais", color: "#B384A7" }, { time: "22:00 à 04:00", title: "Tonus BDE", color: "#e76f51" }]
  },
  nantes2: {
    "Mon 25/08": [{ time: "11:00 à 13:00", title: "Brunch BDA", color: "#E3CD8B" }, { time: "15:00 à 19:00", title: "Inte Contest", color: "#B384A7" }, { time: "21:00 à 23:00", title: "Cohésion des petites classes", color: "#e76f51" }, { time: "23:00 à 03:00", title: "Soirée BDE", color: "#e76f51" }],
	"Tue 26/08": [{ time: "11:00 à 13:00", title: "Brunch BDS", color: "#E3CD8B" }, { time: "21:00 à 01:00", title: "Soirée BDS", color: "#e76f51" }],
	"Wed 27/08": [{ time: "12:30", title: "Rentrée FISE A1", color: "#C49D83" }, { time: "16:30 à 18:00", title: "Afterwork Olimpte", color: "#B384A7" }, { time: "18:30 à 01:00", title: "Spatulas + Oenologie", color: "#e76f51" }],
	"Thu 28/08": [{ time: "16:00 à 18:00", title: "Afterwork Kulturap", color: "#B384A7" }, { time: "21:00 à 04:00", title: "Tonus BDE x Dest'IMT", color: "#e76f51" }],
    "Fri 29/08": [{ time: "16:00 à 18:00", title: "Présentation des clubs BDE", color: "#B384A7" }, { time: "21:00 à 01:00", title: "Soirée BDA", color: "#e76f51" }],
    "Sat 30/08 & Sun 31/08": [{ time: "WE", title: "Week-end de cohésion", color: "#8BA503" }]
  },
  nantes3: {
    "Mon 01/09": [{ time: "16:30 à 18:00", title: "Afterwork Junior Atlantique", color: "#B384A7" }, { time: "18:30 à 01:00", title: "Kebabas + Zythologie", color: "#e76f51" }],
	"Tue 02/09": [{ time: "08:30", title: "Rentrée Alternants", color: "#C49D83" }, { time: "16:30 à 18:00", title: "Afterwork ASF", color: "#B384A7" }, { time: "21:00 à 01:00", title: "Tonus BDI", color: "#e76f51" }],
	"Wed 03/09": [{ time: "21:00 à 01:00", title: "Cabaret BDA", color: "#e76f51" }],
	"Thu 04/09": [{ time: "16:00 à 18:00", title: "Présentation des clubs BDA", color: "#B384A7" }, { time: "21:00 à 01:00", title: "Nuit du volley", color: "#e76f51" }],
    "Fri 05/09 - Sun 07/09": [{ time: "WE", title: "Week-end d'intégration", color: "#8BA503" }]
  },
  brest1: {
    "Thu 21/08": [{ time: "10:00", title: "Visite du campus", color: "#ffc107" }],
    "Sat 23/08": [{ time: "21:00", title: "Soirée BDE", color: "#ffc107" }]
  },
  brest2: {
    "Thu 28/08": [{ time: "10:00", title: "Event 1", color: "#ffc107" }],
    "Fri 29/08": [{ time: "21:00", title: "Event 2", color: "#ffc107" }]
  }
};






function showSchedule(campus) {
	// Change bouton actif
	if ((campus === 'nantes1') || (campus === 'brest1')) {
		
		document.querySelectorAll("button").forEach(btn => btn.classList.remove("active"));
		document.querySelector(`button[onclick="showSchedule('${campus}')"]`).classList.add("active");
	
		// Afficher le bouton "Fermer"
		document.getElementById("closeButton").style.display = "inline-block";
	
		// Génère le tableau
		const data = events[campus];
		let html = `<table>
			<thead><tr><th>Date</th><th>Événements</th></tr></thead><tbody>`;
		for (let i = 0; i < 7; i++) {
			const day = week1Days[i];
			const dayEvents = data[day] || [];
			const eventHTML = dayEvents.map(ev =>
			`<div class="event" style="background-color: ${ev.color || '#cce5ff'}">${ev.time} - ${ev.title}</div>`
			).join("");
			html += `<tr><td>${day}</td><td>${eventHTML || '—'}</td></tr>`;
		}
		html += "</tbody></table>";
		document.getElementById("schedule1").innerHTML = html;
	} 	else if ((campus === 'nantes2') || (campus === 'brest2')) {
		document.querySelectorAll("button").forEach(btn => btn.classList.remove("active"));
		document.querySelector(`button[onclick="showSchedule('${campus}')"]`).classList.add("active");
	
		// Afficher le bouton "Fermer"
		document.getElementById("closeButton2").style.display = "inline-block";
	
		// Génère le tableau
		const data = events[campus];
		let html = `<table>
			<thead><tr><th>Date</th><th>Événements</th></tr></thead><tbody>`;
		for (let i = 0; i < 6; i++) {
			const day = week2Days[i];
			const dayEvents = data[day] || [];
			const eventHTML = dayEvents.map(ev =>
			`<div class="event" style="background-color: ${ev.color || '#cce5ff'}">${ev.time} - ${ev.title}</div>`
			).join("");
			html += `<tr><td>${day}</td><td>${eventHTML || '—'}</td></tr>`;
		}
		html += "</tbody></table>";
		document.getElementById("schedule2").innerHTML = html;
	}	else if ((campus === 'nantes3') || (campus === 'brest3')) {
		document.querySelectorAll("button").forEach(btn => btn.classList.remove("active"));
		document.querySelector(`button[onclick="showSchedule('${campus}')"]`).classList.add("active");
	
		// Afficher le bouton "Fermer"
		document.getElementById("closeButton3").style.display = "inline-block";
	
		// Génère le tableau
		const data = events[campus];
		let html = `<table>
		  <thead><tr><th>Date</th><th>Événements</th></tr></thead><tbody>`;
		for (let i = 0; i < 5; i++) {
		  const day = week3Days[i];
		  const dayEvents = data[day] || [];
		  const eventHTML = dayEvents.map(ev =>
			`<div class="event" style="background-color: ${ev.color || '#cce5ff'}">${ev.time} - ${ev.title}</div>`
		  ).join("");
		  html += `<tr><td>${day}</td><td>${eventHTML || '—'}</td></tr>`;
		}
		html += "</tbody></table>";
		document.getElementById("schedule3").innerHTML = html;
	  }
  }
  
  function closeSchedule(scheduleId) {
	// Masquer le planning spécifique
	document.getElementById(scheduleId).innerHTML = "";
  
	// Masquer le bouton "Fermer"
	if (scheduleId === 'schedule1') {
	  document.getElementById("closeButton").style.display = "none";
	} else if (scheduleId === 'schedule2') {
	  document.getElementById("closeButton2").style.display = "none";
	} else if (scheduleId === 'schedule3') {
		document.getElementById("closeButton3").style.display = "none";
	  }
  
	// Réinitialiser les boutons actifs
	document.querySelectorAll("button").forEach(btn => btn.classList.remove("active"));
  }






  document.addEventListener('DOMContentLoaded', function() {
	const burger = document.querySelector('.burger-menu');
	const menu   = document.getElementById('nav-menu');
  
	// 1) Ouverture/fermeture du menu principal
	burger.addEventListener('click', function(e) {
	  e.stopPropagation();           // n’envoie pas le clic au document
	  menu.classList.toggle('show');
	});
  
	// 2) Ouverture/fermeture des sous-menus au clic
	document.querySelectorAll('.dropdown-toggle').forEach(toggle => {
	  toggle.addEventListener('click', function(e) {
		e.stopPropagation();         // idem, pour ne pas déclencher le document click
		const dropdown = this.parentElement;
		// fermer les autres si besoin
		document.querySelectorAll('.dropdown.open')
		  .forEach(d => { if (d !== dropdown) d.classList.remove('open'); });
		dropdown.classList.toggle('open');
	  });
	});
  
	// 3) Empêcher la fermeture quand on clique DANS le contenu
	document.querySelectorAll('.dropdown-content').forEach(content => {
	  content.addEventListener('click', function(e) {
		e.stopPropagation();
	  });
	});
  
	// 4) Fermeture de tout sous-menu quand on clique AILLEURS
	document.addEventListener('click', function() {
	  // Ferme tout dropdown ouvert
	  document.querySelectorAll('.dropdown.open')
		.forEach(d => d.classList.remove('open'));
	  // (optionnel) ferme aussi le menu principal
	  // menu.classList.remove('show');
	});
  });




  