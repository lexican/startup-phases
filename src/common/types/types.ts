export interface ITask {
  id: number;
  title: string;
  isChecked: boolean;
}

export interface IPhase {
  id: number;
  title: string;
  isCompleted: boolean;
  tasks: ITask[];
}
