const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos"

const toDos = [];

function saveToDos() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));//객체든 배열이든 어떤 것이든 string으로 바꿔주는 기능
}

function deleteToDo(event) {
    const li = event.target.parentElement;
    li.remove();
}

function paintToDo(newTodo) {
    const li = document.createElement("li");
    const span = document.createElement("span");
    span.innerText = newTodo;
    const button = document.createElement("button");
    button.innerText = "❌";
    button.addEventListener("click", deleteToDo);
    li.appendChild(span); 
    li.appendChild(button);
    toDoList.appendChild(li); //html에 입력하기
}

function handleToDoSubmit(event) {
    event.preventDefault();
    const newTodo = toDoInput.value; //input의 value를 새로운 변수에 복사한것임.
    toDoInput.value = ""; //입력후 input 비워주기
    toDos.push(newTodo);
    paintToDo(newTodo);
    saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);
if(savedToDos !== null) { //비어있지 않다면 배열로 바꿔줘라
    const parsedToDos = JSON.parse(savedToDos); 
    parsedToDos.forEach(paintToDo);//배열로 바뀌었기 때문에 forEach 쓸 수 있다
}