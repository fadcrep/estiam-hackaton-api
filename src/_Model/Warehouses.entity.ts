import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Inventories } from "./Inventories.entity";
import { Locations } from "./Locations.entity";

@Index("warehouses_pkey", ["warehouseId"], { unique: true })
@Entity("warehouses", { schema: "public" })
export class Warehouses {
  @PrimaryGeneratedColumn({
    name: "warehouse_id",
  })
  warehouseId: number;

  @Column("character varying", {
    name: "warehouse_name",
    nullable: true,
    length: 255,
  })
  warehouseName: string | null;

  @OneToMany(() => Inventories, (inventories) => inventories.warehouse)
  inventories: Inventories[];

  @ManyToOne(() => Locations, (locations) => locations.warehouses, {
    onDelete: "CASCADE",
  })
  @JoinColumn([{ name: "location_id", referencedColumnName: "locationId" }])
  location: Locations;
}
