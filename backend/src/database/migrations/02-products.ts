import { QueryInterface, DataTypes } from 'sequelize';

export default {
  async up(queryInterface: QueryInterface, sequelize: typeof DataTypes) {
    await queryInterface.createTable('products', {
      id: {
        type: sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      product_url: {
        type: sequelize.STRING,
        allowNull: false,
      },
      product_name: {
        type: sequelize.STRING,
        allowNull: false,
      },
      old_price: {
        type: sequelize.INTEGER,
        allowNull: false,
      },
      discount: {
        type: sequelize.INTEGER,
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