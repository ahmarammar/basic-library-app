let myLibrary = [];
let countBooks = 0;

function Book() {
  function makeBook( name, author, pages ){
    this.name = name;
    this.author = author;
    this.pages = pages;
  }
  const book = new makeBook(bookName, authorName, totalPages);
  addBookToLibrary(book);
}

function addBookToLibrary( book ) {
  myLibrary.unshift(book);
  countBooks += 1;
  displayBooks(myLibrary);
}

function displayBooks( myLibrary ){
  document.querySelector(".showcase").innerHTML = "";
  const showcase = document.querySelector(".showcase");
  for(let i = 0 ; i < myLibrary.length ; i++){
    // Add Book to HTML

    const card = document.createElement("div");
    showcase.appendChild(card);
    card.classList.add(`card${i+1}`);

    document.querySelector(`.card${i+1}`).innerHTML = `<h3 class='author${i+1}'></h3><h2 class = 'book${i+1}'></h2><h3 class='pages${i+1}'></h3>`

    document.querySelector(`.author${i+1}`).innerHTML = myLibrary[i].author;
    
    document.querySelector(`.book${i+1}`).innerHTML = myLibrary[i].name;

    document.querySelector(`.pages${i+1}`).innerHTML = myLibrary[i].pages;
  }
  console.log(showcase);
}

let bookName = "";

document.getElementById("bookName").addEventListener("change",function(e){
  bookName = e.currentTarget.value;
})

let authorName = "";

document.getElementById("authorName").addEventListener("change",function(e){
  authorName = e.currentTarget.value;
})

let totalPages = 0; 

document.getElementById("totalPages").addEventListener("change",function(e){
  totalPages = +e.currentTarget.value;
})

document.getElementById("submitIt").addEventListener("click",function(e){
  if(bookName !== '' && totalPages !== 0 && authorName !== ''){
    Book();
  }
})