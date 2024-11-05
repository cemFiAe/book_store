function setLocalStorage(){
    let comment = JSON.stringify(books);

    if(comment){
        localStorage.setItem('books', comment);    
    }
}

function getLocalStorage(){
    let booksStorage = localStorage.getItem('books');
    
    if(booksStorage){
       books = JSON.parse(booksStorage);
    }
}