import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Orders } from "./Orders.entity";

@Index("employees_pkey", ["employeeId"], { unique: true })
@Entity("employees", { schema: "public" })
export class Employees {
  @PrimaryGeneratedColumn({
    name: "employee_id",
  })
  employeeId: number;

  @Column("character varying", { name: "first_name", length: 255 })
  firstName: string;

  @Column("character varying", { name: "last_name", length: 255 })
  lastName: string;

  @Column("character varying", { name: "email", length: 255 })
  email: string;

  @Column("character varying", { name: "phone", length: 50 })
  phone: string;

  @Column("timestamp without time zone", { name: "hire_date" })
  hireDate: Date;

  @Column("character varying", { name: "job_title", length: 255 })
  jobTitle: string;

  @ManyToOne(() => Employees, (employees) => employees.employees, {
    onDelete: "CASCADE",
  })
  @JoinColumn([{ name: "manager_id", referencedColumnName: "employeeId" }])
  manager: Employees;

  @OneToMany(() => Employees, (employees) => employees.manager)
  employees: Employees[];

  @OneToMany(() => Orders, (orders) => orders.salesman)
  orders: Orders[];
}
