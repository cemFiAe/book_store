function getBooksTemplate(i){
    const comments = books[i].comments.map(comment =>
        /*html*/`
            <p><strong>[${comment.name}]: </strong> ${comment.comment}</p>
        `
    ).join("");

    return /*html*/`
        <div id="content_book" class="content_book">
            <div class="content_book_header">
            <h2>${books[i].name}</h2>
            </div>
            <img class="book_img" src="./templates/book.png" alt="">

            <div class="content_book_info">
                <div class="conten_book_info_top">
                    <p class="price">${books[i].price.toFixed(2)} €</p> 
                    <div class="likes">
              <p id="likes-${i}">${books[i].likes}</p>
              <img src="${books[i].liked ? './templates/red-heart.png' : './templates/heart.png'}" 
              onclick="like(${i})" id="heart-${i}">
          </div>
                </div>
            <div class="content_book_infos">
            <p><strong>Author:</strong>${books[i].author}</p>
            <p><strong>Erscheinungsjahr:</strong>${books[i].publishedYear}</p>
            <p><strong>Genre:</strong>${books[i].genre}</p>
            </div>
            </div>
            <div class="border">

            </div>
            <div class="content_book_comments_h3">
            <h3>Kommentare:</h3>
            </div>
            <div class="content_book_comments">

            ${comments || '<p>Keine Kommentare vorhanden</p>'}
            </div>
            <div class="content_book_comments_input_section">
            <input type="text" name="commit" id="commit-${i}" class="commit" placeholder="Schreibe einen Kommentar...">
            <img onclick="addComment(${i})" src="./templates/send.png" alt="">
            <div class="border">
            </div>
            </div>

        
    `;
}