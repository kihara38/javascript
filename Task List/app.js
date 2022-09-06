const form=document.querySelector('#task-form');
const taskList=document.querySelector('.collection');
const clearBtn=document.querySelector('.clear-task');
const filter=document.querySelector('#filter');
const taskInput=document.querySelector('#task');

//load all event listeners
loadEventListeners();
//load all event listeners
function loadEventListeners(){
    //DOM load eveny
    document.addEventListener('DOMContentLoaded',getTasks)
    //Add task event
    form.addEventListener('submit',addTask);
    //Remove task event
    taskList.addEventListener('click',removeTask);
    //clear task event
    clearBtn.addEventListener('click',clearTasks);
    //filter task event
    filter.addEventListener('keyup',filterTasks);
}
//get Tasks from ls 
function getTasks(){
    let tasks;
    if(localStorage.getItem('tasks')===null){
        tasks=[];
    }else{
        tasks=JSON.parse(localStorage.getItem('tasks'));
    }
    tasks.forEach(function(task){
            //create li element
    const li =document.createElement('li');
    //Add class
    li.className='collection-item';
    //Create text node and append to li
    li.appendChild(document.createTextNode(task));
    //create  new link element
    const link=document.createElement('a');
    //Add class
    link.className='delete-item secondary-content';
    //Add icon HTML
    link.innerHTML='<i class="fa fa-remove"></i>';
    //append the linl to li
    li.appendChild(link);
    //append li to ul
    taskList.appendChild(li);
    })
}
//Add task
function addTask(e){
    if(taskInput.value===''){
        alert('Add A Task')
    }
    //create li element
    const li =document.createElement('li');
    //Add class
    li.className='collection-item';
    //Create text node and append to li
    li.appendChild(document.createTextNode(taskInput.value));
    //create  new link element
    const link=document.createElement('a');
    //Add class
    link.className='delete-item secondary-content';
    //Add icon HTML
    link.innerHTML='<i class="fa fa-remove"></i>';
    //append the linl to li
    li.appendChild(link);
    //append li to ul
    taskList.appendChild(li);
    //store in ls
    storeTaskInLocalStorage(taskInput.value);
    //clear input
    taskInput.value='';
    e.preventDefault();
    
}
//store task
function storeTaskInLocalStorage(task){
    let tasks;
    if(localStorage.getItem('tasks')===null){
        tasks=[];
    }else{
        tasks=JSON.parse(localStorage.getItem('tasks'));
    }
    tasks.push(task);
    localStorage.setItem('tasks',JSON.stringify(tasks))
}
//Remove task
function removeTask(e){
    if(e.target.parentElement.classList.contains('delete-item')){
        if(confirm('Are You Sure')){
        e.target.parentElement.parentElement.remove();
        //remove from ls
        removeTaskFromLocalStorage(e.target.parentElement.parentElement)
    }
    }

    e.preventDefault();
}
//remove  from ls
function removeTaskFromLocalStorage(taskItem){
    
    let tasks;
    if(localStorage.getItem('tasks')===null){
        tasks=[];
    }else{
        tasks=JSON.parse(localStorage.getItem('tasks'));
    }
    tasks.forEach(function(task, index){
        if(taskItem.textContent===task){
            tasks.splice(index, 1);
        }
    });
    localStorage.setItem('tasks', JSON.stringify(tasks)); 
}
//clear tasks
function clearTasks(){
    //   taskList.innerHTML='';
    //faster
    while (taskList.firstChild){
        taskList.removeChild(taskList.firstChild);
    }
    //clear task from ls
    clearTasksFromLocalStorage();
}
//clear tasks from ls
function clearTasksFromLocalStorage(){
    localStorage.clear();
}


//fiter task
function filterTasks(e){
    const text=e.target.value.toLowerCase();

    document.querySelectorAll('.collection-item').forEach(function(task){
        const item=task.firstChild.textContent;
        if (item.toLowerCase().indexOf(text)!=-1) {
            task.style.display='block';
        } else {
            task.style.display='none ';
        }
    })
}