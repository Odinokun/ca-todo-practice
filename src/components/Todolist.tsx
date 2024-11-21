import { FC } from 'react';
import { FilterValuesType, TaskType } from '../App';
import { Button } from './Button';

type PropsType = {
  title: string;
  tasks: TaskType[];
  date?: string;
  removeTask: (id: number) => void;
  setFilter: (val: FilterValuesType) => void;
};

export const Todolist: FC<PropsType> = ({
  title,
  tasks,
  date,
  removeTask,
  setFilter,
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
  const setFilterAll = () => setFilter('all');
  const setFilterActive = () => setFilter('active');
  const setFilterCompleted = () => setFilter('completed');

  return (
    <div>
      <h3>{title}</h3>
      <div>
        <input />
        <Button name={'add task'} onClick={() => {}} />
      </div>
      <br />

      <div>
        <Button name={'All'} onClick={setFilterAll} />
        <Button name={'Active'} onClick={setFilterActive} />
        <Button name={'Completed'} onClick={setFilterCompleted} />
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
