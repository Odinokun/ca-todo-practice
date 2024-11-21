import { Todolist } from './components/Todolist';
import './App.css';
import { useState } from 'react';

export type TaskType = {
  id: number;
  title: string;
  isDone: boolean;
};
export type FilterValuesType = 'all' | 'active' | 'completed';

function App() {
  const [tasks, setTasks] = useState<TaskType[]>([
    { id: 1, title: 'HTML&CSS', isDone: true },
    { id: 2, title: 'JS', isDone: true },
    { id: 3, title: 'React', isDone: false },
    { id: 4, title: 'Rest API', isDone: false },
    { id: 5, title: 'GraphQL', isDone: false },
    { id: 6, title: 'Redux', isDone: false },
    { id: 7, title: 'Unit tests', isDone: true },
  ]);
  const [filter, setFilter] = useState<FilterValuesType>('all');

  const removeTask = (id: number) => setTasks(tasks.filter(t => t.id !== id));

  function tasksFilter(): TaskType[] {
    switch (filter) {
      case 'active':
        return tasks.filter(t => !t.isDone);
      case 'completed':
        return tasks.filter(t => t.isDone);
      default:
        return tasks;
    }
  }
  const filteredTasksArr = tasksFilter();

  return (
    <div className=''>
      <Todolist
        title={'What to learn'}
        tasks={filteredTasksArr}
        date={new Date().toLocaleDateString()}
        removeTask={removeTask}
        setFilter={setFilter}
      />
    </div>
  );
}

export default App;
