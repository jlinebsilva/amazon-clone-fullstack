import { DataTypes, Model } from "sequelize";
import { sequelize } from "../config/database";

export class Product extends Model {
    public id!: number
    public name!: string
    public image!: string
    public price!: number
    public sellerId!: number
}

Product.init(
    {
        id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
        name: { type: DataTypes.STRING, allowNull: false },
        image: { type: DataTypes.STRING, allowNull: false },
        price: { type: DataTypes.FLOAT, allowNull: false },
    },

    { sequelize, modelName: "product" }
)