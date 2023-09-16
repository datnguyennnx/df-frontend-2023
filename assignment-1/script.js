const addBookBtn = document.getElementById('addbook-btn')
const closeAddBookBtn = document.getElementById('close-icon-addform')
const closeMessageDeleteBtn = document.getElementById('close-icon-deleteform')
const formAddBook = document.getElementById('addbook-form')
const createBtn = document.getElementById('create-btn')
const tableContent = document.getElementById('table-content')
const search = document.getElementById('search-bar')
const messageDeleteForm = document.getElementById('delete-form')
const mainBtnDelete = document.getElementById('delete-btn-main')
const cancelButton = document.getElementById('cancel-btn')
const messageDeleteText = document.getElementById('message-delete-main')

let listBook = []

function showAddBookForm() { 
    formAddBook.classList.add('open')
}

function closeAddBookForm() { 
    formAddBook.classList.remove('open')
}

function closeMesseageDeleteForm() { 
    messageDeleteForm.classList.remove('open')
}


function showAddBookForm() { 
    formAddBook.classList.add('open')
}

function createNewBook() { 
    const id =  Math.floor(Math.random() * (1000 - 6 + 1) + 6)
    const valueNameBook = document.getElementById('input-name-book').value
    const valueNameAuthor = document.getElementById('input-name-author').value
    const valueTopic = document.getElementById('input-topic').value

    if( valueNameBook == "" || valueNameAuthor == "") { 
        alert("Input is empty")
    } else {
        const item = {"id": id, "book": valueNameBook, "author": valueNameAuthor, "topic": valueTopic}
        listBook.push(item) 
        updateNewItem(item)
    }
    document.getElementById('form-addbook').reset()
    closeAddBookForm()
}

function updateNewItem(item) { 
    tableContent.innerHTML += `<tr>
            <td>${item.book}</td>
            <td>${item.author}</td> 
            <td>${item.topic}</td> 
            <td id="delete-btn" class="td-action" onclick="onClickDeleteItem(${item.id}, '${item.book}')">Delete</td>
        </tr>`
}

function onClickDeleteItem(id, name) { 
    messageDeleteForm.classList.add('open')
    messageDeleteText.innerText = `${name}`
    mainBtnDelete.addEventListener('click', () => { 
        listBook = listBook.filter(item => item.id !== id)
        updateFromList(listBook)
        closeMesseageDeleteForm()
    })
    
}

function updateFromList(books){ 
    tableContent.innerHTML = ""
    tableContent.innerHTML += `<tr style="font-size: 16px; line-height: 24px; font-weight: 600; ">
        <td>Name</td>
        <td>Author</td>
        <td>Topic</td>
        <td>Action</td>
    </tr>`

    books.forEach(function(item){
        tableContent.innerHTML += `<tr>
            <td>${item.book}</td>
            <td>${item.author}</td> 
            <td>${item.topic}</td> 
            <td id="delete-btn" class="td-action" onclick="onClickDeleteItem(${item.id})">Delete</td>
         </tr>`
    })
}

search.addEventListener('change', (e) => {
    const searchValue = e.target.value.trim().toLowerCase()
    const filteredBooks = listBook.filter(books => {
        const bookName = books.book.toLowerCase()
        return bookName.includes(searchValue)
    })
    updateFromList(filteredBooks)
})

addBookBtn.addEventListener('click', showAddBookForm)
closeAddBookBtn.addEventListener('click', closeAddBookForm)
closeMessageDeleteBtn.addEventListener('click', closeMesseageDeleteForm)
cancelButton.addEventListener('click', closeMesseageDeleteForm)
createBtn.addEventListener('click', createNewBook)
