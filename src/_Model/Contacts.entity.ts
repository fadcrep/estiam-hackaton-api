import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Customers } from "./Customers.entity";

@Index("contacts_pkey", ["contactId"], { unique: true })
@Entity("contacts", { schema: "public" })
export class Contacts {
  @PrimaryGeneratedColumn({
    name: "contact_id",
  })
  contactId: number;

  @Column("character varying", { name: "first_name", length: 255 })
  firstName: string;

  @Column("character varying", { name: "last_name", length: 255 })
  lastName: string;

  @Column("character varying", { name: "email", length: 255 })
  email: string;

  @Column("character varying", { name: "phone", nullable: true, length: 20 })
  phone: string | null;

  @ManyToOne(() => Customers, (customers) => customers.contacts, {
    onDelete: "CASCADE",
  })
  @JoinColumn([{ name: "customer_id", referencedColumnName: "customerId" }])
  customer: Customers;
}
