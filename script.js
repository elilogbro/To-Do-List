let list = [];

const addToList = (ev)=>{
    ev.preventDefault();
    let toDo = {
        submit: document.getElementById("text-box").value
    }
    list.push(toDo);
    document.querySelector('form').reset();

    console.warn('added' , {list} );

let pre = document.querySelector('#msg pre');
pre.textContent = '\n' + JSON.stringify(list, '\t', 2);

localStorage.setItem('MyToDoList', JSON.stringify(list) )
}
document.addEventListener('DOMContentLoaded', ()=>{
    document.getElementsByClassName('submit-btn').addEventListener('click', addToList);
});