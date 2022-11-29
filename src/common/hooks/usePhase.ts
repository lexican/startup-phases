import useSWR from 'swr';
import { IPhase } from '../types/types';
import { fetcher } from '../utils/fetcher';

interface IData {
  phases: IPhase[];
}

interface IUsePhase {
  data: IData | undefined;
  error: any;
  updateTask: (taskId: number, phaseId: number, checked: boolean) => void;
}

export const usePhase = (): IUsePhase => {
  const { data, error, mutate } = useSWR<IData>('/api/phase', fetcher);

  const updateTask = async (
    taskId: number,
    phaseId: number,
    checked: boolean
  ) => {
    try {
      await fetch('/api/phase', {
        method: 'PATCH',
        body: JSON.stringify({ phaseId, taskId, isChecked: checked })
      });
      mutate();
    } catch (e) {
      console.log(e);
    }
  };

  return { data, error, updateTask };
};
