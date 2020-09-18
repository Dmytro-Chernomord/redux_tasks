import { ADDTASK, GETFILTERVALUE, DELETETASK } from '../types/todoTypes';

const addTask = task => {
  return {
    type: ADDTASK,
    payload: task,
  };
};

const deleteTask = id => {
  return {
    type: DELETETASK,
    payload: id,
  };
};
const getFilterValue = value => {
  return {
    type: GETFILTERVALUE,
    payload: value,
  };
};

export { addTask, deleteTask, getFilterValue };
