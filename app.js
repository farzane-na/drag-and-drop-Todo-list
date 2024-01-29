let $=document;
let wrapper=$.querySelector(".wrapper");
let addTodoBtn=$.querySelector(".Add_todo");
let todoItem=$.querySelector(".todo_item");
let modal=$.querySelector(".modal");
let closeMpdalBtn=$.querySelector(".close-modal");
let addModalBtn=$.querySelector(".modal-btn");
let modalInput=$.querySelector(".modal-input");
let noStatusCulumn=$.querySelector(".no_status_content")
let notStartColumn=$.querySelector(".not_start_content");
let inProgressColumn=$.querySelector(".in_progress_content");
let completedColumn=$.querySelector(".completed_content");

function addTodoHandeler(){
    modal.style.display="block";
    wrapper.style.filter="blur(2px)";
}
function closeModalHandeler(){
    modal.style.display="none";
    wrapper.style.filter="blur(0px)";
}
function AddTodo(){
    if(modalInput.value){
        let newTodo=$.createElement("div")
        newTodo.className="todo_item";
        newTodo.setAttribute("draggable","true");
        let newParagraph=$.createElement("p")
        newParagraph.innerHTML=modalInput.value
        let newIconCloseTodo=$.createElement("span");
        newIconCloseTodo.setAttribute("class","close-icon-container")
        let newImageCloseTodo=$.createElement("img");
        newImageCloseTodo.setAttribute("class","close-icon")
        newImageCloseTodo.setAttribute("src","./icon/icons8-close-20.png");
        newImageCloseTodo.setAttribute("alt","close icon");
        newIconCloseTodo.appendChild(newImageCloseTodo);
        newTodo.appendChild(newIconCloseTodo);
        newTodo.appendChild(newParagraph)
        noStatusCulumn.appendChild(newTodo);
     }
     modalInput.value=""
     let deleteTodos=$.querySelectorAll(".close-icon-container");
     deleteTodos.forEach(function(deleteTodo){
         deleteTodo.addEventListener("click",function(event){
             event.target.parentElement.parentElement.remove()
         });
     })
}
function addTodoModalHandeler(){
    console.log(modalInput.value)
    AddTodo()
}
function enterKeyHandeler(event){
    if(event.keyCode===13){
        AddTodo()
    }
}
function delteTodoHandeler(event){
    console.log(event.target.parentElement.parentElement)
}
function dragItemHandeler(event){
    event.dataTransfer.setData('elemId',event.target.id);
    console.log("id :"+event.target.id)
}
function dragOverHandeler(event){
    event.preventDefault();
}
function dropCulumnsHandeler(event){
    event.preventDefault();
    debugger
    let targetId=event.dataTransfer.getData('elemId');
    let targetElem=$.getElementById(targetId);
    console.log(targetId)
    event.target.append(targetElem)
    
}
addTodoBtn.addEventListener("click",addTodoHandeler);
closeMpdalBtn.addEventListener("click",closeModalHandeler);
modalInput.addEventListener("keydown",enterKeyHandeler)
addModalBtn.addEventListener("click",addTodoModalHandeler);
todoItem.addEventListener("drag",dragItemHandeler);
notStartColumn.addEventListener("drop",dropCulumnsHandeler);
inProgressColumn.addEventListener("drop",dropCulumnsHandeler);
completedColumn.addEventListener("drop",dropCulumnsHandeler);