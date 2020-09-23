import {
  Column,
  Entity,
  Index,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Products } from "./Products.entity";

@Index("product_categories_pkey", ["categoryId"], { unique: true })
@Entity("product_categories", { schema: "public" })
export class ProductCategories {
  @PrimaryGeneratedColumn({
    name: "category_id"
  })
  categoryId: number;

  @Column("character varying", { name: "category_name", length: 255 })
  categoryName: string;

  @OneToMany(() => Products, (products) => products.category)
  products: Products[];
}
