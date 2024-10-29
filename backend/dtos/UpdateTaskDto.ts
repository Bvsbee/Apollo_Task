import { IsOptional, IsBoolean } from 'class-validator';

export class UpdateTaskDto {
  @IsOptional()
  @IsBoolean()
  isCompleted: boolean;

  @IsOptional()
  @IsBoolean()
  isSelected: boolean;
}
