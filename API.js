const btn = document.querySelector('.btn');
const liste = document.querySelector('.liste');

btn.addEventListener('click', () => {
    fetch('https://jsonplaceholder.typicode.com/posts')
        // Qui permet de convertir en JSON 
        .then(response => response.json())
        .then(data => {
            // console.log(data);
            data.forEach(element => {
                let newLi = document.createElement('li');
                let newTitreCarte = document.createElement('h2');
                let newBodyCarte = document.createElement('p');

                // Prend le "newTitreCarte" met le dans le "h2" comme TITRE
                newTitreCarte.innerText = element.title;
                newBodyCarte.innerText = element.body;

                newLi.appendChild(newTitreCarte);
                newLi.appendChild(newBodyCarte);
                liste.appendChild(newLi);

            });

        })
        .catch(error =>{
            console.error('Erreur:', error);
        })

})


 