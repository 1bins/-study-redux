import { createStore } from "redux";

const add = document.querySelector('#add');
const minus = document.querySelector('#minus');
const number = document.querySelector('span');

number.innerText = 0;

const ADD = "ADD";
const MINUS = "MINUS";

const countModifier = (count = 0, action) => {
    switch(action.type) {
        case ADD:
            return count + 1;
        case MINUS:
            return count - 1;
        default:
            return count;
    }
};

const countStore = createStore(countModifier);

const onChange = () => {
    number.innerText = countStore.getState();
}
// subscribe :: dispatch 상태변화가 일어날때 작동
countStore.subscribe(onChange);

const handleAdd = () => {
    countStore.dispatch({ type: ADD });
}

const handleMinus = () => {
    countStore.dispatch({ type: MINUS });
}

add.addEventListener('click', handleAdd);
minus.addEventListener('click', handleMinus)