import { Todolist } from './components/Todolist';
import './App.css';

export type TaskType = {
  id: number;
  title: string;
  isDone: boolean;
};

function App() {
  const tasks1: TaskType[] = [
    { id: 1, title: 'HTML&CSS', isDone: true },
    { id: 2, title: 'JS', isDone: true },
    { id: 3, title: 'React', isDone: false },
    { id: 4, title: 'Rest API', isDone: false },
    { id: 5, title: 'GraphQL', isDone: false },
    { id: 6, title: 'Redux', isDone: false },
    { id: 7, title: 'Unit tests', isDone: true },
  ];

  const tasks2: TaskType[] = [
    { id: 1, title: 'Milk', isDone: true },
    { id: 2, title: 'Bread', isDone: false },
    { id: 3, title: 'Beer', isDone: true },
  ];

  return (
    <div className=''>
      <Todolist
        title={'What to learn'}
        tasks={tasks1}
        date={new Date().toLocaleDateString()}
      />
      <Todolist title={'What to buy'} tasks={tasks2} />
    </div>
  );
}

export default App;
