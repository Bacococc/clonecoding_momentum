const toDoFrom = document.getElementById("todo-form");
const toDoInput = toDoFrom.querySelector("input");
const toDoList = document.getElementById("todo-list");

let toDos = [];
const TODOS_KEY = "todos";

function saveToDos() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos)) //array 모양 그대로 String으로 바꿔 저장
}

function deleteToDo(event) { //x 버튼의 클릭 이벤트의 정보
    const whichLi = event.target.parentElement; //x 버튼이 눌린 li -> String 타입으로 반환 됨
    whichLi.remove(); //x 버튼이 눌린 li 정보 삭제
    toDos = toDos.filter(toDo => toDo.id !== parseInt(whichLi.id)); //x 버튼이 눌린 li의 ID를 Int로 변환, ID가 다른 투두만 남겨둠
    saveToDos(); //로컬 스토리지에 업데이트 하는 function으로 다시 업데이트
}

function paintToDo(newToDo) {
    const li = document.createElement("li");
    li.id = newToDo.id
    const span = document.createElement("span");
    span.innerText = newToDo.text;
    const button = document.createElement("button");
    button.innerText = "X";
    button.addEventListener("click", deleteToDo)
    li.appendChild(span);
    li.appendChild(button);
    toDoList.appendChild(li);
}

function handleToDoSubmit(event) {
    event.preventDefault(); //기본동작 막기(새로고침)
    const newToDo = toDoInput.value;
    toDoInput.value = "";
    const newToDoObj = {
        text: newToDo,
        id: Date.now(),
    };
    toDos.push(newToDoObj);
    paintToDo(newToDoObj);
    saveToDos();
}

toDoFrom.addEventListener("submit", handleToDoSubmit);

//item : 현재 처리중인 item 프로세스, 이 상황에서는 
//ex) parseToDos로 문자열 -> 배열로 변환된 배열의 각 요소를 하나씩 순회하며 sayHello에 item으로 전달

const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos !== null){
    const parseToDos = JSON.parse(savedToDos); //문자열을 다시 배열로 변환
    toDos =  parseToDos; //로컬 스토리지 저장 시(= 저장된 todo가 있을 시) 리스트에 to do 업데이트 => 새로고침해도 안날아감
    parseToDos.forEach(paintToDo);
}

