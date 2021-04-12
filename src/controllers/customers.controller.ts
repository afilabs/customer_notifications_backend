import { Controller, Put, Body, Param } from '@nestjs/common';
import { CustomersService } from '../services/customers.service';
import { UpdateCustomerDto } from '../dto/update-customer.dto';
import { SendEtaCustomerDto } from '../dto/send-eta-customer.dto';

@Controller('customers')
export class CustomersController {
  constructor(private readonly customersService: CustomersService) {}

  // @Post('send-eta')
  // sendEta(@Body() sendEtaCustomerDto: SendEtaCustomerDto) {
  //   return 1;
  //   // return this.customersService.sendEta(sendEtaCustomerDto);
  // }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() updateCustomerDto: UpdateCustomerDto,
  ) {
    await this.customersService.update(+id, updateCustomerDto);
    return this.customersService.findOne(+id);
  }
}
