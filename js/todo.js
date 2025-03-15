const toDoFrom = document.getElementById("todo-form");
const toDoInput = toDoFrom.querySelector("input");
const toDoList = document.getElementById("todo-list");

// localStorage에서 사용자 이름 가져오기

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
    li.id = newToDo.id;

    const span = document.createElement("span");
    span.innerText = newToDo.text;

    const button = document.createElement("button");
    button.innerText = "X";
    button.addEventListener("click", deleteToDo); // X 버튼에 deleteToDo 함수 연결

    const compButton = document.createElement("button"); // 체크 버튼 추가
    compButton.innerText = "✔️";
    compButton.addEventListener("click", toDoComplete); // 체크 버튼에 toDoComplete 함수 연결

    // 'comp'가 true일 경우, 'completed' 클래스 추가
    if (newToDo.comp) {
        li.classList.add("completed"); // 완료된 투두에는 'completed' 클래스 추가
    }

    li.appendChild(span);
    li.appendChild(button);
    li.appendChild(compButton); // 체크 버튼을 li에 추가
    toDoList.appendChild(li);
}

function handleToDoSubmit(event) {
    event.preventDefault(); //기본동작 막기(새로고침)
    const newToDo = toDoInput.value;
    toDoInput.value = "";
    const newToDoObj = {
        text: newToDo,
        id: Date.now(),
        comp : false,
    };
    toDos.push(newToDoObj);
    paintToDo(newToDoObj);
    saveToDos();
}

function toDoComplete(event) {
    const whichLi = event.target.parentElement; // 체크된 li 요소 찾기
    const toDoId = parseInt(whichLi.id); // 해당 li의 ID를 숫자로 변환

    // 'completed' 클래스 토글
    whichLi.classList.toggle("completed");

    // toDos 배열에서 해당 toDo를 찾아 'comp' 상태 반영
    toDos = toDos.map((toDo) =>
        toDo.id === toDoId
            ? { ...toDo, comp: !toDo.comp } // comp 상태 반전
            : toDo
    );

    saveToDos(); // 변경 사항을 로컬 스토리지에 저장
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