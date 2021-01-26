<?php

// Contrôleur factice
$page = $_GET['page'] ?? '';

// Sélection des données en fonction de la page choisie
switch ($page) {
	case 'array2' :
		$editeurs = [
			['id' => 1, 'nom' => 'Flammarion', 'adresse' => '12, avenue des Champs Elysés, 75010 Paris'],
			['id' => 2, 'nom' => 'Larousse', 'adresse' => '20, rue du Peuple Belge, 59000 Lille'],
			['id' => 3, 'nom' => 'Campus Press', 'adresse' => '20, rue du Peuple Belge, 59000 Lille']
		];
		break;
	case 'array1' :
		$data = [
			['nom' => 'Martin', 'prenom' => 'Jean', 'Age' => '32 ans', 'blond', 'homme'],
			['nom' => 'Dupond', 'prenom' => 'Valérie', 'Age' => '28 ans', 'brune', 'femme'],
			['nom' => 'Schmidt', 'prenom' => 'Alain', 'Age' => '44 ans', 'brun', 'homme'],
			['nom' => 'Durand', 'prenom' => 'Marie', 'Age' => '24 ans', 'blonde', 'femme']
		];
		break;
	default :
		$data = ['lundi', 'mardi', 'mercredi',
			'jeudi', 'vendredi', 'samedi', 'dimanche'];
		break;
}

// Envoie des données au format JSON
echo json_encode($data);
