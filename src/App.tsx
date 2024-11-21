import { Todolist } from './components/Todolist';
import './App.css';

function App() {
  return (
    <div className=''>
      <Todolist title={'What to learn'} />
      <Todolist title={'What to buy'} />
    </div>
  );
}

export default App;
