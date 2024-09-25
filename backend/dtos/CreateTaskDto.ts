import {
  IsBoolean,
  IsDate,
  IsEnum,
  IsNotEmpty,
  IsOptional,
  IsString,
} from 'class-validator';

import { PriorityEnum } from 'task/TaskPriority-enum';

export class CreateTaskDto {
  @IsString()
  @IsNotEmpty()
  id: string;

  @IsString()
  @IsNotEmpty()
  name: string;

  @IsEnum(PriorityEnum, { message: 'Priority must be High Medium or Low' })
  priority: PriorityEnum;

  @IsString()
  @IsNotEmpty()
  @IsDate()
  dueDate: string;

  @IsOptional()
  @IsString()
  description?: string;

  @IsOptional()
  @IsString()
  isSelected: boolean;

  @IsOptional()
  @IsBoolean()
  isCompleted: boolean;
}
