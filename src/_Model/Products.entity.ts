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
import { OrderItems } from "./OrderItems.entity";
import { ProductCategories } from "./ProductCategories.entity";

@Index("products_pkey", ["productId"], { unique: true })
@Entity("products", { schema: "public" })
export class Products {
  @PrimaryGeneratedColumn({
    name: "product_id"
  })
  productId: number;

  @Column("character varying", { name: "product_name", length: 255 })
  productName: string;

  @Column("character varying", {
    name: "description",
    nullable: true,
    length: 2000,
  })
  description: string | null;

  @Column("numeric", {
    name: "standard_cost",
    nullable: true,
    precision: 9,
    scale: 2,
  })
  standardCost: string | null;

  @Column("numeric", {
    name: "list_price",
    nullable: true,
    precision: 9,
    scale: 2,
  })
  listPrice: string | null;

  @OneToMany(() => Inventories, (inventories) => inventories.product)
  inventories: Inventories[];

  @OneToMany(() => OrderItems, (orderItems) => orderItems.product)
  orderItems: OrderItems[];

  @ManyToOne(
    () => ProductCategories,
    (productCategories) => productCategories.products,
    { onDelete: "CASCADE" }
  )
  @JoinColumn([{ name: "category_id", referencedColumnName: "categoryId" }])
  category: ProductCategories;
}
