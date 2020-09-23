import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Countries } from "./Countries.entity";
import { Warehouses } from "./Warehouses.entity";

@Index("locations_pkey", ["locationId"], { unique: true })
@Entity("locations", { schema: "public" })
export class Locations {
  @PrimaryGeneratedColumn({
    name: "location_id"
  })
  locationId: number;

  @Column("character varying", { name: "address", length: 255 })
  address: string;

  @Column("character varying", {
    name: "postal_code",
    nullable: true,
    length: 20,
  })
  postalCode: string | null;

  @Column("character varying", { name: "city", nullable: true, length: 50 })
  city: string | null;

  @Column("character varying", { name: "state", nullable: true, length: 50 })
  state: string | null;

  @ManyToOne(() => Countries, (countries) => countries.locations, {
    onDelete: "CASCADE",
  })
  @JoinColumn([{ name: "country_id", referencedColumnName: "countryId" }])
  country: Countries;

  @OneToMany(() => Warehouses, (warehouses) => warehouses.location)
  warehouses: Warehouses[];
}
