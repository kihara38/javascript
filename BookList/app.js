//Book constructor
function Book(title,auther,isbn){
  this.title=title; 
  this.auther=auther; 
  this.isbn=isbn; 
}

//UI Constructor
function UI () {}

//Add book to the list
UI.prototype.addBookToList = function(book){
   const list=document.getElementById('book-list');
   //craete tr element
   const row=document.createElement('tr');
   //insert cols
   row.innerHTML=`
   <td>${book.title}</tr>
   <td>${book.auther}</tr>
   <td>${book.isbn}</tr>
   <td><a href="#" class="delete">X</a></tr>
   `;
   list.appendChild(row);
}
//show alert
UI.prototype.showAlert=function(message,className){
   //create div 
   const div =document.createElement('div');
   //Add classes
   div.className=`alert ${className}`; 
   //Add text
   div.appendChild(document.createTextNode(message));
   //get parent
   const container=document.querySelector('.container');
   //get form
   const form=document.querySelector('#book-form');
   //insert alert
   container.insertBefore(div,form);
   //timeout in 3seconds
   setTimeout(function(){
    document.querySelector('.alert').remove();
   }, 3000)
}
//delete book
UI.prototype.deleteBook=function(target){
  if(target.className==='delete'){
    target.parentElement.parentElement.remove();
  }
}
//clear fields 
UI.prototype.clearFields=function(){
  document.getElementById('title').value='';
  document.getElementById('auther').value='';
  document.getElementById('isbn').value='';
}

//event listeners
document.getElementById('book-form').addEventListener('submit',function(e){
  //Get form values
  const title=document.getElementById('title').value,
        auther=document.getElementById('auther').value,
        isbn=document.getElementById('isbn').value; 
  
  //instantiate book
  const book=new Book(title,auther,isbn);
 
  //Instantiate UI
  const ui=new UI ;
  //validate
  if(title === ''|| auther === ''||isbn === ''){
    //Error alert
    ui.showAlert('please fill in all fields','error')
  }else{
     //Add book to list
  ui.addBookToList(book);
   
  //Show success
  ui.showAlert('Book Added','success');

  //clear fields
  ui.clearFields();
  }

  e.preventDefault();
})
//event listener for delete
document.getElementById('book-list').addEventListener('click', function(e){
  //Instantiate UI
  const ui=new UI ;
  //delete book
  ui.deleteBook(e.target);
  //show message
  ui.showAlert('Book Removed!', 'success');
})