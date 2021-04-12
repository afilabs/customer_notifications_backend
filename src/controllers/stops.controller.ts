import { Controller, Param, Get, Put, Body } from '@nestjs/common';
import { StopsService } from '../services/stops.service';
import { UpdateStopDto } from '../dto/update-stop.dto';

@Controller('stops')
export class StopsController {
  constructor(private readonly stopsService: StopsService) {}

  @Get(':id')
  async find(@Param('id') id: string) {
    return this.stopsService.findOne(+id);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() updateStopDto: UpdateStopDto) {
    await this.stopsService.update(+id, updateStopDto);
    return this.stopsService.findOne(+id);
  }
}
