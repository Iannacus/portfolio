const menuDesplegable = document.querySelector(".lista").firstElementChild.firstElementChild;
let counter = 0;

menuDesplegable.addEventListener("click", e => {
    if(counter%2 === 0){
        e.target.parentElement.nextElementSibling.style.display = "block";
    }else {
        e.target.parentElement.nextElementSibling.style.display = "none";
    }
    counter++;
});