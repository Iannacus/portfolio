const menuDesplegable = document.getElementById("menu").firstElementChild;
const showMenu = document.getElementById("showMenu");
let counter = 0;



menuDesplegable.addEventListener("click", e => {

    if(showMenu.style.display === "none") {showMenu.style.display = "block"}
    //  if(counter%2 === 0){
    //      e.target.parentElement.nextElementSibling.style.display = "block";
    //      counter++;
    //  }else {
    //      e.target.parentElement.nextElementSibling.style.display = "none";
    //      counter++;
    //  }
    
});