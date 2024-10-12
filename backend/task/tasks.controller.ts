import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { TasksService } from './tasks.service';
import { CreateTaskDto } from 'dtos/CreateTaskDto';
import { TaskEntity } from './TaskEntity';
import { UpdateTaskDto } from 'dtos/UpdateTaskDto';
import { GetTaskFilterDto } from 'dtos/getTaskFilterDto';

@Controller('tasks')
export class TasksController {
  constructor(private readonly taskService: TasksService) {}

  @Post()
  async createTask(@Body() createTaskDto: CreateTaskDto): Promise<TaskEntity> {
    return this.taskService.createTask(createTaskDto);
  }

  @Get()
  async getAllTask(getTaskFilterDto: GetTaskFilterDto): Promise<TaskEntity[]> {
    return this.taskService.getAllTasks(getTaskFilterDto);
  }

  @Get('/:id')
  async getTaskByID(@Param('id') id: string): Promise<TaskEntity> {
    return this.taskService.getTaskById(id);
  }

  @Patch('/:id')
  async updateTask(
    @Param('id') id: string,
    @Body() updateTaskDto: UpdateTaskDto,
  ): Promise<TaskEntity> {
    return this.taskService.updateTask(id, updateTaskDto);
  }

  @Delete('/:id')
  async removeTask(@Param('id') id: string): Promise<void> {
    return this.taskService.removeTask(id);
  }
}
