import useSWR from 'swr';
import { usePhase } from '../../hooks/usePhase';
import { fetcher } from '../../utils/fetcher';
import { RandomFactStyles } from './RandomFactStyles';
const RandomFact = (): JSX.Element => {
  const { data: phases } = usePhase();

  const { data, error } = useSWR(
    'https://uselessfacts.jsph.pl/random.json',
    fetcher
  );

  if (error) return <div>failed to load</div>;
  if (!data) return <></>;

  const phasesCompeted =
    phases?.phases[phases?.phases.length - 1].isCompleted ?? false;

  return phasesCompeted ? (
    <RandomFactStyles>
      <p> {data.text}</p>
    </RandomFactStyles>
  ) : (
    <></>
  );
};

export default RandomFact;
