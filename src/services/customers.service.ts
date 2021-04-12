import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Customer } from '../entities/customer.entity';
import { UpdateCustomerDto } from '../dto/update-customer.dto';

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
}
