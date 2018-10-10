import { changeIPTaskName, changeIPTaskCategory, changeIPTaskUrgency,
  resetIPTask, addTaskToList, removeTask, newInProgressTask, inProgressTask,
  taskList, state, category, urgency } from './Reducers.js';

  describe('tests for task manager reducers', () => {
    describe('changeIPTaskName', () => {
        it('changes the task name', () => {
            const testName = "Team Meeting";
            var testState = changeIPTaskName(testState, testName);
            expect(testState.inProgressTask.name).toBe(testName);
        })
    });

    describe('changeIPTaskCategory', () => {
        it('changes the task category', () => {
            const testCategory = category.FUN;
            var testState = changeIPTaskCategory(testState, testCategory);
            expect(testState.inProgressTask.category).toBe(testCategory);
        })
    });
  });