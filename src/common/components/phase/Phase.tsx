import { FC } from 'react';
import CheckmarkIcon from '../checkmark/Checkmark';
import { PhaseStyles } from './PhaseStyles';

interface IProps {
  phaseNumber: number;
  title: string;
  isCompleted: boolean;
}

const Phase: FC<IProps> = ({ title, phaseNumber, isCompleted }) => (
  <PhaseStyles>
    <div className="title">
      <span className="phase-number">{phaseNumber}</span>
      <h3>{title}</h3>
    </div>
    {isCompleted && <CheckmarkIcon />}
  </PhaseStyles>
);

export default Phase;
