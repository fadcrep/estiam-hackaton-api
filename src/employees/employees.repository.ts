import { EntityRepository, Repository } from "typeorm";
import { Employees } from "../_Model/Employees.entity";
import { Logger } from "@nestjs/common";

@EntityRepository(Employees)
export class EmployeesRepository extends Repository<Employees>{
    private logger = new Logger("EmployeesRepository");


    async getAllEmployees(): Promise<Employees[]>{
        const query = this.createQueryBuilder('employees');
        query.leftJoinAndSelect('employees.manager', 'manager');
        query.leftJoinAndSelect('employees.orders', 'orders');

        try {
            const employees = await query.getMany();

            return employees;
        } catch (error) {
            this.logger.error(`Failed to get list on shore jobs `, error.stack);
        }
    }
}