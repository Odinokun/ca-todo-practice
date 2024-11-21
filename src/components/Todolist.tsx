import { FC } from 'react';
import { TaskType } from '../App';
import { Button } from './Button';

type PropsType = {
  title: string;
  tasks: TaskType[];
};

export const Todolist: FC<PropsType> = ({ title, tasks, ...restProps }) => {
  return (
    <div>
      <h3>{title}</h3>
      <div>
        <input />
        <Button name={'add task'} onClick={() => {}} />
      </div>
      <br />

      <div>
        <Button name={'All'} onClick={() => {}} />
        <Button name={'Active'} onClick={() => {}} />
        <Button name={'Completed'} onClick={() => {}} />
      </div>

      <ul>
        {tasks.map(t => (
          <li key={t.id}>
            <Button name={'del'} onClick={() => {}} />
            <input type='checkbox' checked={t.isDone} />
            <span>{t.title}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};
