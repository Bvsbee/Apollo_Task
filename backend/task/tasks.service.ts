import { Injectable, NotFoundException } from '@nestjs/common';
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
    const {
      id,
      name,
      priority,
      dueDate,
      description,
      isSelected,
      isCompleted,
    } = createTaskDto;

    const task = this.taskRepository.create({
      id,
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

  async removeTask(id: string): Promise<void> {
    await this.taskRepository.delete({id});
  }

  async getTaskById(id: string): Promise<TaskEntity> {
    const task = await this.taskRepository.findOneBy({ id });

    if (!task) {
       throw new NotFoundException(`Task with the following ID: ${id} was not found`)
    }

    return task;
    
    }


    
  }

