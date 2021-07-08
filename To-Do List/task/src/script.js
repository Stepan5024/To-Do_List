let list = document.querySelector('ul');
let todos;

function toLocal() {
    todos = list.innerHTML;
    localStorage.setItem("todos", todos);
}

list.addEventListener('click', function (ev) {
    if (ev.target.tagName === "LI") {
        ev.target.classList.toggle('checked');
        toLocal();
    } else if (ev.target.tagName === "BUTTON") {
        let div = ev.target.parentNode;
        div.remove();
        toLocal();

    }
}, false);

function newElement() {
    let li = document.createElement('li');
    let inputValue = document.getElementById('input-task').value;

    if (inputValue === "") {
        alert("Введите ваше дело!");
    } else {
        document.getElementById('task-list').appendChild(li);
    }
    let mySpan = document.createElement("span");
    mySpan.className = "task";
    mySpan.innerHTML = inputValue;
    li.appendChild(mySpan);
    let myCheck = document.createElement("input");
    myCheck.type = "checkbox";
    myCheck.className = "check-with-span";
    myCheck.addEventListener('change', function () {
        if (this.checked) {
            console.error("Checkbox is checked..");
            toLocal();
        } else {
            console.error("Checkbox is not checked..");
            toLocal();

        }
        toLocal();
        mySpan.classList.toggle('checked');
    });
    li.appendChild(myCheck);

    document.getElementById('input-task').value = ""; // or inputValue = "";
    let button = document.createElement('BUTTON');
    let txt = document.createTextNode("X");
    button.className = "delete-btn";
    button.appendChild(txt);
    li.appendChild(button);
    toLocal()


}

if(localStorage.getItem('todos')){
    list.innerHTML = localStorage.getItem('todos');
}