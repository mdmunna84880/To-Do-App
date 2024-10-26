let inpt = document.querySelector("input");
let btn = document.querySelector("button");
let ul = document.querySelector("ul");

btn.addEventListener("click", function(){
    let li = document.createElement("li");
    li.innerText = inpt.value;

    let delbtn = document.createElement("button");
    delbtn.innerText = "delete";
    delbtn.classList.add("delete");

    li.appendChild(delbtn);
    ul.appendChild(li);
    inpt.value = "";
})

ul.addEventListener("click", function(event){
    if(event.target.nodeName == "BUTTON"){
        let parDtn = event.target.parentElement;
        parDtn.remove();
    }
})