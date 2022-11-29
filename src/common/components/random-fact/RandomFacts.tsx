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

  return phases?.phases[phases?.phases.length - 1].isCompleted ? (
    <RandomFactStyles>
      <p> {data.text}</p>
    </RandomFactStyles>
  ) : (
    <></>
  );
};

export default RandomFact;
