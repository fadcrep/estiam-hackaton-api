import { Controller, Logger, Get } from '@nestjs/common';
import { EmployeesService } from './employees.service';
import { Employees } from '../_Model/Employees.entity';

@Controller('employees')
export class EmployeesController {

    private logger = new Logger('JobsController');
    constructor(private employeesService: EmployeesService) {

    }

    @Get()
    getAllEmployees():Promise<Employees[]>{
        this.logger.verbose(`Getting all user`);
        return this.employeesService.getAllEmployees();
    }
}
