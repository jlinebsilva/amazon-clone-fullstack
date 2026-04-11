import { Product } from "./Product";
import { Seller } from "./Seller";

Seller.hasMany(Product, {
    foreignKey: "sellerId"
})

Product.belongsTo(Seller, {
    foreignKey: "sellerId"
})

export { Product, Seller }