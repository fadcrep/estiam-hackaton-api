import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { OrderItems } from "./OrderItems.entity";
import { Customers } from "./Customers.entity";
import { Employees } from "./Employees.entity";

@Index("orders_pkey", ["orderId"], { unique: true })
@Entity("orders", { schema: "public" })
export class Orders {
  @PrimaryGeneratedColumn({
    name: "order_id"
  })
  orderId: number;

  @Column("character varying", { name: "status", length: 20 })
  status: string;

  @Column("timestamp without time zone", { name: "order_date" })
  orderDate: Date;

  @OneToMany(() => OrderItems, (orderItems) => orderItems.order)
  orderItems: OrderItems[];

  @ManyToOne(() => Customers, (customers) => customers.orders, {
    onDelete: "CASCADE",
  })
  @JoinColumn([{ name: "customer_id", referencedColumnName: "customerId" }])
  customer: Customers;

  @ManyToOne(() => Employees, (employees) => employees.orders, {
    onDelete: "SET NULL",
  })
  @JoinColumn([{ name: "salesman_id", referencedColumnName: "employeeId" }])
  salesman: Employees;
}
