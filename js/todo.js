// html에서 불러오기 //
const toDoForm = document.querySelector(".todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.querySelector(".todo-list");

let toDos = []; // 단순히 toDos라는 array
const TODOS_KEY = "To-Do"; // "To-Do"를 변수명으로 저장

// To-Do를 저장해주는 function //
function saveToDos() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos)); // localStorage에 toDos array를 string으로 저장
}

// To-Do를 삭제해주는 function //
function deleteToDo(event) {
    const li = event.target.parentElement; // 버튼(=타겟)의 부모요소, 즉 우리가 클릭한 li
    toDos = toDos.filter(todo => todo.id !== parseInt(li.id)); // toDos array에서 클릭한 li.id를 제외한 것들만 남기기
    li.remove(); // 클릭한 li 삭제
    saveToDos(); // 저장된 To-Do 불러와주기
}

// To-Do를 그려주는 function //
function paintToDo(newToDo) {
    const tagLi = document.createElement("li"); // li tag 생성
    tagLi.id = newToDo.id;
    const tagSpan = document.createElement("span"); // span tag 생성
    tagSpan.innerText = newToDo.text; // span의 innerText는 우리가 폼에 입력해주는 값 

    const tagBtn = document.createElement("button"); // button tag 생성
    tagBtn.innerText = "❌";
    tagBtn.addEventListener("click", deleteToDo);

    tagLi.appendChild(tagSpan); // li의 자식1로 span 지정
    tagLi.appendChild(tagBtn); // li의 자식2로 button 지정 
    toDoList.appendChild(tagLi); // .todo-list의 자식으로 li 지정
}

// To-Do 폼: 서밋 이벤트에 대한 function //
function submitToDoForm(event) {
    event.preventDefault(); // 폼-서밋의 기본동작 새로고침을 막아줌

    const newToDo = toDoInput.value; // 우리가 폼에 입력해주는 값 = newToDo
    toDoInput.value = ""; // 저장해주고 다시 공란으로 만들기

    // Object형태의 newToDo //
    const newToDoOjt = {
        text: newToDo,
        id: Date.now(),
    }
    toDos.push(newToDoOjt); // Object형태의 newToDo를 toDos라는 array에 푸쉬해주기
    paintToDo(newToDoOjt); // To-Do를 그려주는 function과 연결해줌 트리거는 newToDoOjt
    saveToDos() // To-Do를 저장해주는 function과 연결해줌
}

// To-Do폼: 서밋 이벤트 적용 //
toDoForm.addEventListener("submit", submitToDoForm);


// string으로 저장된 toDos를 불러와줌 //
const savedToDos = localStorage.getItem(TODOS_KEY);

// 저장된 toDos array가 공란이 아닐경우
if (savedToDos !== null) {
    const parsedToDos = JSON.parse(savedToDos); // string으로 저장된 toDos를 array로 만들어줌
    toDos = parsedToDos; // 기존에 공란으로 설정된 toDos를 parsedToDos로 설정
    parsedToDos.forEach(paintToDo); // parsedToDos의 각 item에 paintToDo function 적용
}

