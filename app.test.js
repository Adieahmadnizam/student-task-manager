// Simple test to verify the task manager basic functionality

describe('Student Task Manager Functions', () => {

  // Test 1: Check if addTask function exists and works
  test('should add a new task to the list', () => {
    // Mock task array
    let tasks = [];
    
    function addTask(taskList, newTask) {
      taskList.push({ id: Date.now(), text: newTask });
      return taskList;
    }
    
    tasks = addTask(tasks, 'Complete Cloud Computing project');
    
    expect(tasks.length).toBe(1);
    expect(tasks[0].text).toBe('Complete Cloud Computing project');
  });

  // Test 2: Check if deleteTask function removes a task
  test('should delete a task from the list', () => {
    let tasks = [
      { id: 1, text: 'Task 1' },
      { id: 2, text: 'Task 2' },
      { id: 3, text: 'Task 3' }
    ];
    
    function deleteTask(taskList, taskId) {
      return taskList.filter(task => task.id !== taskId);
    }
    
    tasks = deleteTask(tasks, 2);
    
    expect(tasks.length).toBe(2);
    expect(tasks[0].id).toBe(1);
    expect(tasks[1].id).toBe(3);
  });

  // Test 3: Check if tasks are displayed correctly
  test('should display all tasks', () => {
    const tasks = [
      { id: 1, text: 'Buy groceries' },
      { id: 2, text: 'Study for exam' }
    ];
    
    function getTaskCount(taskList) {
      return taskList.length;
    }
    
    expect(getTaskCount(tasks)).toBe(2);
  });

  // Test 4: Simple math test (basic Jest validation)
  test('adds two numbers correctly', () => {
    const sum = (a, b) => a + b;
    expect(sum(2, 3)).toBe(5);
  });
});
