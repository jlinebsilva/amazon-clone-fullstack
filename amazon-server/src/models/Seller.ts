import { DataTypes, Model } from "sequelize";
import { sequelize } from '../config/database';

export class Seller extends Model {
    private id!: number
    private name!: string
}

Seller.init(
    {
        id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
        name: { type: DataTypes.STRING, allowNull: false }
    },

    { sequelize, modelName: 'seller' }
)