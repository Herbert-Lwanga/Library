const myLibrary = [];
const table = document.querySelector("table");

function Book(title, author, pages, status) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.status = status;
    this.info = function(){
        return `${this.title} by ${this.author}, ${this.pages} pages, ${this.status} `
    }

}

function addBookToLibrary() {
    const bookTitle  =  prompt("What is the book title?") ;
    const bookAuthor =  prompt("Who authored the book?");
    const bookPages =  prompt("How many pages are the book?");
    const bookStatus =prompt("Have you read the book?");

    myLibrary.push(new Book(bookTitle,bookAuthor,bookPages,bookStatus));
}


addBookToLibrary();

if(myLibrary.length > 0) {
    myLibrary.forEach((book)=>{
        let row = table.insertRow(-1);
        let cell1 = row.insertCell(-1);
        let cell2 = row.insertCell(-1);        
        let cell3 = row.insertCell(-1);                                                                    
        let cell4 = row.insertCell(-1);

        cell1.textContent = book.title;
        cell2.textContent = book.author;
        cell3.textContent = book.pages;
        cell4.textContent = book.status;

    });
}