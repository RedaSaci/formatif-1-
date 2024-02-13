const taskInput=document. getElementById("taskinput");
const addTaskBtn=document.getElementById("taskinputBtn");
const taskList = document.getElementById("taskList")
addTaskBtn.addEventListener("click",addTask);
var task = "task";
var i =0;
function addTask(){
    
    const texteTâche =taskInput.value.trim();


if(texteTâche !==""){
    const listitem = document.createElement("li");
    listitem.textContent=texteTâche;
    taskList.appendChild(listitem);
    taskInput.value="";
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent="supprimer";
    listitem.appendChild(deleteBtn);
    deleteBtn.addEventListener("click",()=>{
        listitem.remove();
    });
    //bouton finir 
    const finis =document.createElement("button");
    finis.textContent="finis bravo!"
    listitem.appendChild(finis);
    finis.addEventListener("click",()=>{
        listitem.style.color = "green";
    });
    
}else{
    alert("veuiller entrer une tâche valide")
}
localStorage.setItem(task.concat(i),texteTâche);
i++;
}
