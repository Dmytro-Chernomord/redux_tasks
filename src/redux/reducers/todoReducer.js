import { ADDTASK, GETFILTERVALUE, DELETETASK } from '../types/todoTypes';

const initialState = {
  todoList: [],
  filter: '',
};

const todoReducer = (state = { ...initialState }, action) => {
  switch (action.type) {
    case ADDTASK:
      return { ...state, todoList: [...state.todoList, action.payload] };

    case DELETETASK:
      return {
        ...state,
        todoList: [
          ...state.todoList.filter(task => task.id !== action.payload),
        ],
      };
    case GETFILTERVALUE:
      return { ...state, filter: action.payload };
    default:
      return state;
  }
};

export default todoReducer;
