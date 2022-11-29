import { data } from 'src/common/data/data';
import { IPhase } from '../types/types';

export const updateTask = (
  phaseId: number,
  taskId: number,
  isChecked: boolean,
  clearSucceedingPhaseTasks: boolean
) => {
  const phases: IPhase[] = [...data];

  const phase = phases?.find(p => p.id === phaseId);

  if (!phase) {
    return;
  }
  const taskIndex = phase.tasks.findIndex(task => task.id === taskId);
  if (taskIndex !== -1) {
    const task = { ...phase.tasks[taskIndex], isChecked };
    phase.tasks[taskIndex] = task;
    const isCompleted = !phase.tasks.some(task => !task.isChecked);
    phase.isCompleted = isCompleted;
  }

  if (clearSucceedingPhaseTasks) {
    for (let i = phaseId; i <= phases.length - 1; i++) {
      if (phases[i].isCompleted) {
        phases[i].isCompleted = false;
        phases[i].tasks.map(task => (task.isChecked = false));
      }
    }
  }

  return phases;
};
