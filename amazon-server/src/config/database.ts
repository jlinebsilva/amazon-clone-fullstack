import dotenv from "dotenv";
import { Sequelize } from "sequelize";

dotenv.config()

const DB_NAME = process.env.DB_NAME
const DB_USER = process.env.DB_USER
const DB_PSWD = process.env.DB_PASSWORD
const DB_HOST = process.env.DB_HOST

export const sequelize = new Sequelize(
    `${DB_NAME}`,
    `${DB_USER}`,
    `${DB_PSWD}`,

    {
        host: `${DB_HOST}`,
        dialect: 'postgres',
        logging: false
    }
)

sequelize.authenticate().then((function () {
    console.info("\n🟢 Banco de dados conectado com sucesso\n")

})).catch(function (err) {
    console.error(`\n🔴 Não foi possível conectar no banco de dados = ${err}\n`)
})