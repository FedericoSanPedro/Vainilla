//using selectors inside the element
// traversing the dom

const btns = document.querySelectorAll(".question-btn");

btns.forEach(function(btn){
    btn.addEventListener("click",function(e){
        const question = e.currentTarget.parentElement.parentElement;
        question.classList.toggle("show-text"); //al llegar el llamado al article hace un toggle "activa o desactiva", el doble parentElement es para llegar a ese article, hay que ver la cantidad necesaria a subir por medio de la herramienta de desarrolladores
        
    });
});