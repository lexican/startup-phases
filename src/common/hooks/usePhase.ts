import { IPhase } from 'src/common/types/types';
import { fetcher } from 'src/common/utils/fetcher';
import useSWR from 'swr';

interface IData {
  phases: IPhase[];
}

interface IUsePhase {
  data: IData | undefined;
  error: any;
}

export const usePhase = (): IUsePhase => {
  const { data, error } = useSWR<IData>('/api/phase', fetcher);

  return { data, error };
};
