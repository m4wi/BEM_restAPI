import { Sequelize } from 'sequelize'

export const sequelize = new Sequelize({
  dialect: 'mariadb',
  username: 'root',
  password: '',
  host: 'localhost',
  database: 'bembosAPI'
})
