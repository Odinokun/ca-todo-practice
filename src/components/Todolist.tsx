import { FC } from 'react';
import { Button } from './Button';

type PropsType = {};

export const Todolist: FC<PropsType> = () => {
  return (
    <div>
      <h3>What to learn</h3>
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
        <li>
          <input type='checkbox' checked={true} /> <span>HTML&CSS</span>
        </li>
        <li>
          <input type='checkbox' checked={true} /> <span>JS</span>
        </li>
        <li>
          <input type='checkbox' checked={false} /> <span>React</span>
        </li>
      </ul>
    </div>
  );
};
