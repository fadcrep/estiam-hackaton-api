import {
  Column,
  Entity,
  Index,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Countries } from "./Countries.entity";

@Index("regions_pkey", ["regionId"], { unique: true })
@Entity("regions", { schema: "public" })
export class Regions {
  @PrimaryGeneratedColumn({
    name: "region_id",
  })
  regionId: number;

  @Column("character varying", { name: "region_name", length: 50 })
  regionName: string;

  @OneToMany(() => Countries, (countries) => countries.region)
  countries: Countries[];
}
