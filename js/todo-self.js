const toDoForm = document.querySelector(".todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.querySelector(".todo-list");

let toDoArray = [];
const TODO_KEY = "To-do"

function saveToDo() {
    localStorage.setItem(TODO_KEY, JSON.stringify(toDoArray));
}

// !중요! click event정보 활용 //
function deleteToDo(event) {
    const li = event.target.parentElement; // li= click event의 target(버튼)의 부모요소이다
    li.remove(); // li 제거

    toDoArray = toDoArray.filter(item => item.id !== parseInt(li.id)); // *** toDoArray에 관해서, 우리가 클릭한 li.id를 제외하도록하기
    saveToDo(); // *** 변경사항 반영을 위해 saveToDo function과 연결
}

// *** ()안에 아무거나 넣어도 newToDoObj의 정보로 인식되는 것? //
function paintToDo(anything) {
    const li = document.createElement("li"); // html-li 생성
    li.id = anything.id;

    const span = document.createElement("span"); // html-span 생성
    span.innerText = anything.text;

    const btn = document.createElement("button"); // html-button 생성
    btn.innerText = "📝";
    btn.addEventListener("click", deleteToDo); // 버튼클릭시, deleteToDo function 작동

    // html 자식부모 설정 //
    toDoList.appendChild(li);
    li.appendChild(span);
    li.appendChild(btn);
}

// !중요! submit event정보 활용 //
function submitToDoForm(event) {
    event.preventDefault(); // 폼의 기본동작 새로고침 막아주기
    const newToDo = toDoInput.value; // 폼에 입력해주는 값 newToDo 변수명 지정
    toDoInput.value = ""; // 폼에 입력해주는 값 초기화

    // newToDo와 id 묶어주기 //
    const newToDoObj = {
        text: newToDo,
        id: Date.now(),
    }
    toDoArray.push(newToDoObj); // toDoArray에 newToDoObj값 추가
    paintToDo(newToDoObj); // ***newToDoObj정보를 가지고 paintToDo function과 연결
    saveToDo(); // saveToDo function과 연결
}

toDoForm.addEventListener("submit", submitToDoForm); // 폼 제출시, submitToDoForm function 작동

// ***복습필요 저장된값 있을시 화면 새로고침해도 유지하기 //
const savedToDo = localStorage.getItem(TODO_KEY) // ***이렇게하면 string으로 불러와줌

if (savedToDo !== null) {
    const parsedToDo = JSON.parse(savedToDo); // ***JSON.parse()로 savedToDo를 array로 불러오기
    toDoArray = parsedToDo; // ***여기에서 toDoArray는 parsedToDo라는 array로 대체된다
    parsedToDo.forEach(paintToDo); // ***.forEach(functionName)로 array의 각 item에 대해 functionName을 실행할 수 있다
}