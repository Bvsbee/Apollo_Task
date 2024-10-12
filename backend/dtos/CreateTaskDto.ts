import {
  IsBoolean,
  IsDate,
  IsDateString,
  IsEnum,
  IsNotEmpty,
  IsOptional,
  IsString,
} from 'class-validator';

import { PriorityEnum } from 'task/TaskPriority-enum';

export class CreateTaskDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsEnum(PriorityEnum, { message: 'Priority must be High Medium or Low' })
  priority: PriorityEnum;

  @IsString()
  @IsNotEmpty()
  @IsDateString()
  dueDate: string;

  @IsOptional()
  @IsString()
  description?: string;

  @IsOptional()
  @IsBoolean()
  isSelected: boolean;

  @IsOptional()
  @IsBoolean()
  isCompleted: boolean;
}
