const myLibrary = [];
const table = document.querySelector("table");
const addButton = document.querySelector(".add-book");
const addToLibrary = document.querySelector(".add-to-library");
const container2 = document.querySelector(".container-2");

const inputTitle = document.querySelector("#title");
const inputAuthor = document.querySelector("#author");
const inputPages = document.querySelector("#pages");
const inputStatus = document.querySelector("#status");

function Book(title, author, pages, status) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.status = status;
    this.info = function(){
        return `${this.title} by ${this.author}, ${this.pages} pages, ${this.status} `
    }

}

function addBookToDisplay() {
    if(myLibrary.length > 0) {
        let row = table.insertRow(-1);
        let cell1 = row.insertCell(-1);
        let cell2 = row.insertCell(-1);
        let cell3 = row.insertCell(-1);
        let cell4 = row.insertCell(-1);
        
        myLibrary.forEach((book)=>{                                                                            

            cell1.textContent = book.title;
            cell2.textContent = book.author;
            cell3.textContent = book.pages;
            cell4.textContent = book.status;

            
        });
    }
}

function addBookToLibrary() {
    let bookTitle =   inputTitle.value; 
    let bookAuthor =  inputAuthor.value;  
    let bookPages =   inputPages.value; 
    let bookStatus =  inputStatus.value;

    myLibrary.push(new Book(bookTitle,bookAuthor,bookPages,bookStatus));

    addBookToDisplay();
    
    container2.classList.remove("appear");

    inputTitle.value = " ";
    inputAuthor.value = " ";
    inputPages.value = " ";
    inputStatus.value = " ";
}

function showInputFields(){
    container2.classList.add("appear");
}

addToLibrary.addEventListener('click' , addBookToLibrary);
addButton.addEventListener('click' , showInputFields);

