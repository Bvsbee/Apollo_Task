import { IsOptional, IsBoolean } from 'class-validator';

export class UpdateTaskDto {
  @IsOptional()
  @IsBoolean()
  isSelected: boolean;

  @IsOptional()
  @IsBoolean()
  isCompleted: boolean;
}
