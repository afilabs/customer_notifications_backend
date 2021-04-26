import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Stop } from '../entities/stop.entity';
import { UpdateStopDto } from '../dto/update-stop.dto';
import { DateTime } from 'luxon';
import fetch from 'cross-fetch';

@Injectable()
export class StopsService {
  constructor(
    @InjectRepository(Stop)
    private stopsRepository: Repository<Stop>,
  ) {}

  findOne(id: number): Promise<Stop> {
    return this.stopsRepository.findOne(id);
  }

  async update(id: number, updateStopDto: UpdateStopDto): Promise<any> {
    const origin = `${updateStopDto.driverLat},${updateStopDto.driverLng}`;
    const destination = `${updateStopDto.lat},${updateStopDto.lng}`;
    updateStopDto.eta = await this.findETA(
      origin,
      destination,
      updateStopDto.driverTimezone,
    );

    return this.stopsRepository.update({ id }, updateStopDto);
  }

  async findETA(origin: string, destination: string, driverTimezone: string) {
    let seconds = 300; // Default 5m
    const query = `https://maps.googleapis.com/maps/api/directions/json?origin=${origin}&destination=${destination}&key=${process.env.GOOGLE_API_KEY}`;
    const response = await fetch(query);
    const data = await response.json();
    if (data.status === 'OK') {
      seconds = data.routes[0].legs[0]['duration']['value'];
    }

    const currentTime = DateTime.local().setZone(driverTimezone);
    const nextTime = currentTime.plus({ seconds: seconds }).toLocal();
    const eta = nextTime.toLocaleString(DateTime.TIME_24_SIMPLE);

    return eta;
  }
}
