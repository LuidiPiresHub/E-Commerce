import { QueryInterface, DataTypes } from 'sequelize';

export default {
  async up(queryInterface: QueryInterface, sequelize: typeof DataTypes) {
    await queryInterface.createTable('products', {
      id: {
        type: sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      product_name: {
        type: sequelize.STRING,
        allowNull: false,
      },
      price: {
        type: sequelize.INTEGER,
        allowNull: false,
      },
      category: {
        type: sequelize.STRING,
        allowNull: false,
      },
    });
  },
  async down(queryInterface: QueryInterface) {
    await queryInterface.dropTable('products');
  },
};