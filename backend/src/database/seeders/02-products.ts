import { QueryInterface } from 'sequelize';

export default {
  async up(queryInterface: QueryInterface) {
    await queryInterface.bulkInsert('products', [
      {
        product_name: 'NVIDIA',
        product_url: `https://www.nvidia.com/content/dam/en-zz/Solutions/
geforce/ada/rtx-4090/geforce-ada-4090-web-og-1200x630.jpg`,
        old_price: 3000,
        discount: 50,
        price: 1500,
        category: 'placa de video',
      },
      {
        product_name: 'GeForce RTX ® Série 40 - NVIDIA',
        product_url: `https://www.nvidia.com/content/dam/en-zz/Solutions/
geforce/ada/rtx-4090/geforce-ada-4090-web-og-1200x630.jpg`,
        old_price: 3000,
        discount: 50,
        price: 1500,
        category: 'placa de video',
      },
      {
        product_name: 'AMD Radeon™ RX Série 7000',
        product_url: `https://www.nvidia.com/content/dam/en-zz/Solutions/
geforce/ada/rtx-4090/geforce-ada-4090-web-og-1200x630.jpg`,
        old_price: 3000,
        discount: 50,
        price: 1500,
        category: 'placa de video',
      },
    ]);
  },

  async down(queryInterface: QueryInterface) {
    await queryInterface.bulkDelete('products', {});
  }
};