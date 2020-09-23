import {
  Column,
  Entity,
  Index,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Contacts } from "./Contacts.entity";
import { Orders } from "./Orders.entity";

@Index("customers_pkey", ["customerId"], { unique: true })
@Entity("customers", { schema: "public" })
export class Customers {
  @PrimaryGeneratedColumn({
    name: "customer_id"
  })
  customerId: number;

  @Column("character varying", { name: "name", length: 255 })
  name: string;

  @Column("character varying", { name: "address", nullable: true, length: 255 })
  address: string | null;

  @Column("character varying", { name: "website", nullable: true, length: 255 })
  website: string | null;

  @Column("numeric", {
    name: "credit_limit",
    nullable: true,
    precision: 8,
    scale: 2,
  })
  creditLimit: string | null;

  @OneToMany(() => Contacts, (contacts) => contacts.customer)
  contacts: Contacts[];

  @OneToMany(() => Orders, (orders) => orders.customer)
  orders: Orders[];
}
