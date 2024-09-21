import { PriorityEnum } from 'task/TaskPriority-enum';

export class CreateTaskDto {
  id: string;

  name: string;

  priority: PriorityEnum;

  dueDate: string;

  desc: string;
}
