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

const svgCode = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1em" height="1em"><title>trash-can-outline</title><path d="M9,3V4H4V6H5V19A2,2 0 0,0 7,21H17A2,2 0 0,0 19,19V6H20V4H15V3H9M7,6H17V19H7V6M9,8V17H11V8H9M13,8V17H15V8H13Z" /></svg>';

let rowArray = [];

let indexCounter = 1;
function addBookToDisplay() {
    if(myLibrary.length > 0) {
        let row = table.insertRow(-1);
        let cell1 = row.insertCell(-1);
        let cell2 = row.insertCell(-1);
        let cell3 = row.insertCell(-1);
        let cell4 = row.insertCell(-1);
        let cell5 = row.insertCell(-1);

        row.classList.add(indexCounter);
        cell5.classList.add(indexCounter);
        
        const deleteButton = document.createElement("button");
        deleteButton.innerHTML = svgCode;


        cell5.style.border = 'none';
        myLibrary.forEach((book)=>{                                                                            

            cell1.textContent = book.title;
            cell2.textContent = book.author;
            cell3.textContent = book.pages;
            cell4.textContent = book.status;
            cell5.appendChild(deleteButton); 
            
            deleteButton.addEventListener('click', ()=>{
    
                if(table.rows.length > 0) {    
                    table.rows[Number(deleteButton.parentNode.classList.value)].remove();
                }
            });
        });


    };
    indexCounter++;
};

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

