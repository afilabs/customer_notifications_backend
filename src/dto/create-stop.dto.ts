import { IsNotEmpty, IsOptional } from 'class-validator';

export class CreateStopDto {
  @IsNotEmpty()
  readonly name: string;

  @IsOptional()
  address?: string;

  @IsNotEmpty()
  lat: number;

  @IsNotEmpty()
  lng: number;

  @IsNotEmpty()
  driverLat: number;

  @IsNotEmpty()
  driverLng: number;

  @IsNotEmpty()
  driverTimezone: string;

  @IsOptional()
  eta?: string;

  @IsOptional()
  phone?: string;
}
