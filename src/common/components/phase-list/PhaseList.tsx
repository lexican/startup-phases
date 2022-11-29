import { usePhase } from '../../hooks/usePhase';
import Phase from '../phase/Phase';
import Task from '../task/Task';
import { PhaseListStyles } from './PhaseListStyles';

const PhaseList = (): JSX.Element => {
  const { data } = usePhase();
  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <PhaseListStyles>
      {data.phases.map((phase, index) => {
        return (
          <div key={phase.id}>
            <Phase
              title={phase.title}
              phaseNumber={index + 1}
              isCompleted={phase.isCompleted}
            />
            <ul>
              {phase.tasks.map(task => {
                return (
                  <li key={task.id}>
                    <Task task={task} phaseId={phase.id} disabled={false} />
                  </li>
                );
              })}
            </ul>
          </div>
        );
      })}
    </PhaseListStyles>
  );
};

export default PhaseList;
