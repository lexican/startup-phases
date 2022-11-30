import type { NextApiRequest, NextApiResponse } from 'next';
import { data } from 'src/common/mock-data/phases.data';
import { IPhase } from 'src/common/types/phase.types';
import { updateTask } from 'src/common/utils';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { method } = req;

  // GET phases
  if (method === 'GET') {
    const phases: IPhase[] = data;

    res.status(200).json({ phases });
  } // UPDATE user startup phase
  else if (method === 'PATCH') {
    const { phaseId, taskId, isChecked } = JSON.parse(req.body);

    const phases: IPhase[] = [...data];

    // update any task that belongs to the last phase in the phase list if isChecked is either true or phase
    // or
    // update any task if we are setting isChecked to true for the first time
    if (phaseId === phases.length || isChecked) {
      const data = updateTask(phaseId, taskId, isChecked, false);

      return res.status(200).json(data);
    } else {
      // if we are unchecking / undoing  a task, then set succeeding completed phases isCompleted value to false
      // and also set all the isChecked value for all tasks under each succeeding phase to false
      const data = updateTask(phaseId, taskId, isChecked, true);

      return res.status(200).json(data);
    }
  } // return error for all other HTTP verbs other than GET, PATCH
  else {
    return res.status(404).json({ error: 'route not found' });
  }
}
