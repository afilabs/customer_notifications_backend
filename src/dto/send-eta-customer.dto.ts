import { IsNotEmpty } from 'class-validator';

export class SendEtaCustomerDto {
  @IsNotEmpty()
  readonly msg: string;
}
