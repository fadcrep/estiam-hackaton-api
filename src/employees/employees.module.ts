import { Module } from '@nestjs/common';
import { EmployeesController } from './employees.controller';
import { EmployeesService } from './employees.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EmployeesRepository } from './employees.repository';

@Module({
  imports: [
    TypeOrmModule.forFeature([EmployeesRepository])
  ],
  controllers: [EmployeesController],
  providers: [EmployeesService]
})
export class EmployeesModule {}
