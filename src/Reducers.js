export const newInProgressTask = {
  name: null,
  category: null,
  urgency: null
};
  
export var inProgressTask = newInProgressTask;

export var taskList = [];

export var state = {
  inProgressTask: inProgressTask,
  taskList: taskList
};

export const urgency = {
  URGENT: 'urgent',
  NORMAL: 'normal',
  LOW_PRIORITY: 'low priority'
};
  
export const category = {
  WORK: 'work',  
  PERSONAL: 'personal',
  FUN: 'fun'
};
  

export function changeIPTaskName(state, newName) {
  return { ...state, inProgressTask: { ...inProgressTask, name: newName }};
}

export function changeIPTaskCategory(state, newCategory) {
  if(newCategory !== category.WORK && newCategory !== category.PERSONAL &&
      newCategory !== category.FUN) {
        return state;
  }
  return { ...state, inProgressTask: { ...inProgressTask, category: newCategory }};
}

export function changeIPTaskUrgency(state, newUrgency) {
  if(newUrgency !== urgency.URGENT && newUrgency !== urgency.NORMAL &&
     newUrgency !== urgency.LOW_PRIORITY) {
       return state;
  }
  return { ...state, inProgressTask: { ...inProgressTask, category: newUrgency }};
}

export function resetIPTask(state) {
  return { ...state, inProgressTask: newInProgressTask };
}

export function addTaskToList(state, addTask) {
  if (state.inProgressTask.category === null ||
      state.inProgressTask.urgency === null ||
      state.inProgressTask.name === null) {
        return state;
  }
  return { ...state, taskList: taskList.unshift(addTask) };
}

export function removeTask(state, removeTask) {
  var index = state.taskList.indexOf(removeTask);
  return { ...state, taskList: taskList.splice(index, 1)};
}