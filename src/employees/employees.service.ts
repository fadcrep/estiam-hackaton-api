import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { EmployeesRepository } from './employees.repository';
import { Employees } from 'src/_Model/Employees.entity';

@Injectable()
export class EmployeesService {
    constructor(
        @InjectRepository(EmployeesRepository)
        private employeesRepository: EmployeesRepository
        ){
    }

    async getAllEmployees(): Promise<Employees[]> {
        return this.employeesRepository.getAllEmployees();
            
    }
}
