import { QueryInterface, DataTypes } from 'sequelize';

export default {
  async up(queryInterface: QueryInterface, sequelize: typeof DataTypes) {
    await queryInterface.createTable('users', {
      id: {
        type: sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      name: {
        type: sequelize.STRING,
        allowNull: false,
      },
      email: {
        type: sequelize.STRING,
        allowNull: false,
        unique: true,
      },
      password: {
        type: sequelize.STRING,
        allowNull: false,
      },
      role: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    });
  },
  async down(queryInterface: QueryInterface) {
    await queryInterface.dropTable('users');
  },
};