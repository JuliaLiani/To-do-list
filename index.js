const btnDark = document.querySelector('.btnDark');
const btnLighter = document.querySelector('.btnLighter');
const btnLight = document.querySelector('.btnLight');

const task = document.querySelector('.task');
const btn = document.querySelector('.btn');

const taskContainer = document.querySelector('.taskContainer');
//Eventlistener on button, to see what type of task user enters.
btn.addEventListener('click', function ()
{
   //create list element after button clicked.
   //create new const for new item as well.
   const item = document.createElement('li');
   //getting value from <input>.
   item.innerText = task.value;
   //<ul> </ul> parent name we append with child. To make list work.
   taskContainer.appendChild(item);
   //creating new class name for CSS
   item.classList.add('newTaskStyle');
   //emptying input field after new list added.
   task.value = ' ';
   //crossout finished task
   //we create new listener for the task and function
   item.addEventListener('click', function ()
   {
      //creating new class name for CSS to cross out finished task.
      item.classList.add('taskCompletedStyle');
      //removing crossed task with two clicks
      item.addEventListener('dblclick', function ()
      {
         taskContainer.removeChild(item);
      })

   })
})
//btn background color swich
btnDark.addEventListener('click', function ()
{

   document.body.style.backgroundImage = "linear-gradient(to left, #29323c 0%, #485563 100%)";

})

btnLight.addEventListener('click', function ()
{
   document.body.style.backgroundImage = "linear-gradient(to left, #8baaaa 0%, #ae8b9c 100%)";
})

btnLighter.addEventListener('click', function ()
{
   document.body.style.backgroundImage = "linear-gradient(to left, #09203f 0%, #537895 100%)";
})