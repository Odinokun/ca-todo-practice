import { FC } from 'react';
import { TaskType } from '../App';
import { Button } from './Button';

type PropsType = {
  title: string;
  tasks: TaskType[];
  date?: string;
  removeTask: (id: number) => void;
};

export const Todolist: FC<PropsType> = ({
  title,
  tasks,
  date,
  removeTask,
  ...restProps
}) => {
  const tasksList: JSX.Element[] = tasks.map(t => {
    const onClickHandler = () => removeTask(t.id);

    return (
      <li key={t.id}>
        <Button name={'del'} onClick={onClickHandler} />
        <input type='checkbox' checked={t.isDone} />
        <span>{t.title}</span>
      </li>
    );
  });

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
      <br />

      {tasksList.length ? <ul>{tasksList}</ul> : <span>No tasks</span>}
      <br />

      <strong>
        <i>{date}</i>
      </strong>
    </div>
  );
};
