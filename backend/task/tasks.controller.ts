import { Controller, Post } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { CreateTaskDto } from 'dtos/CreateTaskDto';
import { TaskEntity } from './TaskEntity';

@Controller('tasks')
export class TasksController {
  constructor(private taskService: TasksService) {}

  @Post()
  async createTask(createTaskDto: CreateTaskDto): Promise<TaskEntity> {
    console.log('recevied DTO', createTaskDto);
    return this.taskService.createTask(createTaskDto);
  }
}
