const myLibrary = [];
const table = document.querySelector("table");
const addButton = document.querySelector(".add-book");
const addToLibrary = document.querySelector(".add-to-library");
const container2 = document.querySelector(".container-2");

class Book{ 
    constructor(title,author,pages,status){
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.status = status;
    }
}

const svgCode = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="1em" height="1em"><title>trash-can-outline</title><path d="M9,3V4H4V6H5V19A2,2 0 0,0 7,21H17A2,2 0 0,0 19,19V6H20V4H15V3H9M7,6H17V19H7V6M9,8V17H11V8H9M13,8V17H15V8H13Z" /></svg>';

function updateDisplay() {
    let table = '<table>';
    table += '<tr><th>Title</th><th>Author</th><th>Pages</th><th>Status</th></tr>'
    
    let deleteButton = document.createElement("button");
    deleteButton.innerHTML = svgCode;
    
    let indexCounter = 0;
    myLibrary.forEach((book)=>{
        deleteButton.classList.add(indexCounter);
        table += `<tr>
                    <td>
                        ${book.title}
                    </td>
                    <td>
                        ${book.author}
                    </td>
                    <td>
                        ${book.pages}
                    </td>
                    <td>
                        <button class="status" Onclick="changeStatus(${indexCounter})">
                            ${book.status}
                        </button>
                    </td>
                    <td class="bdnone">
                        <button Onclick="removeBookFromLibrary(${indexCounter})">
                            ${svgCode}
                        </button>
                    </td>
                  </tr>`;

    
        indexCounter++;
    });
    
    table += '</table>';
    
    const tableContainer = document.querySelector(".table_container");

    tableContainer.innerHTML = table;
        
};

function changeStatus(index){
    if(myLibrary[index].status == "read"){
        myLibrary[index].status = "not read";

    }else if(myLibrary[index].status == "not read"){
        myLibrary[index].status = "read";
    };
    updateDisplay();
};

function removeBookFromLibrary(index) {
    myLibrary.splice(index,1); 

    console.log(index)
    updateDisplay();
};

function addBookToLibrary() {
    const inputTitle = document.querySelector("#title");
    const inputAuthor = document.querySelector("#author");
    const inputPages = document.querySelector("#pages");
    const inputStatus = document.querySelector("#status");

    let bookTitle = inputTitle.value; 
    let bookAuthor = inputAuthor.value;  
    let bookPages = inputPages.value; 
    let bookStatus = inputStatus.value;

    myLibrary.push(new Book(bookTitle,bookAuthor,bookPages,bookStatus));

    updateDisplay();
    
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
