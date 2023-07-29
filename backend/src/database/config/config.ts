import { Options } from "sequelize";

const config: Options = {
  username: 'root',
  password: 'commerce',
  database: 'e-commerce_db',
  host: 'localhost',
  port: 3306,
  dialect: 'mysql',
}

export = config;
