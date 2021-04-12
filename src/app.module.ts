import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { configService } from './config/config.service';
import { CustomersController } from './controllers/customers.controller';
import { StopsController } from './controllers/stops.controller';
import { CustomersService } from './services/customers.service';
import { StopsService } from './services/stops.service';
import { Customer } from './entities/customer.entity';
import { Stop } from './entities/stop.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot(configService.getTypeOrmConfig()),
    TypeOrmModule.forFeature([Customer, Stop]),
  ],
  providers: [AppService, CustomersService, StopsService],
  controllers: [AppController, CustomersController, StopsController],
})
export class AppModule {}
