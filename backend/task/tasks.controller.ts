import { Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { CreateTaskDto } from 'dtos/CreateTaskDto';
import { TaskEntity } from './TaskEntity';

@Controller('tasks')
export class TasksController {
  constructor(private taskService: TasksService) {}

  @Post()
  async createTask(createTaskDto: CreateTaskDto): Promise<TaskEntity> {
    console.log('rec DTO', createTaskDto);
    return this.taskService.createTask(createTaskDto);
  }

  @Get('/:id')
  async getTaskByID(@Param('id') id: string): Promise<TaskEntity> {
    return this.taskService.getTaskById(id);
  }

  @Delete('/:id')
  async removeTask(@Param('id') id: string): Promise<void> {
    return this.taskService.removeTask(id);
  }
}
