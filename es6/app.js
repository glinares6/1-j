class Task {
    constructor (name){
        this.name = name;
        this.isComplete=false;
    }

    complete(){
        this.isComplete =  !this.isComplete ;
    }
}



class TaskList{
    constructor(name){
        this.name=name;
        this.tasks=[];
    }

    addTask(task,element){
        this.tasks.push(task);
        this.renderTasks(element);
        }
        removeTask(i,element){
        this.tasks.splice(i,1);
        this.renderTasks(element);

        }
        renderTasks(element){
        let tasks = this.tasks.map(task => `
        <li class="task ${task.isComplete ? 'complete' : ''}" >
            <input type="checkbox" class="task_complete-button"
            ${task.isComplete ? 'checked' : ''}
            >
            <span class="task_name">${task.name}</span>
            <a href="#" class="task_remove-button">X</a>
        </li>
        `);
        element.innerHTML = tasks.reduce((a,b) => a+b ,' ');
        }
    
}


// trabajar con el DOM

const addTaskElemet = document.getElementById('add-task');
const tasksContainerElement =document.getElementById('tasks-container');


const inbox = new TaskList('inbox');

// añadir tarea desde el DOM

function addDOMTask(e, list = inbox) {
    // obtener el texto del imput
    if (e.key == 'Enter') {
        // crear la tarea instanciando la clase
      let task = new Task(this.value) ;     
      // añadir la tarea ala lista
      list.addTask(task,tasksContainerElement);
        // borrar el texto del imput
        this.value = ''; 
    }

}

addTaskElemet.addEventListener('keyup', addDOMTask );

// obtener indice de la tarea  actual

function  getTaskIndex(e){
    let taskItem = e.target.parentElement,
    tasksItems=[...tasksContainerElement.querySelectorAll('li')]; 
  return  tasksItems.indexOf(taskItem);
}


// eliminar tarea desde el DOM 

function removeDOMTask(e, list= inbox) {
    // detectar que se hizo click en el enlace 
   if (e.target.tagName === 'A') {
  
    // remober tarea de la lista (se necesita el indice);
    list.removeTask(getTaskIndex(e),tasksContainerElement)
    

   }
}

tasksContainerElement.addEventListener('click',removeDOMTask);

// completar la tarea

function completeDOMTask(e, list= inbox) {
    // detecta la tarea  que se hizo click en el imput
   if (e.target.tagName === 'INPUT') {
  
    // remober tarea de la lista (se necesita el indice);
    list.tasks[getTaskIndex(e)].complete();
    e.target.parentElement.classList.toggle('complete');
    console.table(list.tasks);

   }
}

tasksContainerElement.addEventListener('click' ,completeDOMTask);






