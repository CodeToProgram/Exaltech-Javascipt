const todoInpt = document.getElementById ("inpt");
const addBtn = document.getElementById("btn");
const showList = document.getElementById("showTodos");
let count = 6;

function addTasks () {
    showList.innerHTML = todoInpt.ariaValueMax;
    todoInpt.value = "";
    count++
    console.log(count);
}