import { render, screen } from '@testing-library/react';
import PhaseList from 'src/components/phase-list/PhaseList';
import { usePhase } from 'src/hooks/usePhase';
import Home from '../pages/index';

jest.mock('src/common/hooks/usePhase', () => ({
  usePhase: jest.fn()
}));

jest.mock('src/common/components/loader/Loader', () => ({
  __esModule: true,
  default: () => <div data-testid="loader" />
}));

jest.mock('src/common/components/phase/Phase', () => ({
  __esModule: true,
  default: ({ isCompleted }: any) => (
    <div data-testid="phase">{isCompleted.toString()}</div>
  )
}));

jest.mock('src/common/components/random-fact/RandomFact', () => ({
  __esModule: true,
  default: () => <div data-testid="random-fact" />
}));

jest.mock('src/common/components/task/Task', () => ({
  __esModule: true,
  default: ({ onChange, checked, disabled }: any) => (
    <input
      data-testid="checkbox"
      type="checkbox"
      onChange={onChange}
      checked={checked}
      disabled={disabled}
    />
  )
}));

const phasesData = [
  {
    id: 1,
    title: 'Phase 1',
    isCompleted: true,
    tasks: [
      {
        id: 1,
        title: 'First task',
        isChecked: false
      },
      {
        id: 2,
        title: 'Second task',
        isChecked: false
      },
      {
        id: 3,
        title: 'Third task2',
        isChecked: false
      }
    ]
  },
  {
    id: 2,
    title: 'Phase 2',
    isCompleted: false,
    tasks: [
      {
        id: 1,
        title: 'First task',
        isChecked: false
      }
    ]
  }
];

describe('Home', () => {
  beforeEach(() => {
    (usePhase as jest.Mock).mockReturnValue({
      data: { phases: phasesData },
      updateTask: jest.fn()
    });
  });
  it('should render without errors', () => {
    render(<Home />);
  });

  it('should render home page header correctly', () => {
    render(<Home />);
    const header = screen.getByText('My startup progress');
    expect(header).toBeInTheDocument();
  });

  it('should render home page footer text correctly', () => {
    render(<Home />);
    const header = screen.getByText('AUDITION ASSIGNMENT');
    expect(header).toBeInTheDocument();
  });

  it('should render loader when data is null', () => {
    (usePhase as jest.Mock).mockReturnValue({
      data: null,
      updateTask: jest.fn()
    });

    render(<PhaseList />);

    const loader = screen.getByTestId('loader');
    expect(loader).toBeInTheDocument();
  });

  it('should render correct number of phases', () => {
    render(<PhaseList />);

    const phaseTitles = screen.getAllByTestId('phase');
    expect(phaseTitles).toHaveLength(phasesData.length);
  });

  it('should render correct number of checkboxes', () => {
    render(<PhaseList />);

    const checkboxes = screen.getAllByTestId('checkbox');
    expect(checkboxes).toHaveLength(4);
  });
});
