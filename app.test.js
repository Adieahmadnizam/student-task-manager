describe('Student Task Manager Functions', () => {

  test('should add a new task to the list', () => {
    let tasks = [];
    
    function addTask(taskList, newTask) {
      taskList.push({ id: Date.now(), text: newTask });
      return taskList;
    }
    
    tasks = addTask(tasks, 'Complete Cloud Computing project');
    
    expect(tasks.length).toBe(1);
    expect(tasks[0].text).toBe('Complete Cloud Computing project');
  });

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

  test('adds two numbers correctly', () => {
    const sum = (a, b) => a + b;
    expect(sum(2, 3)).toBe(5);
  });
});
