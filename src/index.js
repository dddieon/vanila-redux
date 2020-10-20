import { createStore } from "redux"

const add = document.getElementById("add")
const minus = document.getElementById("minus")
const number = document.querySelector("span")

// 액션타입 정의 => string으로 바로 넣는것보다 편안-

const ADD = "ADD"
const MINUS = "MINUS"

// 리듀서 함수
const countModifier = (count = 0, action) => {
    switch (action.type) {
        case ADD:
            return count + 1
        case MINUS:
            return count - 1
        default:
            return count
    }
}

// 스토어 생성
const countStore = createStore(countModifier)

// 핸들러

const handler = (typeName) => {
    countStore.dispatch({ type: typeName })
}
add.addEventListener("click", () => {
    handler(ADD)
})
minus.addEventListener("click", () => {
    handler(MINUS)
})

// 변화 감지

const onChange = () => {
    number.innerText = countStore.getState()
}
countStore.subscribe(onChange)
