// URL de l'API qui renvoie des images de chats
const url = "https://api.thedogapi.com/v1/images/search";

// Sélectionne l'élément HTML avec l'ID 'chien'
const chien = document.getElementById('chien');

// Fonction asynchrone qui récupère une image de l'API et l'affiche
async function chiot() {
    // Utilise fetch pour faire une requête à l'URL spécifiée et attends que la réponse soit reçue
    const response = await fetch(url); // await fetch lance l'URL et stocke les données dans response

    // Convertit la réponse en JSON et attend que cette conversion soit terminée
    const data = await response.json(); // await response.json() transforme/convertit les données en JSON

    // Affiche les données récupérées dans la console sous forme de chaîne JSON
    console.log('data: ' + JSON.stringify(data));

    // Affiche l'URL de la première image dans le tableau de données
    console.log(data[0].url);

    // Modifie la source de l'image (élément avec l'ID 'chien') pour afficher l'image récupérée
    chien.src = data[0].url;
}

// Appelle la fonction chiot pour exécuter le code asynchrone
chiot();
