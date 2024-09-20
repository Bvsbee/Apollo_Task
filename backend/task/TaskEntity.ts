import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { PriorityEnum } from './TaskPriority-enum';

//TaskEntity is the shape of how the data will be stored in the database
//

@Entity('tasks')
export class TaskEntity {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  name: string;

  @Column({ type: 'enum', enum: PriorityEnum, default: PriorityEnum.LOW })
  priority: PriorityEnum;

  @Column({ type: 'date' })
  dueDate: string;

  @Column({ nullable: true })
  description: string;

  @Column({ default: false })
  isSelected: boolean;

  @Column({ default: false })
  isCompleted: boolean;
}
