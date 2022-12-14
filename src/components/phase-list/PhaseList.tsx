import { usePhase } from '../../hooks/usePhase';
import Loader from '../loader/Loader';
import Phase from '../phase/Phase';
import Task from '../task/Task';
import { PhaseListStyles } from './PhaseListStyles';

const PhaseList = (): JSX.Element => {
  const { data, loading } = usePhase();
  if (!data || loading) {
    return <Loader />;
  }

  return (
    <PhaseListStyles>
      {data.phases.map((phase, index) => {
        const isTaskDisabled =
          index === 0 ? false : !data.phases[index - 1].isCompleted;
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
                    <Task
                      task={task}
                      phaseId={phase.id}
                      disabled={isTaskDisabled}
                    />
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
