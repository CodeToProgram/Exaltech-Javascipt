const inputbox = document.getElementById("inpt")
// console.log("inputbox")
const addbtn = document.getElementById("btn")
const showlist = document.getElementById("list")

addbtn.addEventListener("click", function (){
    const newtask = document.createElement("p")
    showlist.appendChild(newtask)
    // showlist.append("Hello world")
    inputbox.value = ""
    console.log(newtask);
})

newtask.addEventListener("click",function(){
    newtask.style.textDecoration ="line-through";
    newtask.style.textDecorationColor = "green"

})

newtask.addEventListener("dblclick", function(){
    // showlist.removeChild(newtask);
    showlist.removeChild(newtask);
    // newtask.style.textDecorationColor = "red";
})