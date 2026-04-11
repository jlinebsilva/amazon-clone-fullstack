import cors from 'cors'
import dotenv from "dotenv"
import express from 'express'
import { sequelize } from './config/database'
import router from './routes/index'

dotenv.config()
const PORT = process.env.PORT

const server = express()
server.use(cors({ origin: "*" }))
server.use(express.json())

server.use(router)

sequelize.sync().then(() => {
    server.listen(PORT,
        () => {
            console.info(`:: SERVIDOR EM EXECUÇÃO NA PORTA: ${PORT} ::`)
            console.warn(`http://localhost:${PORT}`)
        })
})