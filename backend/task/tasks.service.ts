import { Injectable } from '@nestjs/common';
import { CreateTaskDto } from 'dtos/CreateTaskDto';
import { InjectRepository } from '@nestjs/typeorm';
import { TaskEntity } from './TaskEntity';
import { Repository } from 'typeorm';

@Injectable()
export class TasksService {
  constructor(
    @InjectRepository(TaskEntity)
    private taskRepository: Repository<TaskEntity>,
  ) {}

  async createTask(createTaskDto: CreateTaskDto): Promise<TaskEntity> {
    const { name, priority, dueDate, description, isSelected, isCompleted } =
      createTaskDto;

    const task = this.taskRepository.create({
      name,
      priority,
      dueDate,
      description,
      isSelected,
      isCompleted,
    });

    this.taskRepository.save(task);

    return task;
  }
}
