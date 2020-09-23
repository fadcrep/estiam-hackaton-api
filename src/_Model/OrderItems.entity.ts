import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { Orders } from "./Orders.entity";
import { Products } from "./Products.entity";

@Index("pk_order_items", ["itemId", "orderId"], { unique: true })
@Entity("order_items", { schema: "public" })
export class OrderItems {
  @Column("bigint", { primary: true, name: "order_id" })
  orderId: string;

  @Column("bigint", { primary: true, name: "item_id" })
  itemId: string;

  @Column("numeric", { name: "quantity", precision: 8, scale: 2 })
  quantity: string;

  @Column("numeric", { name: "unit_price", precision: 8, scale: 2 })
  unitPrice: string;

  @ManyToOne(() => Orders, (orders) => orders.orderItems, {
    onDelete: "CASCADE",
  })
  @JoinColumn([{ name: "order_id", referencedColumnName: "orderId" }])
  order: Orders;

  @ManyToOne(() => Products, (products) => products.orderItems, {
    onDelete: "CASCADE",
  })
  @JoinColumn([{ name: "product_id", referencedColumnName: "productId" }])
  product: Products;
}
