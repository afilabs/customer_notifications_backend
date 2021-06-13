import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Customer } from '../entities/customer.entity';
import { UpdateCustomerDto } from '../dto/update-customer.dto';
import { SendEtaCustomerDto } from '../dto/send-eta-customer.dto';
import * as Twilio from 'twilio';
import { configService } from '../config/config.service';

@Injectable()
export class CustomersService {
  constructor(
    @InjectRepository(Customer)
    private customersRepository: Repository<Customer>,
  ) {}

  findAll(): Promise<Customer[]> {
    return this.customersRepository.find();
  }

  findOne(id: number): Promise<Customer> {
    return this.customersRepository.findOne(id);
  }

  update(id: number, updateCustomerDto: UpdateCustomerDto): Promise<any> {
    return this.customersRepository.update({ id }, updateCustomerDto);
  }

  async remove(id: number): Promise<void> {
    await this.customersRepository.delete(id);
  }

  async sendEta(sendEtaCustomerDto: SendEtaCustomerDto, toPhone: string) {
    const client = Twilio(
      configService.getValue('TWILIO_ACCOUNT_SID'),
      configService.getValue('TWILIO_AUTH_TOKEN'),
    );
    const response = client.messages.create({
      body: sendEtaCustomerDto.msg,
      from: '+15017122661',
      to: toPhone,
    });
    //.then((message) => console.log(message.sid));
    return { msg: 'Message sent successfully' };
  }
}
