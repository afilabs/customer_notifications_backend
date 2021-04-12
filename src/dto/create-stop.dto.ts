import { IsNotEmpty, IsOptional } from 'class-validator';

export class CreateStopDto {
  @IsNotEmpty()
  readonly name: string;

  @IsOptional()
  address?: string;

  @IsOptional()
  eta?: string;

  @IsOptional()
  phone?: string;
}
