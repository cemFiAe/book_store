function init(){
    getLocalStorage();
    renderBooks();
}

function renderBooks(){
    let content = document.getElementById('content');
    content.innerHTML = '';

    for(let i = 0; i < books.length; i++){
        content.innerHTML += getBooksTemplate(i);
    }
}

function addComment(i){
    let comment = document.getElementById(`commit-${i}`);

    if (comment.value.trim() === ''){
        alert('Bitte geben Sie einen Kommentar ein.');
        return; // Beende die Funktion, wenn das Feld leer ist
    }
    if (comment.value){
        additionalComment = {
        name: "Cem",
        comment: comment.value
        }
    };
    books[i].comments.push(additionalComment);
    comment.value = "";
    setLocalStorage();
    renderBooks();
}

function like(index) {
    if (books[index].liked) {
        books[index].liked = false;
        books[index].likes -= 1;
        document.getElementById("heart-" + index).src = "./templates/heart.png";
    } else {
        books[index].liked = true;
        books[index].likes += 1;
        document.getElementById("heart-" + index).src = "./templates/red-heart.png";
    }
    document.getElementById("likes-" + index).textContent = books[index].likes;
    setLocalStorage();
}