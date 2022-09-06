// let val;

// val=document;
// val=document.all[2];
// val=document.all.length;
// val=document.doctype;
// val=document.forms; 
// val=document.scripts[2].getAttribute('src');

// let scripts=document.scripts;
// let scriptsArr=Array.from(scripts);

// scriptsArr.forEach(function(script){
//     console.log(script.getAttribute('src'));
// })

// console.log(val)

// //document.getElementById()
// console.log(document.getElementById('task-title'));
// //get things from the element
// console.log(document.getElementById('task-title').id);
// console.log(document.getElementById('task-title').className);
// //change styling
// const taskTitle=document.getElementById('task-title');
// document.getElementById('task-title').style.background='#333';
// document.getElementById('task-title').style.color='#fff';
// document.getElementById('task-title').style.padding='5px';
// //document.getElementById('task-title').style.display='none';

// //change content
// document.getElementById('task-title').textContent='Task List';
// document.getElementById('task-title').innerText='My Tasks';
// taskTitle.innerHTML='<span style="color:red"> Task List</span>';

// //document.querySelector()
// console.log(document.querySelector('#task-title'));
// console.log(document.querySelector('.card-title'));
// console.log(document.querySelector('h5'))

// document.querySelector('li').style.color='red';
// document.querySelector('ul li').style.color='blue';

// document.querySelector('li:last-child').style.color='red';
// document.querySelector('li:nth-child(3)').style.color='yellow';
// document.querySelector('li:nth-child(4)').textContent='Hello Nelson';
// document.querySelector('li:nth-child(odd)').style.background='#ccc';
// document.querySelector('li:nth-child(even)').style.background='#333';

//document .getElementsByClassName()
// const items=document.getElementsByClassName('collection-item');
// console.log(items)
// console.log(items[0]);
// items[0].style.color='red';
// items[3].textContent='Hello jane';

// const listItems=document.querySelector('ul').getElementsByClassName('collection-item');
// console.log(listItems)

// //document.getElementByTagName()
// let lis=document.getElementsByTagName('li');
// console.log(lis)
// console.log(lis[0]);
// lis[0].style.color='red';
// lis[3].textContent='Hello jane';

// //conver HTML collection into array
// lis=Array.from(lis);

// lis.reverse();

// lis.forEach(function(li, index){
//     console.log(li.className);
//     li.textContent=`${index}:hello`;
//

// console.log(lis);

//document.querySelectorAll()
// const items=document.querySelectorAll('ul.collection li.collection-item');
// items.forEach(function(item, index){
//     item.textContent=`${index}:hello`;
// });

// const liOdd=document.querySelectorAll('li:nth-child(odd)');
// const liEven =document.querySelectorAll('li:nth-child(odd)');

// // liOdd.forEach(function(li, index){
// //     li.style.background='#ccc'
// // });
// for(let i=0; i<liEven.length; i++){
//    liEven[i].style.background='#ccc'; 
// }

// console.log(items)

// let val;
 
// const list= document.querySelector('ul.collection');
// const listItem=document.querySelector('li.collection-item:first-child');


// val=listItem;
// val=list

// //get child nodes
// val=list.childNodes;
// val= list.childNodes[0];
// val= list.childNodes[3].nodeName;
// val= list.childNodes[1].nodeType;

// //get children element nodes
// val=list.children;
// val=list.children[1];
// list.children[1].textContent='james';
// val=list.children[3].children[0];
// //first child
// val=list.firstChild;
// val=list.firstElementChild;
// //last child
// val=list.lastChild;
// val=list.lastElementChild;
// //count child element
// val=list.childElementCount;
// //get parent node
// val=listItem.parentNode;
// val=listItem.parentElement
// val=listItem.parentElement.parentElement;
// //get next sibling
// val=listItem.nextSibling;
// val=listItem.nextElementSibling.nextElementSibling;
// //get prev sibling
// val=listItem.previousSibling ;
// val=listItem.previousElementSibling ;

// console.log(val);

// //create element
// const li=document.createElement('li');
// //add class
// li.className='collection-item';
// //add id
// li.id='new-item';
// //create attribute
// li.setAttribute('title','New item')
// //create  text node and append
// li.appendChild(document.createTextNode('hello nelson'))
// //create new link element
// const link=document.createElement('a');
// //add classed
// link.className='delete-item secondary-content';
// //add icon html
// link.innerHTML='<i class="fa fa-remove"></i>';
// //append link into li
// li.appendChild(link);
// //append li as child to ul
// document.querySelector('ul.collection').appendChild(li);

// console.log(li);

// //REPLACE ELEMENT
// //CREATE ELEMENT
// const newHeading =document.createElement('h2');
// //ADD ID
// newHeading.id='task-title'
// //NEW TEXT NODE
// newHeading.appendChild(document.createTextNode('task List'));
// //get the old heading
// const oldHeading=document.getElementById('task-title');
// //parent
// const cardAction=document.querySelector('.card-action');
// //replace
// cardAction.replaceChild(newHeading, oldHeading);

// //Remove Element
// const lis=document.querySelectorAll('li');
// const list=document.querySelector('ul');
// //reamove list items
// lis[0].remove();
// //remove child element
// list.removeChild(lis[3]);

// //CLASSES & ATTR
// const firstlI=document.querySelector('li:first-child')
// const link=firstlI.children[0]

// let val;
// //Classes
// val=link.className;
// val=link.classList; 
// val=link.classList[0];
// link.classList.add('test');
// link.classList.remove('test');
// val=link

// // attribute  
// val=link.getAttribute('href');
// val=link.setAttribute('href','http://google.com');
// link.setAttribute('title','google')
// val=link.hasAttribute('title');
// link.removeAttribute('title');


// val=link;
// console.log(val);

// document.querySelector('.clear-tasks').addEventListener('click',function(e){
//     console.log('hi nelson');
//     e.preventDefault();
// })
// document.querySelector('.clear-tasks').addEventListener('click',onClick);
// function onClick(e){
//     // console.log('clicked')
//     let val;
//     val=e;
//     e.preventDefault();
// //Event target element
// val =e.target;
// val =e.target.id;
// val=e.target.className;
// val=e.target.classList;

// e.target.innerText='Nelki';

// //Event type
// val=e.type;
// //Timestamp
// val=e.timeStamp;

//     console.log(val)
// }

// const clearBtn=document.querySelector('.clear-tasks');
// const card=document.querySelector('.card');
// const heading=document.querySelector('h5');
// // //click
// // clearBtn.addEventListener('click',runEvent);
// // //Double click
// // clearBtn.addEventListener('dbclick',runEvent);
// // //Mousedown
// // clearBtn.addEventListener('mousedown',runEvent);
// // //Mouseup
// // clearBtn.addEventListener('mouseup',runEvent);
// // //Mouseenter
// //card.addEventListener('mouseenter',runEvent);
// // //Mouseleave
// //card.addEventListener('mouseleave',runEvent);
// // //Mouseover
// //card.addEventListener('mouseover',runEvent);
// // //Mouseout
// //card.addEventListener('mouseout',runEvent);
// //MOUSEMOVE
// card.addEventListener('mousemove',runEvent)

// //Event Handler
// function runEvent(e){
//     console.log(`Event Type:${e.type}`)
//     e.preventDefault();
//     heading.textContent=`MouseX:${e.offsetX} MouseY:${e.offsetY}`;
//     document.body.style.backgroundColor=`rgb(${e.offsetX},${e.offsetY},40)`; 
// }

// const form=document.querySelector('form');
// const taskInput=document.getElementById('task');
// const heading=document.querySelector('h5');
// const select= document.querySelector('select');
// //clear input 
// taskInput.value='';

// // form.addEventListener('submit',runEvent);
// // //keydown
// // taskInput.addEventListener('keydown',runEvent);
// // //keypress
// // taskInput.addEventListener('keypress',runEvent);
// // //keyfocus
// // taskInput.addEventListener('focus',runEvent);
// // //blur
// // taskInput.addEventListener('blur',runEvent);
// // //Input
// // taskInput.addEventListener('input',runEvent);
// //change
// select.addEventListener('change',runEvent)

// function runEvent(e){
//     console.log(`Event Type:${e.type}`);

//     // console.log(e.target.value);
//     // heading.innerText=e.target.value;
//     // //get input value
//     // console.log(taskInput.value);
//     // e.preventDefault();
    
// }

//EVENT DELEGATION
//const delItem = document.queryselector('delete-item');
//delItem.addEventListener('click',deleteItem);
// document.body.addEventListener('click',deleteItem);

// function deleteItem(e){
//     //if(e.target.parentElement.className==='delete-item secondary-content'){
//     // console.log("delete item");
//     //}
//     if(e.target.parentElement.classList.contains('delete-item')){
//         console.log('delete item');
//         e.target.parentElement.parentElement.remove();
//     }

// }

// //set local storage 
// localStorage.setItem('name','kihara');
// localStorage.setItem('age','28');

// //set session storage item 
// sessionStorage.setItem('name','Nelki');

// //remove from storage
// localStorage.removeItem('name')

// //get from storage
// const name=localStorage.getItem('name');
// const age=localStorage.getItem('age');
// localStorage.clear();
// console.log(name, age)
document.querySelector('form').addEventListener('submit', function(e){
    const task=document.getElementById('task').value;
    let tasks;

    if(localStorage.getItem('tasks')===null){
        tasks=[];
    }else{
        tasks=JSON.parse(localStorage.getItem('tasks'));
    }
    tasks.push(task)
    localStorage.setItem('tasks',JSON.stringify(tasks));
    alert('task saved');
    e.preventDefault();
});
const tasks=JSON.parse(localStorage.getItem('tasks'))

tasks.forEach(function(task){
    console.log(task)
});





















