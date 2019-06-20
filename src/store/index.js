import { createStore } from 'redux';

const INITIAL_STATE = {
  myList: [
    'read',
    'write'
  ]
}

const todoshka = (state=INITIAL_STATE, action) => {
  switch (action.type) {
    case 'ADD_TASK': 
      return { ...state, myList: [ ...state.myList, action.title ] };
    case 'DELET_TASK':
        return { ...state, myList: action.title }
    default: 
      return state; 
  }
}

const store = createStore(todoshka);

export default store; 