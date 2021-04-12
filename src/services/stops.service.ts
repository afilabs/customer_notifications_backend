import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Stop } from '../entities/stop.entity';
import { UpdateStopDto } from '../dto/update-stop.dto';

@Injectable()
export class StopsService {
  constructor(
    @InjectRepository(Stop)
    private stopsRepository: Repository<Stop>,
  ) {}

  findOne(id: number): Promise<Stop> {
    return this.stopsRepository.findOne(id);
  }

  update(id: number, updateStopDto: UpdateStopDto): Promise<any> {
    return this.stopsRepository.update({ id }, updateStopDto);
  }
}
