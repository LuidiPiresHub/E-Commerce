import { QueryInterface, DataTypes } from "sequelize"

export default {
  async up(queryInterface: QueryInterface, sequelize: typeof DataTypes) {
    await queryInterface.createTable('users', {
      id: {
        type: sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        type: sequelize.STRING,
        allowNull: false,
      }
    })
  },
  async down(queryInterface: QueryInterface) {
    await queryInterface.dropTable('users');
  },
};