// Milestone 1: Creiamo il nostro array di oggetti post
const posts = [
    {
        "id": 1,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/300?image=171",
        "author": {
            "name": "Phil Mangione",
            "image": "https://unsplash.it/300/300?image=15"
        },
        "likes": 80,
        "created": "2021-06-25"
    },
    {
        "id": 2,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=112",
        "author": {
            "name": "Sofia Perlari",
            "image": "https://unsplash.it/300/300?image=10"
        },
        "likes": 120,
        "created": "2021-09-03"
    },
    {
        "id": 3,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=234",
        "author": {
            "name": "Chiara Passaro",
            "image": "https://unsplash.it/300/300?image=20"
        },
        "likes": 78,
        "created": "2021-05-15"
    },
    {
        "id": 4,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=24",
        "author": {
            "name": "Luca Formicola",
            "image": null
        },
        "likes": 56,
        "created": "2021-04-03"
    },
    {
        "id": 5,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=534",
        "author": {
            "name": "Alessandro Sainato",
            "image": "https://unsplash.it/300/300?image=29"
        },
        "likes": 95,
        "created": "2021-03-05"
    }
];


// Funzione per formattare una data nel formato gg/mm/aaaa
function formatDate(dateString) {
    const options = { day: 'numeric', month: 'numeric', year: 'numeric' };
    return new Date(dateString).toLocaleDateString('it-IT', options);
}

// Funzione per ottenere le iniziali del nome dell'autore
function getInitials(name) {
    const nameParts = name.split(' ');
    return nameParts.map(part => part[0]).join('');
}

// Funzione per creare un elemento HTML per rappresentare un post
function createPostElement(post) {
        // Creo un nuovo elemento div per rappresentare un post
    const postElement = document.createElement("div");
    postElement.className = "post";

        // Creo l'intestazione del post
    const postHeader = document.createElement("div");
    postHeader.className = "post__header";

        // Creo un elemento per contenere i metadati del post come autore e data
    const postMeta = document.createElement("div");
    postMeta.className = "post-meta";

    // Creo un elemento per l'icona del profilo dell'autore
    const postMetaIcon = document.createElement("div");
    postMetaIcon.className = "post-meta__icon";

    // Creo un elemento img per l'immagine del profilo dell'autore
    const profilePic = document.createElement("img");
    profilePic.className = "profile-pic";
    profilePic.src = post.author.image || `https://via.placeholder.com/100x100?text=${getInitials(post.author.name)}`;
    profilePic.alt = post.author.name;

    // Collego l'immagine del profilo all'elemento dell'icona
    postMetaIcon.appendChild(profilePic);

    // Creo un elemento per i metadati dell'autore e della data
    const postMetaData = document.createElement("div");
    postMetaData.className = "post-meta__data";

    // Creo un elemento per il nome dell'autore
    const postMetaAuthor = document.createElement("div");
    postMetaAuthor.className = "post-meta__author";
    postMetaAuthor.textContent = post.author.name;

    // Creo un elemento per la data del post (es. "4 mesi fa")
    const postMetaTime = document.createElement("div");
    postMetaTime.className = "post-meta__time";

    // Calcolo della data effettiva
    postMetaTime.textContent = formatDate(post.created);

    // Collego il nome dell'autore e la data ai metadati
    postMetaData.appendChild(postMetaAuthor);
    postMetaData.appendChild(postMetaTime);

    // Collego l'icona del profilo e i metadati all'elemento dei metadati
    postMeta.appendChild(postMetaIcon);
    postMeta.appendChild(postMetaData);

    // Collego i metadati all'intestazione del post
    postHeader.appendChild(postMeta);
    
    // Creo un elemento per il testo del post
    const postText = document.createElement("div");
    postText.className = "post__text";
    postText.textContent = post.content;

    // Creo un elemento per l'immagine del post
    const postImage = document.createElement("div");
    postImage.className = "post__image";

    // Creo un elemento img per l'immagine del post
    const img = document.createElement("img");
    img.src = post.media;
    img.alt = "";

    // Collego l'immagine del post all'elemento dell'immagine
    postImage.appendChild(img);

    // Creo un elemento per il footer del post
    const postFooter = document.createElement("div");
    postFooter.className = "post__footer";

    // Creo un elemento per il footer del post
    const likes = document.createElement("div");
    likes.className = "likes js-likes";

    // Creo un elemento per il pulsante "Mi Piace"
    const likesCta = document.createElement("div");
    likesCta.className = "likes__cta";

    // Creo un link per il pulsante "Mi Piace"
    const likeButton = document.createElement("a");
    likeButton.className = "like-button js-like-button";
    likeButton.href = "#";
    likeButton.setAttribute("data-postid", post.id);

    // Creo un'icona per il pulsante "Mi Piace"
    const likeButtonIcon = document.createElement("i");
    likeButtonIcon.className = "like-button__icon fas fa-thumbs-up";
    likeButtonIcon.setAttribute("aria-hidden", "true");

    // Creo un'etichetta per il pulsante "Mi Piace"
    const likeButtonLabel = document.createElement("span");
    likeButtonLabel.className = "like-button__label";
    likeButtonLabel.textContent = "Mi Piace";

    // Collego l'icona e l'etichetta al pulsante "Mi Piace"
    likeButton.appendChild(likeButtonIcon);
    likeButton.appendChild(likeButtonLabel);

    // Collego il pulsante "Mi Piace" al suo contenitore
    likesCta.appendChild(likeButton);

    // Creo un elemento per visualizzare il conteggio dei Mi Piace
    const likesCounter = document.createElement("div");
    likesCounter.className = "likes__counter";
    likesCounter.innerHTML = `Piace a <b id="like-counter-${post.id}" class="js-likes-counter">${post.likes}</b> persone`;

    // Collego il pulsante "Mi Piace" e il conteggio al contenitore dei "Mi Piace"
    likes.appendChild(likesCta);
    likes.appendChild(likesCounter);
    // Collego il contenitore dei "Mi Piace" al footer del post
    postFooter.appendChild(likes);

    // Collego tutti gli elementi creati al post completo
    postElement.appendChild(postHeader);
    postElement.appendChild(postText);
    postElement.appendChild(postImage);
    postElement.appendChild(postFooter);

    // Restituisci l'elemento del post completo
    return postElement;

}

// Iteriamo attraverso l'array di post e creiamo gli elementi HTML per ciascun post
const container = document.getElementById("container");

posts.forEach((post) => {
    const postElement = createPostElement(post);
    container.appendChild(postElement);
});

// Milestone 3: Gestiamo il click sul pulsante "Mi Piace"
// Seleziono tutti i pulsanti "Mi Piace" utilizzando la classe ".js-like-button"
const likeButtons = document.querySelectorAll(".js-like-button");
// Creo un array per tenere traccia degli ID dei post a cui è stato messo "Mi Piace"
const likedPostIds = [];

// Iteriamo attraverso tutti i pulsanti "Mi Piace"
likeButtons.forEach((button) => {
    // Aggiungo un listener per il click su ciascun pulsante
    button.addEventListener("click", (event) => {
        // Gestisco il comportamento predefinito del link (evita che la pagina venga ricaricata)
        event.preventDefault();
        const postId = parseInt(button.getAttribute("data-postid"));

        // Trovo l'elemento del conteggio dei "Mi Piace" corrispondente a questo post
        const likeCounter = document.getElementById(`like-counter-${postId}`);

        // Ottengo il numero corrente di "Mi Piace" dal contenuto dell'elemento
        const currentLikes = parseInt(likeCounter.textContent);

        if (!likedPostIds.includes(postId)) {
            likedPostIds.push(postId);
            button.classList.add("like-button--liked");
            // Incremento il conteggio di "Mi Piace" di 1 e aggiorniamo il testo nell'elemento
            likeCounter.textContent = currentLikes + 1;
        } else {
            likedPostIds.splice(likedPostIds.indexOf(postId), 1);
            button.classList.remove("like-button--liked");
            likeCounter.textContent = currentLikes - 1;
        }
    });
});