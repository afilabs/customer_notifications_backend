import { IsNotEmpty, IsOptional } from 'class-validator';

export class CreateCustomerDto {
  @IsNotEmpty()
  readonly fullName: string;

  @IsOptional()
  phone?: string;

  @IsOptional()
  address1?: string;

  @IsOptional()
  address2?: string;
}
