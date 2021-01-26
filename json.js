let xhr_array = new XMLHttpRequest();
xhr_array.onreadystatechange = function () {
	if (this.readyState == 4 && this.status == 200) {
		let tableau = JSON.parse(this.responseText);
		createArray(tableau);
	} else {
		showMessage(this.status);
	}
};

document.getElementById("jours").addEventListener("click", function () {
	xhr_array.open("GET", "json.php", true);
	xhr_array.send();
});

document.getElementById("erreur_404").addEventListener("click", function () {
	xhr_array.open("GET", "fake.php", true);
	xhr_array.send();
});

let xhr_double_array = new XMLHttpRequest();
xhr_double_array.onreadystatechange = function () {
	if (this.readyState == 4 && this.status == 200) {
		let tableau = JSON.parse(this.responseText);
		createTable(tableau);
	} else {
		showMessage(this.status);
	}
};

document.getElementById("table1").addEventListener("click", function () {
	xhr_double_array.open("GET", "json.php?page=array1", true);
	xhr_double_array.send();
});

document.getElementById("table2").addEventListener("click", function () {
	xhr_double_array.open("GET", "json.php?page=array2", true);
	xhr_double_array.send();
});

function showMessage(status) {
	let message = document.getElementById("message");
	message.innerHTML = "";
	let p = document.createElement("p");
	if (status === 404) p.innerText = "Erreur : ressource indisponible";
	else p.innerText = "Erreur inconnue";
	message.appendChild(p);
}

function createArray(tableau) {
	console.log(tableau);
	let message = document.getElementById("message");
	message.innerHTML = "";
	let p = document.createElement("p");
	p.innerText = "Données bien reçues";
	message.appendChild(p);

	let content = document.getElementById("content");
	content.innerHTML = "";
	tableau.forEach(function (elt) {
		let p = document.createElement("p");
		p.innerText = elt;
		content.appendChild(p);
	});
}

function createTable(tableau) {
	console.log(tableau);
	let message = document.getElementById("message");
	message.innerHTML = "";
	let p = document.createElement("p");
	p.innerText = "Données bien reçues";
	message.appendChild(p);

	let content = document.getElementById("content");
	content.innerHTML = "";
	tableau.forEach(function (elt) {
		// à compléter
	});
}
