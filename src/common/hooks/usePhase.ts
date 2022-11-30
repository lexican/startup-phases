import { useState } from 'react';
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
  loading: boolean;
}

export const usePhase = (): IUsePhase => {
  const { data, error, mutate } = useSWR<IData>('/api/phase', fetcher);
  const [loading, setLoading] = useState<boolean>(false);

  const updateTask = async (
    taskId: number,
    phaseId: number,
    checked: boolean
  ) => {
    try {
      setLoading(true);
      await fetch('/api/phase', {
        method: 'PATCH',
        body: JSON.stringify({ phaseId, taskId, isChecked: checked })
      });
      mutate();
      setLoading(false);
    } catch (e) {
      console.log(e);
      setLoading(false);
    }
  };

  return { data, error, updateTask, loading };
};
