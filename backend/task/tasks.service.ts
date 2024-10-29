import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateTaskDto } from 'dtos/CreateTaskDto';
import { InjectRepository } from '@nestjs/typeorm';
import { TaskEntity } from './TaskEntity';
import { Repository } from 'typeorm';
import { UpdateTaskDto } from 'dtos/UpdateTaskDto';
import { GetTaskFilterDto } from 'dtos/getTaskFilterDto';

@Injectable()
export class TasksService {
  constructor(
    @InjectRepository(TaskEntity)
    private taskRepository: Repository<TaskEntity>,
  ) {}

  async createTask(createTaskDto: CreateTaskDto): Promise<TaskEntity> {
    if (!createTaskDto) {
      throw new Error('Task data is missing');
    }

    const { name, priority, dueDate, description, isSelected, isCompleted } =
      createTaskDto;

    //Create the task
    const task = this.taskRepository.create({
      name,
      priority,
      dueDate,
      description,
      isSelected,
      isCompleted,
    });

    // Have the db save the task created
    await this.taskRepository.save(task);

    return task;
  }

  async removeTask(id: string): Promise<void> {
    const result = await this.taskRepository.delete({ id });

    if (result.affected === 0) {
      throw new NotFoundException(`Task with ID "${id}" not found`);
    }
  }

  async updateTask(id: string, updateTask: UpdateTaskDto) {
    const { isCompleted, isSelected } = updateTask;

    const task = await this.getTaskById(id);

    task.isCompleted = isCompleted;
    task.isSelected = isSelected;

    return await this.taskRepository.save(task);
  }

  async getAllTasks(getTaskFilterDto: GetTaskFilterDto): Promise<TaskEntity[]> {
    const query = this.taskRepository.createQueryBuilder('task');

    const tasks = await query.getMany();

    return tasks;
  }

  async getTaskById(id: string): Promise<TaskEntity> {
    const task = await this.taskRepository.findOneBy({ id });

    if (!task) {
      throw new NotFoundException(
        `Task with the following ID: ${id} was not found`,
      );
    }

    return task;
  }
}
