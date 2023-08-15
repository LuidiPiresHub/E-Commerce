import { QueryInterface } from 'sequelize';

export default {
  async up(queryInterface: QueryInterface) {
    await queryInterface.bulkInsert('products', [
      {
        product_name: 'NVIDIA',
        price: 2500,
        category: 'placa de video',
      },
      {
        product_name: 'GeForce RTX ® Série 40 - NVIDIA',
        price: 2500,
        category: 'placa de video',
      },
      {
        product_name: 'AMD Radeon™ RX Série 7000',
        price: 2500,
        category: 'placa de video',
      },
    ]);
  },

  async down(queryInterface: QueryInterface) {
    await queryInterface.bulkDelete('products', {});
  }
};