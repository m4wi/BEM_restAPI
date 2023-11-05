import express from 'express'
import dotenv from 'dotenv'
import morgan from 'morgan'
import { sequelize } from './orm.js'
import anime from './routes/products.js'

dotenv.config()

const app = express()

app.use(morgan('dev')) // HTTP request logger middleware

app.get('/', (req, res) => {
  res.send('Hola este es el primer servidor para la base de datos de Bembos')
  console.log('Primera peticion')
})

app.get('/test', async (req, res) => {
  res.send('probando')
  try {
    await sequelize.authenticate()
    console.log('Connection has been established successfully.')
  } catch (error) {
    console.error('Unable to connect to the database:', error)
  }
})

app.use('/anime', anime)

app.listen(process.env.PORT, () => {
  console.log(`server on port: ${process.env.PORT}`)
})
