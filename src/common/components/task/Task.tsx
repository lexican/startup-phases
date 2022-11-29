import { ITask } from 'src/common/types/types';
import { TaskStyles } from './TaskStyles';

interface IProps {
  task: ITask;
  phaseId: number;
  disabled: boolean;
}

export default function Task({ task, phaseId, disabled }: IProps) {
  return (
    <TaskStyles disabled={disabled}>
      {task.title}
      <input
        type="checkbox"
        checked={task.isChecked}
        onChange={e => {}}
        disabled={disabled}
      />
      <span className="checkmark" />
    </TaskStyles>
  );
}
