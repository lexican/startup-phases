import { usePhase } from 'src/hooks/usePhase';
import { ITask } from 'src/types/phase.types';
import { TaskStyles } from './TaskStyles';

interface IProps {
  task: ITask;
  phaseId: number;
  disabled: boolean;
}

export default function Task({ task, phaseId, disabled }: IProps) {
  const { updateTask } = usePhase();
  return (
    <TaskStyles disabled={disabled}>
      {task.title}
      <input
        type="checkbox"
        checked={task.isChecked}
        onChange={e => {
          updateTask(task.id, phaseId, e.target.checked);
        }}
        disabled={disabled}
      />
      <span className="checkmark" />
    </TaskStyles>
  );
}
