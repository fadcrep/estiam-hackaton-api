import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { Products } from "./Products.entity";
import { Warehouses } from "./Warehouses.entity";

@Index("pk_inventories", ["productId", "warehouseId"], { unique: true })
@Entity("inventories", { schema: "public" })
export class Inventories {
  @Column("bigint", { primary: true, name: "product_id" })
  productId: string;

  @Column("bigint", { primary: true, name: "warehouse_id" })
  warehouseId: string;

  @Column("integer", { name: "quantity" })
  quantity: number;

  @ManyToOne(() => Products, (products) => products.inventories, {
    onDelete: "CASCADE",
  })
  @JoinColumn([{ name: "product_id", referencedColumnName: "productId" }])
  product: Products;

  @ManyToOne(() => Warehouses, (warehouses) => warehouses.inventories, {
    onDelete: "CASCADE",
  })
  @JoinColumn([{ name: "warehouse_id", referencedColumnName: "warehouseId" }])
  warehouse: Warehouses;
}
